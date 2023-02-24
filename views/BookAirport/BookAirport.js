import style from '@/styles/Contact.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toastSuccess } from '@/hook/toastr';
import $ from 'jquery';
import qs from 'qs';
import national from '@/pages/api/national.json';
import { Sendmail } from '@/pages/api/CallAPI';
import ScrollToTop from '@/hook/scrollToTop';
import HandToast from '@/components/HandToast/HandToast';
import { useForm } from 'react-hook-form';
import { useApppContext } from '@/pages/_app';

const cx = classNames.bind(style);
const ListType = [
    'BMW',
    'Rolls Royce',
    'Mercedes',
    'Limousine',
    'Vin bus'
]
const ListAirport = [
    'Noi Bai (Ha Noi)',
    'Tan Son Nhat (HCM city)',
    'Da Nang',
    'Nha Trang (Khanh Hoa)',
    'Phu Quoc (Kien Giang)',
    'Van Don (Quang Ninh)'
]


function Bookairport({ click, transfer, type, typecar }) {



    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const isFutureDate = (selectedDate) => {
        const today = new Date();
        const date = new Date(selectedDate);

        return date.getTime() > today.getTime();
    };

    const [ipAddress, setIpAddress] = useState('');
    const [showToast, setshowToast] = useState(false);
    const CT = useApppContext();

    const handleEnquire = (data) => {
        callApi(data);
        // setshowToast(true);
        console.log('nottttttttttt', data);



    };
    // lay ip address
    $.getJSON('https://jsonip.com/?callback=?').done(function (data) {
        var ip_address = window.JSON.parse(JSON.stringify(data, null, 2));
        ip_address = ip_address.ip;
        setIpAddress(ip_address);
    });



    const callApi = async (data) => {
        const response = await axios({
            method: 'post',
            url: 'https://vnxpedia.3i.com.vn/TravelAPI/InsertBooking',
            data: qs.stringify({
                Ip: ipAddress,
                UserName: CT.currentUser ? CT.currentUser.UserName : null,
                TourName: transfer,
                Lenght: data.Lenght,
                Country: data.country,
                Adult: data.Adult,
                Children: data.Children,
                FullName: data.FullName,
                CheckIn: data.CheckIn,
                CheckOut: data.CheckOut,
                Destination: data.Destination,
                Email: data.Email,
                Phone: data.Phone,
                Note: data.Note,
                UsFrom: data.fromus,
                Status: 'BOOKED',
                Type: 'TRANSFER',
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });


        if (response.status === 200) {
            toastSuccess(' Inquire complete!');
            callApiSendmail(data);
            click(false);
        } else alert('Invaild infor')

    };


    const callApiSendmail = async (data) => {
        const response = await Sendmail(transfer, data.email)

    };


    return (
        <div className={cx("booking-infor")}>
            {showToast && <HandToast click={click} />}
            <ScrollToTop />
            <div className={cx("book-crumb")}>
                Home | <span onClick={() => click(false)}>LUXURY TRANSFER</span> | BOOK

            </div>

            <form className={cx("book-content")} onSubmit={handleSubmit(handleEnquire)}>

                <div className={cx("content-mid")}>
                    <div className={cx("header-form")}>
                        <span className={cx("title-form")}>{type} BOOKING </span>

                    </div>


                    <div className={cx("item-form")}>
                        <div className={cx("item-form-1")}>
                            <label className={cx("label-booking")}>
                                Type car: {typecar}
                            </label>
                        </div>

                        <div className={cx("item-form-1")}>
                            <label className={cx("label-booking")}>
                                Model: {transfer}
                            </label>
                            {/* <div>
                                <select name='typecar' className={cx("our-services")} onChange={(e) => setcountry(e.target.value)}
                                    {...register("typecar", { required: true })}
                                >
                                    <option value="" selected="selected">Select a vehicle ...</option>
                                    {ListType.map((d, i) => (
                                        <option key={i} value={d}>{d}</option>
                                    ))}
                                </select>
                                {errors.typecar && (
                                    <span className={cx("error-message")}>Please select your vehicle</span>
                                )}
                            </div> */}
                        </div>
                    </div>


                    <div className={cx("item-form")}>
                        <div className={cx("item-form-number")}>
                            <label className={cx("label-booking")}>
                                No of adult: <br />
                            </label>
                            <div className={cx("cus-infor")}>

                                <input
                                    type="number"
                                    name="adult"
                                    placeholder="Enter your number of adult"
                                    className={cx("cus-adult")}

                                    {...register('Adult', { required: true })}
                                /><br />
                                {errors.Adult && errors.Adult.type === 'required' && (
                                    <span className={cx("error-message")}>Adult Off cannot be empty !</span>
                                )}


                            </div>

                        </div>

                        <div className={cx("item-form-number")}>
                            <label className={cx("label-booking")}>
                                No of children: <br />
                            </label>
                            <div className={cx("cus-infor")}>

                                <input
                                    type="number"
                                    name="children"
                                    placeholder="Enter your number of children"
                                    className={cx("cus-children")}

                                    {...register('Children', { required: true })}
                                /><br />
                                {errors.Children && errors.Children.type === 'required' && (
                                    <span className={cx("error-message")}>Children cannot be empty !</span>
                                )}

                            </div>

                        </div>
                    </div>



                    <div className={cx("item-form")}>
                        <div className={cx("item-form-number")}>
                            <label className={cx("label-booking")}>
                                Time: <br />
                            </label>
                            <div className={cx("cus-infor")}>
                                <div className={cx("input-enquire--name")}>
                                    <input
                                        type="number"

                                        placeholder="Number day - night"
                                        className={cx("cus-adult")}
                                        {...register('Lenght', { required: true })}
                                    /><br />

                                    {errors.Lenght && errors.Lenght.type === 'required' && (
                                        <span className={cx("error-message")}>Time cannot be empty !</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={cx("item-form-number")}>
                            <label className={cx("label-booking")}>
                                Start Date: <br />
                            </label>
                            <div className={cx("cus-infor")}>

                                <input
                                    type="date"

                                    placeholder="Enter your number of adult"
                                    className={cx("cus-adult")}
                                    {...register('CheckIn', {
                                        required: true, validate: {
                                            futureDate: isFutureDate,
                                        }
                                    })}
                                /><br />
                                {errors.CheckIn && errors.CheckIn.type === 'required' && (
                                    <span className={cx("error-message")}>Date cannot be empty !</span>
                                )}

                                {errors.CheckIn?.type === "futureDate" && (
                                    <span className={cx("error-message")}>Please select a future date</span>
                                )}

                            </div>
                        </div>

                        <div className={cx("item-form-number")}>
                            <label className={cx("label-booking")}>
                                End Date: <br />
                            </label>
                            <div className={cx("cus-infor")}>

                                <input
                                    type="date"

                                    placeholder="Enter your number of adult"
                                    className={cx("cus-adult")}
                                    {...register('CheckOut', {
                                        required: true, validate: {
                                            futureDate: isFutureDate,
                                        }
                                    })}
                                /><br />
                                {errors.CheckOut && errors.CheckOut.type === 'required' && (
                                    <span className={cx("error-message")}>Date cannot be empty !</span>
                                )}

                                {errors.CheckOut?.type === "futureDate" && (
                                    <span className={cx("error-message")}>Please select a future date</span>
                                )}

                            </div>
                        </div>

                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Journey of Request:
                        </label>
                        <div className={cx("cus-infor")}>

                            <textarea
                                placeholder="Enter Your Journey"
                                className={cx("book-note")}

                                {...register('Destination', { required: true })}
                            ></textarea>
                            {errors.Destination && errors.Destination.type === 'required' && (
                                <span className={cx("error-message")}>Journey cannot be empty !</span>
                            )}
                        </div>
                    </div>


                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Special request:
                        </label>
                        <div>
                            <textarea
                                placeholder="Message"
                                className={cx("book-note")}

                                {...register('Note')}
                            ></textarea>

                        </div>
                    </div>




                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How should we call you? (*)
                        </label>
                        <div className={cx("cus-infor")}>
                            <div className={cx("input-enquire--name")}>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className={cx("cus-name")}
                                    {...register('FullName', { required: true })}
                                />
                                {errors.FullName && errors.FullName.type === 'required' && (
                                    <span className={cx("error-message")}>Your Name cannot be empty !</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your nationality:
                        </label>
                        <div>
                            <select name='country' className={cx("our-services")} onChange={(e) => setcountry(e.target.value)}
                                {...register("country", { required: true })}
                            >
                                <option value=''>--Select your national</option>
                                {(national).map((d, item) => (
                                    <option key={d.code} value={d.name}>{d.name}</option>
                                ))}
                            </select>
                            {errors.country && (
                                <span className={cx("error-message")}>Please select your country</span>
                            )}
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Email address (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className={cx("cus-mail")}
                                {...register('Email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
                            {errors.Email && errors.Email.type === 'required' && (
                                <span className={cx("error-message")}>Email cannot be empty !</span>
                            )}
                            {errors.Email && errors.Email.type === 'pattern' && (
                                <span className={cx("error-message")}>Invalid email</span>
                            )}
                        </div>
                    </div>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your phone number (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Enter Your Phone"
                                className={cx("cus-phone")}
                                {...register('Phone', {
                                    required: true,
                                    minLength: 9,
                                    maxLength: 15,
                                    valueAsNumber: false,
                                })}
                            />
                            {errors.Phone && errors.Phone.type === 'required' && (
                                <span className={cx("error-message")}>Phone number cannot be empty !</span>
                            )}
                            {errors.Phone && errors.Phone.type === 'maxLength' && (
                                <span className={cx("error-message")}>Invalid phone number</span>
                            )}
                            {errors.Phone && errors.Phone.type === 'minLength' && (
                                <span className={cx("error-message")}>Invalid phone number</span>
                            )}
                        </div>
                    </div>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How did you hear about our services?
                        </label>
                        <div>
                            <select name='ourServices' className={cx("our-services")}  {...register("fromus", { required: true })}>
                                <option value="">-- Select --</option>
                                <option value="Your Friend">Recommended by friend or colleague</option>
                                <option value="Social Network">Social Network</option>
                                <option value="Blog">Blog or publication</option>
                            </select>
                        </div>
                    </div>


                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn-send")} >SUBMIT</button>
                </div>
            </form>
        </div>


    );
}

export default Bookairport;

