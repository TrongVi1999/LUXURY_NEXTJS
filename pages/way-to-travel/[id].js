import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/wayToTravel.module.scss';
import IMG from '@/public/images/tour1.jpg';

import Tourcard2 from '@/views/Tourcard/Tourcard2';
import Tourcard1 from '@/views/Tourcard/Tourcard1';

import { Section, Title, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { useRouter } from "next/router";
import { Tourtype } from '../api/CallAPI';


const cx = classNames.bind(style);

const fakeData = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },

]

const index = () => {
    const router = useRouter();
    const [Data, setdata] = useState([]);
    const [page, setPage] = useState(1)


    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;
    const CallAPI = async () => {
        const response = await Tourtype(router.query.id);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }
    useEffect(() => {
        CallAPI();
    }, [router.query.id]);


    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} classNameTitle={cx('titleBanner')} titleBanner={"choose your own trip style"} textBottom={"The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration"} />

            <Title text={'luxury tour'} align={'center'} className={cx('titleTravel')} />
            <Section maxWidth={1170}>
                <div className={cx('sort')}>
                    <button>Sort by</button>
                    <button>Filter by</button>
                </div>
                <Tourcard2 data={fakeData[0]} />
            </Section>

            {Data.length &&
                <Section maxWidth={1170} isWrap gapBox={3.2}>
                    {
                        Data.slice(firstIndex, lastIndex).map((data, index) => (
                            <Tourcard1 data={data} key={index} />
                        ))
                    }

                </Section>
            }
            {/* {Data.length && <Pagination totalPosts={Data.length} postPerPage={9} setPage={setPage} pageIndex={page} />} */}
            {/* <Pagination totalPosts={fakeData.length} postPerPage={9} setPage={setPage} pageIndex={page} /> */}
        </div>
    )
}

export default index