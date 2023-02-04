import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
// import style from '@/styles/wayToTravel.module.scss';
import IMG from '@/public/images/tour1.jpg';
import { Section, Title, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { useRouter } from "next/router";
import Hotelcard from '@/views/HotelCard/Hotelcard';
import { categoryFillerAddress, tourTagsFilter, seasonFillter, groupSizeFillter } from '@/public/dataRender';
import style from '@/styles/luxuryhotel.module.scss';


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
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1)

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;
    // const CallAPI = async () => {
    //     const response = await Tourtype(router.query.id);
    //     if (response.status == 200) {
    //         setdata(response.data.Object);
    //     }
    // }
    // useEffect(() => {
    //     CallAPI();
    // }, [router.query.id]);



    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} classNameTitle={cx('titleBanner')} titleBanner={"Luxury hotel"} textBottom={"Best luxury hotel in Vietnam and Asia"} />


            <Section maxWidth={1170}>
                <div className={cx('sort')}>
                    <button>Sort by</button>
                    <button>Filter by</button>
                </div>
                {/* {data.length > 0 && 
                <Tourcard2 data={data[0]} 
                />} */}
            </Section>

            {/* {data.length > 0 && */}
            <div className={cx('main')}>
                <div className={cx('hotel-list')}>
                    {
                        fakeData.slice(firstIndex, lastIndex).map((data, index) => (
                            <Hotelcard data={data} key={index} />
                        ))
                    }
                </div>
                <CategoryFilter

                    category={categoryFillerAddress}

                    className={cx('boxFilter')}



                />

            </div>

            {/* } */}

            <Pagination totalPosts={fakeData.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default index