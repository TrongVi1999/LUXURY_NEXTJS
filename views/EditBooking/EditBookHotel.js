import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/Contact.module.scss';

import ScrollToTop from '@/hook/scrollToTop';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import national from '@/pages/api/national.json';
import Link from "next/link";
import { AiFillCloseCircle } from 'react-icons/ai';
import { EditBooking } from "@/pages/api/CallAPI";

const cx = classNames.bind(style);

function EditBookHotel({ dataOld, set, toggle }) {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();


    const [dataSelect, setDataSelect] = useState({ Hotel: '', Country: '', Note: '', TypeRoom });

    const CallEdit = async (data) => {
        const response = await EditBooking(data);
        if (response.status == 200) {
            console.log(response.data);
        }
        else {
            console.log('ok')
        }
    }
    const Submit = (data) => {
        CallEdit({
            Id: dataOld.Id,
            ...data,
            ...dataSelect
        })
    }

    return (
        <div className={cx("book-edit")}>
            <ScrollToTop />
            <div className={cx("book-crumb-edit")}>
                <Link href='/'>Home</Link> | <span>{/* {datas.TourName} */}</span> |EDIT BOOK TOUR
            </div>
            <AiFillCloseCircle className={cx('btn-close')} onClick={() => toggle(false)} />
            <form className={cx("book-content-edit")} onSubmit={handleSubmit(Submit)}>
                <div className={cx("content-header")}>
                    <p className={cx("service-name")}>
                        Service Name:&nbsp;
                        <span className={cx("service-name-content")}>
                            {dataOld.TourName}
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
                                    placeholder={dataOld.FullName}
                                    className={cx("cus-name")}
                                    {...register('FullName')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your nationality:
                        </label>
                        <div>
                            <select name='national' className={cx("our-services")} onChange={(e) => setDataSelect({ ...dataSelect, Country: e.target.value })}>
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
                            Email address (*):
                        </label>
                        <div className={cx("input-enquire")}>
                            <input
                                type="text"
                                placeholder={dataOld.Email}
                                className={cx("cus-mail")}
                                {...register('Email', {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
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
                                placeholder={dataOld.Phone}
                                className={cx("cus-phone")}
                                {...register('Phone', {

                                    minLength: 9,
                                    maxLength: 15,
                                    valueAsNumber: false,
                                })}
                            />
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
                            Check In: <br />
                            <div className={cx("input-enquire")}>
                                <input
                                    type="date"
                                    name="date"
                                    placeholder={dataOld.CheckIn}
                                    className={cx("check-in")}
                                    {...register('CheckIn')}
                                />
                            </div>
                        </label>
                        <div className={cx('groupcheck')}>
                            <div>
                                <label className={cx("label-booking")}>
                                    Check out:   <br />
                                    <div className={cx("input-enquire")}>
                                        <input
                                            type="date"
                                            name="date"
                                            placeholder={dataOld.CheckOut}
                                            className={cx("check-out")}
                                            {...register('CheckOut')}
                                        />
                                    </div>
                                </label></div>
                            <div>
                                <label className={cx("label-booking")}>
                                    Persons Attendtion <br />
                                    <div>
                                        <input
                                            type="number"
                                            name="date"
                                            placeholder={dataOld.Adult}
                                            className={cx("persons-attendtion")}
                                            {...register('PersonsAttendtion')}
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Type of Room:
                        </label>
                        <div>
                            <select name='TypeRoom' className={cx("our-services")} onChange={(e) => setDataSelect({ ...dataSelect, TypeRoom: e.target.value })}>
                                <option value="0" label="-- Select --" selected="selected">Select</option>
                                <option value="vip" label="Vip Room">Vip Room</option>
                                <option value="normal" label="Normal Room">Normal Room</option>
                            </select>

                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            We welcome your special requests here:
                        </label>
                        <div>
                            <textarea
                                placeholder={dataOld.Note}
                                className={cx("book-note")}
                                onChange={(e) =>
                                    setDataSelect({ ...dataSelect, Note: e.target.value })
                                }
                                {...register('Note')}
                            ></textarea>
                        </div>
                    </div>

                </div>
                {/* <ReCAPTCHA size="normal" className={cx("re-capcha")} sitekey="<YOUR SITE KEY>" /> */}
                <div className={cx("content-bot")}>
                    <button className={cx("btn")} >Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default EditBookHotel;