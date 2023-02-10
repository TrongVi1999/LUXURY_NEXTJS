import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import axios from 'axios';

import $, { data } from 'jquery';
import qs from 'qs';
import { toastSuccess } from '@/hook/toastr';
import national from '@/pages/api/national.json';

const cx = classNames.bind(style);


function Shareemail({ onClick, datas, title, long }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div className={cx("booking-infor")}>

            <form className={cx("book-content")} >
                <div className={cx("content-header")}>
                    <p className={cx("tour-name")}>
                        SHARE WITH YOUR FRIEND
                    </p>
                </div>
                <hr className={cx("line")}></hr>
                <div className={cx("content-mid")}>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your email (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Your email"
                                className={cx("cus-mail")}
                                {...register('Email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your friend's email (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder="Your Friend's Email "
                                className={cx("cus-mail")}
                                {...register('Email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            More informal about this tour (*):
                        </label>
                        <div>
                            <textarea
                                placeholder="More informal about this tour"
                                className={cx("book-note")}
                                onChange={(e) =>
                                    settexta(
                                        e.target.value,
                                    )
                                }
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn")} >SUMMIT</button>
                </div>
            </form>
        </div>
    );
}

export default Shareemail;