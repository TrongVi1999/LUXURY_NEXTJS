import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/Contact.module.scss';
import { useForm } from "react-hook-form";

import { useState, useEffect } from 'react';
import axios from 'axios';

import $, { data } from 'jquery';
import qs from 'qs';
import { toastSuccess } from '@/hook/toastr';
import national from '@/pages/api/national.json';

const cx = classNames.bind(style);

function Transferbook({ click }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className={cx("booking-infor")}>
            <div className={cx("book-crumb")}>Home | BOOK NOW
                <p onClick={() => click(false)}>Back</p></div>

            <form className={cx("book-content")} onSubmit={handleSubmit()}>
                <div className={cx("content-header")}>
                    <p className={cx("service-name")}>
                        Type of car:&nbsp;
                        <span className={cx("service-name-content")}>
                            Mercedes BENS AMS COUPE
                        </span>
                    </p>
                    <p className={cx("tour-country")}>
                        Country:&nbsp;
                        <span className={cx("tour-country-content")}>
                            VIET NAM
                        </span>
                    </p>
                </div>
                <hr className={cx("line")}></hr>
                <div className={cx("content-mid")}>
                    <div className={cx("header-form")}>
                        <span className={cx("title-form")}>CONTACT US</span>
                        <p className={cx("intro-form")}>SEND US A MESSAGE</p>
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
                            Time:
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="date"
                                name="date"
                                className={cx("cus-time")}
                                {...register('StartDate', { required: true })}
                            />
                            {errors.StartDate && errors.StartDate.type === 'required' && (
                                <span className={cx("error-message")}>Date cannot be empty !</span>
                            )}
                        </div>

                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Pick up:
                        </label>
                        <div className={cx("cus-infor")}>
                            <div className={cx("input-enquire--name")}>
                                <input
                                    type="text"
                                    placeholder="Enter your address to pick up"
                                    className={cx("cus-name")}
                                    {...register('Pickup', { required: true })}
                                />
                                {errors.Pickup && errors.Pickup.type === 'required' && (
                                    <span className={cx("error-message")}>Pickup cannot be empty !</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Drop off:
                        </label>
                        <div className={cx("cus-infor")}>
                            <div className={cx("input-enquire--name")}>
                                <input
                                    type="text"
                                    placeholder="Enter your destination"
                                    className={cx("cus-name")}
                                    {...register('DropOff', { required: true })}
                                />
                                {errors.DropOff && errors.DropOff.type === 'required' && (
                                    <span className={cx("error-message")}>Drop Off cannot be empty !</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Baby car seat:
                        </label>
                        <div>
                            <select name='ourServices' className={cx("our-services")}>
                                <option value="0" label="-- Select --" selected="selected">Select</option>
                                <option value="Yes" label="Yes">Yes</option>
                                <option value="No" label="No">No</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            No of adult: <br />
                            <div className={cx("cus-infor")}>
                                <div className={cx("input-enquire--name")}>
                                    <input
                                        type="text"
                                        placeholder="Enter your number of adult"
                                        className={cx("cus-adult")}
                                        {...register('DropOff', { required: true })}
                                    /><br />
                                    {errors.DropOff && errors.DropOff.type === 'required' && (
                                        <span className={cx("error-message")}>Drop Off cannot be empty !</span>
                                    )}
                                </div>
                            </div>
                        </label>
                        <div>
                            <label className={cx("label-booking")}>
                                No of children: <br />
                                <div className={cx("cus-infor")}>
                                    <div className={cx("input-enquire--name")}>
                                        <input
                                            type="text"
                                            placeholder="Enter your number of children"
                                            className={cx("cus-children")}
                                            {...register('DropOff', { required: true })}
                                        /><br />
                                        {errors.DropOff && errors.DropOff.type === 'required' && (
                                            <span className={cx("error-message")}>Drop Off cannot be empty !</span>
                                        )}
                                    </div>
                                </div>
                            </label>
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
                                onChange={(e) =>
                                    setBookinfor({
                                        ...Bookinfor,
                                        Note: e.target.value,
                                    })
                                }
                            ></textarea>
                        </div>
                    </div>

                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn")}>Send Message</button>
                </div>
            </form>
        </div>


    );
}

export default Transferbook;