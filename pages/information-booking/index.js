import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import IMG from '@/styles/images/banner9.png'
import { Input } from '@/components';

const cx = classNames.bind(style);

function index() {
    return (
        <div className={cx('container')}>
            <BannerIMG img={IMG} title='UNSEEN VIETNAM' bg='bg' />

            <div className={cx('booking-infor')}>
                <div className={cx('book-crumb')}>
                    Home | BOOK TOUR
                </div>
                <div className={cx('book-content')}>
                    <div className={cx('content-header')}>
                        <p className="tour-name">
                            Tour Name: <span>UNSEEN VIETNAM</span>
                        </p>
                        <p className="tour-duration">
                            Tour duration: <span>3 days</span>
                        </p>
                        <p className="form-book-name">
                            Country: <span>VIETNAM</span>
                        </p>
                    </div>
                    <hr></hr>
                    <div className={cx('content-mid')}>
                        <div className="item-form">
                            <label className="label-booking">Your proposed arrival date:</label>
                            <Input type='date'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;