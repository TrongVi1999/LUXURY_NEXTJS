import React from "react";
import { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import style from './WatchBook.module.scss'
import { AiFillCloseCircle } from 'react-icons/ai';
import ScrollToTop from "@/hook/scrollToTop";
import EditBookDefault from "../EditBooking/EditBookDefault";

const cx = classNames.bind(style);

function WatchBookDefault({ dataOld, toggle, click }) {
    const [data, setData] = useState();

    return (
        <div className={cx("book-edit")}>
            <ScrollToTop />
            <form className={cx("book-content-edit")} onSubmit={(e) => { e.preventDefault() }}>
                <AiFillCloseCircle className={cx('btn-close')} onClick={() => toggle(false)} />
                <div className={cx("content-header")}>
                    <p className={cx("tour-contents")}>
                        Tour Name:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.TourName}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Tour duration:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Lenght} days
                        </span>
                    </p>
                </div>
                <div className={cx("content-mid")}>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Arrival date:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.StartDate}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <div>
                            <label className={cx("tour-contents")}>
                                People number:&nbsp;
                            </label>
                            <div className={cx("age-option")}>
                                <p className={cx("tour-content")}>
                                    Adult number:&nbsp;
                                    <span className={cx("tour-content")}>
                                        {dataOld.Adult}
                                    </span>
                                </p>
                                <p className={cx("tour-content")}>
                                    Children number(Child(ren) (7-11 years old)):&nbsp;
                                    <span className={cx("tour-content")}>
                                        {dataOld.Children}
                                    </span>
                                </p>
                                <p className={cx("tour-content")}>
                                    Children1 number(Child(ren) (2-6 years old)):&nbsp;
                                    <span className={cx("tour-content")}>
                                        {dataOld.Children1}
                                    </span>
                                </p>
                                <p className={cx("tour-content")}>
                                    Children2(Child(ren) (0-2 years old)) number:&nbsp;
                                    <span className={cx("tour-content")}>
                                        {dataOld.Children2}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Hotel:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Children2}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer name:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.FullName}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Country:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Country}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer mail:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Email}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer phone:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Phone}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Note:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Note}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={cx("content-bot")}>
                    <button className={cx("btn-submit")} onClick={() => click(true)}>Edit</button>
                </div>
            </form>
        </div>

    );
}

export default WatchBookDefault;