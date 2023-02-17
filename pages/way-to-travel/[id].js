import React, { useState } from 'react'
import classNames from 'classnames/bind';
import style from '@/styles/wayToTravel.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import Tourcard1 from '@/views/Tourcard/Tourcard1';
import { Section, Title, Pagination } from '@/components';
import { BannerSlide } from '@/views';
import { banners } from '@/public/images';
import { useRouter } from "next/router";
import { Tourtype } from '../api/QuerryAPI';
import Loading from '@/components/Loading';
import Headpage from '@/components/Head/head';


const cx = classNames.bind(style);



const index = () => {
    const router = useRouter();
    const [page, setPage] = useState(1)
    const [sort, setsort] = useState();
    const tourList = Tourtype(router.query.id);

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;


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

    if (tourList.isLoading) {
        return <Loading />;
    }

    if (tourList.error) {
        return <p>Error: {tourList.error.message}</p>;
    }

    return (
        <div className={cx('wrapper')}>
            <Headpage />
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

                </div>
                {tourList.data.Object.length > 0 && <Tourcard2 data={tourList.data.Object[0]} />}
            </Section>

            {tourList.data.Object.length > 0 &&
                <Section maxWidth={1170} isWrap gapBox={3.2}>
                    {

                        sortp(tourList.data.Object).filter((d, i) => i != 0 && d).slice(firstIndex, lastIndex).map((d, i) => (
                            <Tourcard1 data={d} key={i} />
                        ))

                    }

                </Section>

            }

            <Pagination totalPosts={tourList.data.Object.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default index