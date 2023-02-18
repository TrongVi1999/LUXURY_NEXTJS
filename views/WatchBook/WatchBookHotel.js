import React from "react";
import { useState, useEffect } from "react";
import classNames from 'classnames/bind';
import style from './WatchBook.module.scss'
import { AiFillCloseCircle } from 'react-icons/ai';
import ScrollToTop from "@/hook/scrollToTop";
import EditBookDefault from "../EditBooking/EditBookDefault";

const cx = classNames.bind(style);

function WatchBookDefault({ dataOld, toggle }) {
    const [showEdit, setShowEdit] = useState(false);
    const [data, setData] = useState();

    return (
        <div className={cx("book-edit")}>
            <ScrollToTop />
            <form className={cx("book-content-edit")} >
                <AiFillCloseCircle className={cx('btn-close')} onClick={() => toggle(false)} />
                <div className={cx("content-header")}>
                    <p className={cx("tour-contents")}>
                        Service Name:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.TourName}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Country:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Country}
                        </span>
                    </p>
                </div>
                <div className={cx("content-mid")}>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer Name:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.FullName}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer Email:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Email}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Customer Phone:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Phone}
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
                            Check In:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.CheckIn}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Check Out:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.CheckOut}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Persons:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Adult}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Type Room:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.TypeRoom}
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
                    <button className={cx("btn-submit")} onClick={() => setShowEdit(true)}>Edit</button>
                </div>
            </form>
            {showEdit && <EditBookDefault dataOld={data} click={setShowEdit} />}
        </div>

    );
}

export default WatchBookDefault;