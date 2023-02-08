import style from '@/styles/informationBooking.module.scss';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

import { toastSuccess } from '@/hook/toastr';
import $ from 'jquery';
import qs from 'qs';
import national from '@/pages/api/national.json';

const cx = classNames.bind(style);

function Booking({ onClick, datas, title, long }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [ipAddress, setIpAddress] = useState('');
    const [Bookinfor, setBookinfor] = useState({
        Ip: ipAddress,
        TourName: datas.TourName,
        Country: datas.Country,
        Lenght: datas.DETAIL.length,
        StartDate: '',
        Adult: '',
        Children: '',
        Children1: '',
        Children2: '',
        Hotel: '',
        FullName: '',
        UsFrom: '',
        Email: '',
        Phone: '',
        Note: '',
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleEnquire = (data) => {
        callApi(data);
        callApiSendmail(data);
    };

    // lay ip address
    $.getJSON('https://jsonip.com/?callback=?').done(function (data) {
        var ip_address = window.JSON.parse(JSON.stringify(data, null, 2));
        ip_address = ip_address.ip;
        setIpAddress(ip_address);
    });

    useEffect(() => {
        setBookinfor({ ...Bookinfor });
    }, [Bookinfor.Adult, Bookinfor.Children, Bookinfor.Children1, Bookinfor.Children2, Bookinfor.Hotel, Bookinfor.UsFrom]);
    useEffect(() => {
        let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }
    }, [])


    const callApi = async (data) => {
        const response = await axios({
            method: 'post',
            url: 'https://vnxpedia.3i.com.vn/TravelAPI/InsertBooking',
            data: qs.stringify({
                Ip: ipAddress,
                TourCode: datas.TourCode,
                UserName: currentUser.UserName ? currentUser.UserName : null,
                TourName: datas.TourName,
                Country: datas.Country,
                Lenght: datas.DETAIL.length,
                StartDate: data.StartDate,
                Adult: Bookinfor.Adult,
                Children: Bookinfor.Children,
                Children1: Bookinfor.Children1,
                Children2: Bookinfor.Children2,
                Hotel: Bookinfor.Hotel,
                FullName: data.FullName,
                UsFrom: Bookinfor.UsFrom,
                Email: data.Email,
                Phone: data.Phone,
                Note: Bookinfor.Note,

            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
        console.log(response.data)

        if (response.status === 200) {
            console.log('Inquire complete!')
            toastSuccess(' Inquire complete!');
            setTimeout(() => onClick(), 2000);
            setTimeout(() => onClick(), 2000);
            console.log(Bookinfor);
        } else alert('Invaild infor')

    };

    const callApiSendmail = async (data) => {
        const response = await axios({
            method: 'post',
            url: 'https://vnxpedia.3i.com.vn/TravelAPI/SendMailCustom',
            data: qs.stringify({
                header: `You have new travel from VNXpedia`,
                content: `Tour name: ${datas.TourName}`,
                mail: data.Email,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
    };

    return (
        <div className={cx("booking-infor")}>
            <div className={cx("book-crumb")}>Home | BOOK TOUR</div>
            <form className={cx("book-content")} onSubmit={handleSubmit(handleEnquire)}>
                <div className={cx("content-header")}>
                    <p className={cx("tour-name")}>
                        Tour Name:&nbsp;
                        <span className={cx("tour-name-content")}>
                            {datas.TourName}
                        </span>
                    </p>
                    <p className={cx("tour-duration")}>
                        Tour duration:&nbsp;
                        <span className={cx("tour-duration-content")}>
                            {datas.DETAIL.length} days
                        </span>
                    </p>
                    <p className={cx("tour-country")}>
                        Country:&nbsp;
                        <span className={cx("tour-country-content")}>
                            {datas.Country}
                        </span>
                    </p>
                </div>
                <hr className={cx("line")}></hr>
                <div className={cx("content-mid")}>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your proposed arrival date:
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="date"
                                name="date"
                                className={cx("book-date")}
                                {...register('StartDate', { required: true })}
                            />
                            {errors.StartDate && errors.StartDate.type === 'required' && (
                                <span className={cx("error-message")}>Date cannot be empty !</span>
                            )}
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How many people in your group?
                        </label>
                        <div className={cx("age-option")}>
                            <input
                                type="text"
                                placeholder="Adult(s) (>=12 years old)"
                                className={cx("book-age")}
                                min="0"
                                max="100"
                                value={Bookinfor.Adult}
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Adult: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Child(ren) (7-11 years old)"
                                className={cx("book-age")}
                                min="0"
                                value={Bookinfor.Children}
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Children: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Infant(s) (0-2 years old)"
                                className={cx("book-age")}
                                min="0"
                                value={Bookinfor.Children1}
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Children1: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Child(ren) (2-6 years old)"
                                className={cx("book-age")}
                                min="0"
                                value={Bookinfor.Children2}
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Children2: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Hotel categories you desire to stay?
                        </label>
                        {/* <input
                            type="select"
                            className={cx("book-hotel")}
                        /> */}
                        <div>
                            <select name='ourServices' className={cx("our-services")}>
                                <option value="">-- Select --</option>
                                <option value="Food">Food</option>
                                <option value="Transfer">Transfer</option>
                                <option value="Hotel">Hotel</option>
                            </select>
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
                            <div className={cx("sex")}>
                                <input
                                    name="gender"
                                    type="checkbox"
                                    value="male"
                                    className={cx("form-control")}
                                />
                                <label className={cx("sex-m")} for="">
                                    MALE
                                </label>
                                <input
                                    name="gender"
                                    type="checkbox"
                                    value="female"
                                    className={cx("form-control")}
                                />
                                <label className={cx("sex-m")} for="">
                                    FEMALE
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your nationality:
                        </label>
                        {/* <input
                            type="select"
                            className={cx("book-national")}
                        /> */}

                        <div>
                            <select name='national' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                <option value="0" label="-- Select --" selected="selected">Select a country ...</option>
                                {(national).map((d, item) => (
                                    <option key={d.code} value={d.code}>{d.name}</option>
                                ))}
                            </select>
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
                            Confirm Email Contact (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Confirm Email"
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
                            {/* {errors.Email && errors.Email.type === ''(
                                <span className={cx("error-message")}>Email must match</span>
                            )} */}
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Do you expect a phone call?
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
                            We welcome your special requests here
                        </label>
                        <div>
                            <textarea
                                placeholder="Type here for special activities, alergy, wheel chair, vegetari"
                                className={cx("book-note")}
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Note: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How did you hear about our services?
                        </label>
                        <div>
                            <select name='ourServices' className={cx("our-services")}>
                                <option value="">-- Select --</option>
                                <option value="Your Friend">Recommended by friend or colleague</option>
                                <option value="Social Network">Social Network</option>
                                <option value="Blog">Blog or publication</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn")} onClick={() => setBookinfor({ ...Bookinfor, Ip: ipAddress })}>SUMMIT</button>
                </div>
            </form>
        </div>


    );
}

export default Booking;