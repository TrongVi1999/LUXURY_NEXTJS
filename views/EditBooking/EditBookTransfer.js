import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import national from '@/pages/api/national.json';
import Link from "next/link";
import classNames from 'classnames/bind';
import style from '@/styles/Contact.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai'
import ScrollToTop from "@/hook/scrollToTop";
import { EditBooking } from "@/pages/api/CallAPI";

const cx = classNames.bind(style);

function EditBookTransfer({ dataOld, toggle }) {

    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    //Call API edit booking Transfer

    const [dataSelect, setDataSelect] = useState({ Country: '', Babycarseat: '', Note: '' });

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
                        Type of car:&nbsp;
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
                                    {...register('FullName', { required: true })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Your nationality:
                        </label>
                        <div>
                            <select name='Country' className={cx("our-services")} onChange={(e) => setDataSelect({ ...dataSelect, Country: e.target.value })}>
                                <option value="0" label="-- Select --" selected="selected">Select a country ...</option>
                                {(national).map((d, item) => (
                                    <option key={d.code} value={d.code}>{d.name}</option>
                                ))}
                            </select>
                            {/* {errsl && <span className={cx("error-message")}>Country cannot be empty !</span>} */}
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
                                placeholder={dataOld.Time}
                                {...register('Time', { required: true })}
                            />
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
                                    placeholder={dataOld.PickUp}
                                    className={cx("cus-name")}
                                    {...register('PickUp', { required: true })}
                                />
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
                                    placeholder={dataOld.DropOff}
                                    className={cx("cus-name")}
                                    {...register('DropOff', { required: true })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <label className={cx("label-booking")}>
                            Baby car seat:
                        </label>
                        <div>
                            <select name='Babycartseat' className={cx("our-services")}
                                onChange={(e) => setDataSelect({ ...dataSelect, Babycarseat: e.target.value })}>
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
                                        placeholder={dataOld.Adult}
                                        className={cx("cus-adult")}
                                        {...register('Adult', { required: true })}
                                    /><br />
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
                                            placeholder={dataOld.Children}
                                            className={cx("cus-children")}
                                            {...register('children', { required: true })}
                                        /><br />
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
                                placeholder={dataOld.Note}
                                className={cx("book-note")}

                                {...register('Note', { required: true })}
                            ></textarea>
                            {errors.Note && errors.Note.type === 'required' && (
                                <span className={cx("error-message")}>Note cannot be empty !</span>
                            )}
                        </div>
                    </div>

                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn")} >Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default EditBookTransfer;