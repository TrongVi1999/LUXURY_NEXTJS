import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import axios from 'axios';
import national from '@/pages/api/national.json'

import $, { data } from 'jquery';
import qs from 'qs';
import { toastSuccess } from '@/hook/toastr';

const cx = classNames.bind(style);
const ListLocation =
    ['Hanoi', 'HoChiMinh City', 'Myanmar', 'Laos', 'Nha Trang', 'Phu Quoc', 'Thailand', 'Multi-Country', 'Danang', 'Multi Province', 'Cambodia', 'Other']


const BookMICE = ({ close }) => {
    const [ipAddress, setIpAddress] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [Select, setselect] = useState();
    const [errsl, seterrsl] = useState(false);
    const [Bookinfor, setBookinfor] = useState()

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const email = watch('Email');
    const email2 = watch('Email2');
    const validateEmailMatch = () => {
        return email === email2 || 'Email not match';
    };
    const See = watch('location')

    const handleEnquire = (data) => {
        console.log(email)
    }

    return (
        <div className={cx("booking-infor")}>
            <div className={cx("book-crumb")}>HOME | MICE | BOOKNOW</div>
            <p onClick={() => close(true)}></p>
            <form className={cx("book-content")} onSubmit={handleSubmit(handleEnquire)}>
                <div className={cx("content-header")}>
                    <p className={cx("p-header")}>From intimate gatherings to large-scale operations, VNXpedia can make it happen.<br />
                        If you're interested in a specific experience or need a bit of inspiration, reach out and we'll be glad to help.</p>
                </div>

                <div className={cx("content-mid")}>
                    <h6 className={cx("h6-header")}>PERSONAL DETAILS    <span>*Mandatory Field</span></h6>
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
                            {/* <div className={cx("sex")}>
                                <input
                                    name="gender"
                                    type="radio"
                                    value="male"
                                    className={cx("form-control")}
                                />
                                <label className={cx("sex-m")} for="">
                                    MALE
                                </label>
                                <input
                                    name="gender"
                                    type="radio"
                                    value="female"
                                    className={cx("form-control")}
                                />
                                <label className={cx("sex-m")} for="">
                                    FEMALE
                                </label>
                            </div> */}
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your nationality:
                        </label>
                        <div>
                            <select name='national' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                <option value="0" label="-- Select --" selected="selected">Select a country ...</option>
                                {(national).map((d, item) => (
                                    <option key={d.code} value={d.code}>{d.name}</option>
                                ))}
                            </select>
                            {errsl && <span className={cx("error-message")}>Nationality cannot be empty !</span>}
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your Company (*):
                        </label>
                        <div className={cx("input-enquire-company")}>
                            <input
                                type="text"
                                placeholder="Enter Your Company"
                                className={cx("cus-name")}
                                {...register('Company', { required: true })}
                            />
                            {errors.Company && errors.Company.type === 'required' && (
                                <span className={cx("error-message")}>Your Company cannot be empty !</span>
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
                                name='Email'
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
                                name='Email2'
                                placeholder="Confirm Email"
                                className={cx("cus-mail")}
                                {...register('Email2', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                    validate: validateEmailMatch,
                                })}
                            />
                            {errors.Email2 && errors.Email2.type === 'required' && (
                                <span className={cx("error-message")}>Email cannot be empty !</span>
                            )}
                            {errors.Email2 && errors.Email2.type === 'pattern' && (
                                <span className={cx("error-message")}>Invalid email</span>
                            )}
                            {errors.Email2 && errors.Email2.message === 'Email not match' && (
                                <span className={cx("error-message")}>Email not match</span>
                            )}
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
                    <hr className={cx("line")}></hr>
                    <h6 className={cx("h6-header")}>EVENT DETAILS</h6>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Event Name:

                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Enter Your Company"
                                className={cx("cus-name")}
                                {...register('EventName', { required: true })}
                            />
                            {errors.EventName && errors.EventName.type === 'required' && (
                                <span className={cx("error-message")}>Event Name cannot be empty !</span>
                            )}
                        </div>
                    </div>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Purpose of Trip:
                        </label>
                        <div>
                            <textarea
                                placeholder="Take Note"
                                className={cx("book-note")}
                                {...register("Purpose")}
                                rows="4"
                            ></textarea>
                        </div>
                    </div>

                    <div className={cx("item-form item-column")}>
                        <label className={cx("label-booking")}>
                            Destination Ideas:
                        </label>
                        <div className={cx("cus-infor")}>

                            <div className={cx("list-location")}>
                                {ListLocation.map(d =>
                                    <div className={cx("location-item")}>
                                        <input
                                            name="location"
                                            type="checkbox"
                                            value={d}
                                            className={cx("form-control")}
                                            ref={register("locaion", { required: true })}
                                        /> {errsl && <span className={cx("error-message")}>Location cannot be empty !</span>}
                                        <label className={cx("sex-m")} for="">
                                            {d}
                                        </label>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className={cx("group-item")}>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Persons Attending:
                            </label>
                            <div className={cx("input-enquire")}>

                                <select name='level' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                    <option value="1 - 5">1 - 5</option>
                                    <option value="6 - 15">6 - 15</option>
                                    <option value="> 16 ">{` > 16 `}</option>
                                </select>
                                {errsl && <span className={cx("error-message")}>Persons Attending cannot be empty !</span>}
                            </div>
                        </div>

                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Estimated Travel Date:
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
                                Preliminary Duration:
                            </label>
                            <div className={cx("input-enquire")}>

                                <select name='level' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                    <option value="1 days">1 days</option>
                                    <option value="2 - 3 days">6 - 15</option>
                                    <option value="> 3 days">{` > 3 days `}</option>
                                </select>
                                {errsl && <span className={cx("error-message")}>Preliminary Duration cannot be empty !</span>}
                            </div>
                        </div>

                    </div>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Level of Responsiveness required:
                        </label>
                        <div className={cx("input-enquire")}>
                            <select name='level' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                <option value="">Urgent</option>
                                <option value="Food">Normal</option>
                            </select>
                        </div>
                    </div>

                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Additional Information:
                        </label>
                        <div>
                            <textarea
                                placeholder="Message"
                                className={cx("book-note")}
                                {...register('Note')}
                                rows="6"
                            ></textarea>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How did you hear about our services?
                        </label>
                        <div>
                            <select name='ourServices' className={cx("our-services")} onChange={(e) => setselect(e.target.value)}>
                                <option value="">-- Select --</option>
                                <option value="Your Friend">Recommended by friend or colleague</option>
                                <option value="Social Network">Social Network</option>
                                <option value="Blog">Blog or publication</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn")} >SUMMIT</button>
                </div>
            </form>
        </div>
    )
}

export default BookMICE