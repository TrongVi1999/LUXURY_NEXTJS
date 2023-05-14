import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/public/month/1thang1.png'
import img2 from '@/public/month/1thang2.jpg'
import img3 from '@/public/month/1thang3.png'
import img4 from '@/public/month/1thang4.png'
import img5 from '@/public/month/1thang5.png'
import img6 from '@/public/month/1thang6.png'
import img7 from '@/public/month/1thang7.png'
import img8 from '@/public/month/1thang8.png'
import img9 from '@/public/month/1thang9.png'
import img10 from '@/public/month/1thang10.png'
import img11 from '@/public/month/1thang11.png'
import img12 from '@/public/month/1thang12.png'
import { BsPlayCircle } from 'react-icons/bs';
import { Banner } from '@/views';

const cx = classNames.bind(style);

const listmonth = [
    {
        img: img1,
        title: 'APRIL',
    },
    {
        img: img2,
        title: 'MAY',
    },
    {
        img: img3,
        title: 'JUNE',
    },
    {
        img: img4,
        title: 'JULY',
    },
    {
        img: img5,
        title: 'AUGUST',
    },

    {
        img: img6,
        title: 'SEPTEMBER',
    },
    {
        img: img7,
        title: 'OCTOBER',
    },
    {
        img: img8,
        title: 'NOVEMBER',
    },
    {
        img: img9,
        title: 'DECEMBER',
    },
    {
        img: img10,
        title: 'JANUARY',
    },
    {
        img: img11,
        title: 'FEBRUARY',
    },
    {
        img: img12,
        title: 'MARCH',
    },
]

const Destination = () => {
    return (
        <div className={cx('container')}>
            <ListMonth />
            <BannerDes />
            <Hottour />
            <Guide />
        </div>
    )
}

export default Destination

const ListMonth = () => {
    return (
        <div className={cx('list-month-container')}>
            <div className={cx('text')}>
                <h5>OUR TRAVEL CALENDAR FOR THE YEAR AHEAD</h5>
                <p>We’ve compiled this constantly updated calendar to reflect the destinations where you can travel to each month. Today, tomorrow, and next year.
                    <br /><br />
                    We’re here to put the whole world in your palm, and to help you see it and experience it in the most wonderful ways imaginable. When you travel with us, we’ll help you with everything – from packing lists to fielding your questions, 24/7.

                </p>
                <div className={cx('hr')} />
                <h5>THE YEAR AHEAD</h5>
                <p>Browse our recomment trips for each month</p>
            </div>
            <div className={cx('list-month')}>
                {listmonth.map((d, i) =>
                    <div className={cx('item-month')} key={i}>
                        <Image src={d.img} alt='month' />
                        <div>{d.title}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

const BannerDes = () => {
    return (
        <div className={cx('banner')}>

            <h2>MESSAGE FROM VIETNAM</h2>
            <p>Browse our recomment trips for each month</p>
            <BsPlayCircle />

        </div>
    )
}

const listtour = [
    {
        title: 'Hot tour 1',
        img: img1,
        destination: 'Viet Nam',
        price: '1000'
    },
    {
        title: 'Hot tour 2',
        img: img2,
        destination: 'Viet Nam',
        price: '1000'
    },
    {
        title: 'Hot tour 3',
        img: img3,
        destination: 'Viet Nam',
        price: '1000'
    },
    {
        title: 'Hot tour 4',
        img: img4,
        destination: 'Viet Nam',
        price: '1000'
    },
    {
        title: 'Hot tour 5',
        img: img5,
        destination: 'Viet Nam',
        price: '1000'
    },
]

const Hottour = () => {
    return (
        <div className={cx('hottour')}>
            <div className={cx('tour-box')}>
                <div className={cx('intro')}>
                    <h2>Top Tours In VietNam</h2>
                    <div className={cx('hr2')}></div>
                    <p>From Hanoi in the north to Ho Chi Minh in the south, welcome to one of the world’s most colourful countries.
                        <br /><br />
                        From Hanoi in the north to Ho Chi Minh in the south, welcome to one of the world’s most colourful countries.
                    </p>
                    <button>View all Tours</button>
                </div>
            </div>
            {listtour.map((d, i) =>
                <div className={cx('tour-box')} key={i}>
                    <TourCard data={d} />
                </div>
            )}

        </div>
    )
}

export const TourCard = ({ data }) => {
    return (
        <div className={cx('tour-card')}>
            <Image src={data.img} alt='tour-img' />
            <div className={cx('tour-text')}>
                <h3>{data.title}</h3>
                <p>{data.destination}</p>
                <h4>17 days from <span>${data.price}pp</span></h4>
                <div className={cx('list-link')}>
                    <Link href='/'>View detail</Link>
                    <Link href='/'>Request a quote</Link>
                </div>
            </div>
        </div>
    )
}

const listguide = [
    {
        title: 'Best time to visit VietNam',
        img: img1,
    },
    {
        title: 'Best time to visit VietNam',
        img: img2,
    },
    {
        title: 'Our favorite food tours in Vietnam',
        img: img3,
    },
]
const Guide = () => {
    return (
        <div className={cx('guide')}>
            <h2>Vietnam guide</h2>
            <p>If we were asked to choose our top three places in Vietnam, we’d go for these.</p>
            <div className={cx('list-guide')}>
                {listguide.map((d, i) =>
                    <div className={cx('item-guide')} key={i}>
                        <Image src={d.img} alt='guide' />
                        <div className={cx('text-guide')}>
                            <h6>Guide</h6>
                            <p>{d.title}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}