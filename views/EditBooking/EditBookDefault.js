import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EditBooking } from "@/pages/api/QuerryAPI";
import national from '@/pages/api/national.json';
import Link from "next/link";

import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import ScrollToTop from "@/hook/scrollToTop";

const cx = classNames.bind(style);

function EditBookDefault({ set, dataOld, toggle }) {

    const [tourData, setTourData] = useState(null);
    const [country, setCountry] = useState();
    const [hotel, setHotel] = useState();
    const [texta, setTexta] = useState();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const Edit = EditBooking();

    // const Edit = EditBooking(dataOld.Country.Lenght>0?dataOld.Country:sdataOld.Country);

    const Submit = () => {
        set({ ...data });
        Edit.refetch();
    };



    return (
        <div className={cx("book-edit")}>
            <ScrollToTop />
            <div className={cx("book-crumb-edit")}>
                <Link href='/'>Home</Link> | <span>{/* {datas.TourName} */}</span> |EDIT BOOK TOUR
            </div>
            <AiFillCloseCircle className={cx('btn-close')} onClick={() => toggle(false)} />
            <form className={cx("book-content-edit")} onSubmit={handleSubmit(Submit)}>
                <div className={cx("content-header")}>
                    <p className={cx("tour-name")}>
                        Tour Name:&nbsp;
                        <span className={cx("tour-name-content")}>
                            {dataOld.TourName}
                        </span>
                    </p>
                    <p className={cx("tour-duration")}>
                        Tour duration:&nbsp;
                        <span className={cx("tour-duration-content")}>
                            {dataOld.Lenght} days
                        </span>
                    </p>
                    <p className={cx("tour-country")}>
                        Country:&nbsp;
                        <span className={cx("tour-country-content")}>
                            {dataOld.Country}
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
                                placeholder={dataOld.StartDate}
                                className={cx("book-date")}
                                {...register('StartDate', { required: true })}
                            />
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            How many people in your group?
                        </label>
                        <div className={cx("age-option")}>
                            <input
                                type="number"
                                placeholder={dataOld.Adult}
                                className={cx("book-age")}
                                min="0"
                                max="100"
                                {...register('Adult', { required: true })}
                            />
                            {errors.Adult && errors.Adult.type === 'required' && (
                                <span className={cx("error-message")}>Adult cannot be empty !</span>
                            )}
                            <input
                                type="text"
                                placeholder={dataOld.Children}
                                className={cx("book-age")}
                                min="0"

                                {...register('Children')}
                            />
                            <input
                                type="text"
                                placeholder={dataOld.Children2}
                                className={cx("book-age")}
                                min="0"

                                {...register('Children1')}
                            />
                            <input
                                type="text"
                                placeholder={dataOld.Children1}
                                className={cx("book-age")}
                                min="0"

                                {...register('Children2')}
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
                            <select name='ourServices' className={cx("our-services")}
                                onChange={(e) => setHotel(e.target.value)}
                            >
                                <option value="">-- Select --</option>
                                <option value="Hotel 3 *">Hotel 3 *</option>
                                <option value="Hotel 4 *">Hotel 4 *</option>
                                <option value="Hotel 5 *">Hotel 5 *</option>
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
                                    placeholder={dataOld.FullName}
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
                            <select name='national' className={cx("our-services")} onChange={(e) => setCountry(e.target.value)}>
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
                                placeholder={dataOld.Email}
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
                                placeholder={dataOld.Email}
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
                                placeholder={dataOld.Phone}
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
                                placeholder={dataOld.Note}
                                className={cx("book-note")}
                                onChange={(e) =>
                                    setTexta(
                                        e.target.value,
                                    )
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
                    <button className={cx("btn")} >SUMMIT</button>
                </div>
            </form>
        </div>

    );
}

export default EditBookDefault;