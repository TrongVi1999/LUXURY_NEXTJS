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
                        Customer Name:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.FullName}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Nationality:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Country}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Company:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Company}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Customer Email:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Email}
                        </span>
                    </p>
                    <p className={cx("tour-contents")}>
                        Customer Phone:&nbsp;
                        <span className={cx("tour-content")}>
                            {dataOld.Phone}
                        </span>
                    </p>
                </div>
                <div className={cx("content-mid")}>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Event Name:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.EventName}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Purpose:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Purpose}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Destination:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Purpose}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Destination:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Destination}
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
                            Estimated Travel Date:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.StartDate}
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
                            Preliminary Duration:&nbsp;
                            <span className={cx("tour-content")}>
                                {dataOld.Email}
                            </span>
                        </p>
                    </div>
                    <div className={cx("item-form")}>
                        <p className={cx("tour-contents")}>
                            Responsiveness:&nbsp;
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
                    <button className={cx("btn-submit")} onClick={() => setShowEdit(true)}>Edit</button>
                </div>
            </form>
            {showEdit && <EditBookDefault dataOld={data} click={setShowEdit} />}
        </div>

    );
}

export default WatchBookDefault;