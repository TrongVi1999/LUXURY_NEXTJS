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
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(1)
    const [sort, setsort] = useState()

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

    const sortp = (data) => {
        if (sort == 'All') {
            return data;
        }
        if (sort == 'Ascending') {
            return data.sort((a, b) =>
                a.PRICE[0].price * (100 - a.Discount) / 100 - b.PRICE[0].price * (100 - b.Discount) / 100

            )
        }
        if (sort == "Descending") {
            return data.sort((a, b) =>
                b.PRICE[0].price * (100 - b.Discount) / 100 - a.PRICE[0].price * (100 - a.Discount) / 100
            )
        }



        if (sort == 'Asc') {
            return data.sort((a, b) => Number(a.DETAIL[a.DETAIL.length - 1].Day) - Number(b.DETAIL[b.DETAIL.length - 1].Day))
        }
        if (sort == "Des") {
            return data.sort((a, b) => Number(b.DETAIL[b.DETAIL.length - 1].Day) - Number(a.DETAIL[a.DETAIL.length - 1].Day))

        }

        else return data
    }



    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} classNameTitle={cx('titleBanner')} titleBanner={"choose your own trip style"} textBottom={"The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration"} />
            <div id='list' />
            {router.query.id && <Title text={`luxury ${(router.query.id).split('TYPE_')[1]} tour`} align={'center'} className={cx('titleTravel')} />}

            <Section maxWidth={1170}>
                <div className={cx('sort')}>
                    <span >Sort by :</span>
                    <select name='sort-price' id='sort-price' className={cx("sortp")} onChange={(e) => setsort(e.target.value)}>
                        <option value='All'>--Price/Day--</option>
                        <option value='Ascending'>Price Ascending</option>
                        <option value='Descending'>Price Descending</option>
                        <hr />
                        <option value='Asc'>Day   Ascending</option>
                        <option value='Des'>Day   Descending</option>
                    </select>
                    {/* <button>Filter by</button> */}
                </div>
                {data.length > 0 && <Tourcard2 data={data[0]} />}
            </Section>

            {data.length > 0 &&
                <Section maxWidth={1170} isWrap gapBox={3.2}>
                    {

                        sortp(data).filter((d, i) => i != 0 && d).slice(firstIndex, lastIndex).map((d, i) => (
                            <Tourcard1 data={d} key={i} />
                        ))

                    }

                </Section>

            }

            <Pagination totalPosts={data.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default index