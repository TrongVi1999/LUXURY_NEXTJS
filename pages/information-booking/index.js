import React from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/informationBooking.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import IMG from '@/styles/images/banner9.png'
import { Input } from '@/components';
import Tourrecomment from '@/views/Tourdetail/Tourrecomment';

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
                            <Input type='date' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">How many people in your group?</label>
                            <Input type='text' placeholder='Adult(s) (>=12 years old)' />
                            <Input type='text' placeholder='Child(ren) (7-11 years old)' />
                            <Input type='text' placeholder='Infant(s) (0-2 years old)' />
                            <Input type='text' placeholder='Child(ren) (2-6 years old)' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">Hotel categories you desire to stay?</label>
                            <Input type='select' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">How should we call you? (*)</label>
                            <Input type='text' placeholder='Enter Your Name' />

                        </div>
                        <div className="item-form">
                            <label className="label-booking">Your nationality:</label>
                            <Input type='select' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">Email address (*):</label>
                            <Input type='text' placeholder='Enter Your Email' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">Confirm Email Contact (*):</label>
                            <Input type='text' placeholder='Confirm Email' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">Do you expect a phone call?</label>
                            <Input type='text' placeholder='Enter Your Phone' />
                        </div>
                        <div className="item-form">
                            <label className="label-booking">We welcome your special requests here</label>
                            <textarea placeholder='Type here for special activities, alergy, wheel chair, vegetari'></textarea>
                        </div>
                        <div className="item-form">
                            <label className="label-booking">How did you hear about our services?</label>
                            <Input type='date' />
                        </div>
                    </div>
                    <div className={cx('content-bot')}>
                        <button>SUMMIT</button>
                    </div>
                </div>
            </div>
            <div className={cx('tour-same')}>
                <span>TOUR TƯƠNG TỰ</span>
                <Tourrecomment data={data} />
            </div>
        </div>
    );
}

export default index;