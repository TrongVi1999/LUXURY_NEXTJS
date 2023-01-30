import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import IMG from '@/public/images/banner/banner9.png'
import { Input } from '@/components';
import Tourrecomment from '@/views/Tourdetail/Tourrecomment';
import { useForm } from "react-hook-form";

const cx = classNames.bind(style);

const data = {
    img: IMG,
    title: 'Ha long bay day cruise - paradise explore',
    rate: 4.7,
    ratecount: 100,
    book: 999,
    long: 15,
    price: 3000,
    sale: 50,
    destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
    highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
};

function index() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    return (
        <div className={cx('container')}>
            <BannerIMG img={IMG} title='U N S E E N  V I E T N A M' bg='bg' className={cx('book-title')} />

            <div className={cx("booking-infor")}>
                <div className={cx("book-crumb")}>Home | BOOK TOUR</div>
                <div className={cx("book-content")}>
                    <div className={cx("content-header")}>
                        <p className={cx("tour-name")}>
                            Tour Name:&nbsp;
                            <span className={cx("tour-name-content")}>
                                UNSEEN VIETNAM
                            </span>
                        </p>
                        <p className={cx("tour-duration")}>
                            Tour duration:&nbsp;
                            <span className={cx("tour-duration-content")}>
                                3 days
                            </span>
                        </p>
                        <p className={cx("tour-country")}>
                            Country:&nbsp;
                            <span className={cx("tour-country-content")}>
                                VIETNAM
                            </span>
                        </p>
                    </div>
                    <hr className={cx("line")}></hr>
                    <div className={cx("content-mid")}>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Your proposed arrival date:
                            </label>
                            <Input type="date" classNameInput={cx("book-date")} />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                How many people in your group?
                            </label>
                            <div className={cx("age-option")}>
                                <Input
                                    type="text"
                                    placeholder="Adult(s) (>=12 years old)"
                                    classNameInput={cx("book-age")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Child(ren) (7-11 years old)"
                                    classNameInput={cx("book-age")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Infant(s) (0-2 years old)"
                                    classNameInput={cx("book-age")}
                                />
                                <Input
                                    type="text"
                                    placeholder="Child(ren) (2-6 years old)"
                                    classNameInput={cx("book-age")}
                                />
                            </div>
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Hotel categories you desire to stay?
                            </label>
                            <Input
                                // isSelect={isSelect}
                                classNameInput={cx("book-hotel")}
                            />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                How should we call you? (*)
                            </label>
                            <div className={cx("cus-infor")}>
                                <Input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    classNameInput={cx("cus-name")}
                                />
                                <div className={cx("sex")}>
                                    <Input
                                        name="gender"
                                        type="checkbox"
                                        value="male"
                                        classNameInput={cx("form-control")}
                                    />
                                    <label className={cx("sex-m")} for="">
                                        MALE
                                    </label>
                                    <Input
                                        name="gender"
                                        type="checkbox"
                                        value="female"
                                        classNameInput={cx("form-control")}
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
                            <Input
                                type="select"
                                classNameInput={cx("book-national")}
                            />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Email address (*):
                            </label>
                            <Input
                                type="text"
                                placeholder="Enter Your Email"
                                classNameInput={cx("cus-mail")}
                                {...register('Email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Confirm Email Contact (*):
                            </label>
                            <Input
                                type="text"
                                placeholder="Confirm Email"
                                classNameInput={cx("cus-mail")}
                                {...register('Email', {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    },
                                })}
                            />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                Do you expect a phone call?
                            </label>
                            <Input
                                type="text"
                                placeholder="Enter Your Phone"
                                classNameInput={cx("cus-phone")}
                                {...register('Phone', {
                                    required: true,
                                    minLength: 9,
                                    maxLength: 15,
                                    valueAsNumber: false,
                                })}
                            />
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                We welcome your special requests here
                            </label>
                            <textarea
                                placeholder="Type here for special activities, alergy, wheel chair, vegetari"
                                className={cx("book-note")}
                            ></textarea>
                        </div>
                        <div className={cx("item-form")}>
                            <label className={cx("label-booking")}>
                                How did you hear about our services?
                            </label>
                            <Input
                                type="select"
                                classNameInput={cx("our-services")}
                            />
                        </div>
                    </div>
                    <div className={cx("content-bot")}>
                        <button className={cx("btn")}>SUMMIT</button>
                    </div>
                </div>
            </div>
            <div className={cx('tour-same')}>
                <span className={cx('tour-same-title')}>TOUR TƯƠNG TỰ</span>
                {/* <Tourrecomment data={data} /> */}
            </div>
        </div>
    );
}

export default index;