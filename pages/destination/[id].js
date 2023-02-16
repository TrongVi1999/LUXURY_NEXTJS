import { Pagination, Section } from '@/components';
import { categoryFillerAddress, groupSizeFillter, priceFilter, seasonFillter, tourTagsFilter } from '@/public/dataRender';
import { banners } from '@/public/images';
import style from '@/styles/destinations.module.scss';
import { BannerSlide, CategoryFilter } from '@/views';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Superfilter } from '../api/CallAPI';
import AboutVN from '@/views/Destination/AboutVN';
import Location from '@/views/Destination/Location';
import Faq from '@/views/Destination/FAQ';
import { useApppContext } from '@/pages/_app';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { animateScroll as scroll } from 'react-scroll';



const cx = classNames.bind(style);

const listmenu = [
    'Tour', 'About', 'Attraction/Activities', 'FAQ'
]

function Destimation() {
    const [valueFillter, setValueFillter] = useState({ category: -1, tourTag: -1 });
    const [vlcountry, setvlcountry] = useState('');
    const [vldestination, setvldestination] = useState('');
    const [vltype, setvltype] = useState('');
    const [vltag, setvltag] = useState('');
    const [vlseason, setvlseason] = useState('');
    const [vlgroup, setvlgroup] = useState('');
    const [vlfromcost, setvlfromcost] = useState(0);
    const [vlendcost, setvlendcost] = useState(15000);
    const [Listdata, setlistdata] = useState();
    const [sort, setsort] = useState()


    const CT = useApppContext();

    const [Data, setdata] = useState();
    const router = useRouter();

    const [act, setact] = useState(['act', '', '', '']);
    const Pickmenu = (a) => {
        let arr = act;
        arr = arr.map((d, i) => i == a ? 'act' : '');
        setact(arr);
    }

    const sortp = (Data) => {

        if (sort == 'Ascending') {
            return Data.sort((a, b) =>
                a.PRICE[0].price * (100 - a.Discount) / 100 - b.PRICE[0].price * (100 - b.Discount) / 100
            )
        }
        if (sort == "Descending") {
            return Data.sort((a, b) =>
                b.PRICE[0].price * (100 - b.Discount) / 100 - a.PRICE[0].price * (100 - a.Discount) / 100
            )
        }

        if (sort == 'Asc') {
            return Data.sort((a, b) => Number(a.DETAIL[a.DETAIL.length - 1].Day) - Number(b.DETAIL[b.DETAIL.length - 1].Day))
        }
        if (sort == "Des") {
            return Data.sort((a, b) => Number(b.DETAIL[b.DETAIL.length - 1].Day) - Number(a.DETAIL[a.DETAIL.length - 1].Day))
        }
        if (sort == "None") {
            sortByName(Data)
            return Data

        }

        return sortByName(Data);

    }


    // { Data && Data.map(d => d.DETAIL.length == 0 && console.log(d.TourName)) }

    // const sortd = (Data) => {


    // }

    const CallAPISuperfilter = async () => {
        // console.log('des', router.query.id.substring(router.query.id.indexOf('destination=') + 'destination='.length));
        // console.log('des1', vldestination)

        const response = await Superfilter(router.query.id.split('dest')[0], vldestination, vltype, vlfromcost, vlendcost, vltag, vlseason, vlgroup);
        if (response.status == 200) {
            setdata(response.data.Object.filter(d => d.TourType != 'TYPE_MICE'));
        }
        setPage(1);
    }
    useEffect(() => {

        { router.query.id && setvldestination((router.query.id).substring(router.query.id.indexOf('destination=') + 'destination='.length)) }
        console.log('DES', vldestination)
    }, [router.query.id])
    useEffect(() => {
        { router.query.id && CallAPISuperfilter() }


    }, [vldestination, vltype, vlfromcost, vlendcost, vltag, vlseason, vlgroup, router])

    const dataFillter = (data) => {
        setValueFillter(data)
    }


    // Phân trang
    const [page, setPage] = useState(1)

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    //Hàm sắp xếp
    function sortByName(arr) {
        return arr.sort(function (a, b) {
            if (a.TourNname < b.TourName) {
                return -1;
            }
            if (a.TourName > b.TourName) {
                return 1;
            }
            return 0;
        });
    }

    console.log('Data', Data);



    return (
        <div className={cx('wrapper')}>
            {/* <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} titleBanner={router.query.id} classNameTitle={cx('titleBanner')} textBottom={"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} /> */}
            {router.query.id && <BannerIMG img={banners.resolt} title={(router.query.id).split('dest')[0]} bg='bg' descrip='Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content' />}
            <div className={cx('list-menu')} id='list'>
                {listmenu.map((d, i) =>
                    <p className={cx(act[i])} onClick={() => Pickmenu(i)}>{d}</p>
                )}

            </div>
            {act[0] == 'act' &&
                <Section maxWidth={1170} className={cx('container')} >
                    {Data &&
                        <div className={cx('list')}>
                            {vldestination != '' && vltag != '' && vlseason != '' && vlgroup != '' && <div className={cx('list-active')}>
                                {vldestination != '' && <p>Category : {vldestination} /</p>}
                                {vltag != '' && <p>Tag : {vltag} /</p>}
                                {vlseason != '' && <p>Season : {vlseason} /</p>}
                                {vlgroup != '' && <p>GroupSize : {vlgroup} /</p>}
                            </div>}
                            <div className={cx('sort')}>
                                <div className={cx('sortContent')}>
                                    <label>Sort by :</label>
                                    {/* <label htmlFor="sort-price" for='sort-price' name='sort-price'>Price</label> */}
                                    <select name='sort-price' id='sort-price' className={cx("sortp")} onChange={(e) => setsort(e.target.value)}>
                                        <option value='None'>--Price/Day--</option>
                                        <option value='Ascending'>Price Ascending</option>
                                        <option value='Descending'>Price Descending</option>
                                        <hr />
                                        <option value='Asc'>Day   Ascending</option>
                                        <option value='Des'>Day   Descending</option>
                                    </select>
                                    {/* 
                                    <label htmlFor="sort-long">Long</label>
                                    <select name='sort-long' id='sort-long' className={cx("sort-sl")} onChange={(e) => setsort(e.target.value)}>
                                        <option value='select'>--All--</option>

                                    </select> */}

                                </div>
                                <span>Showing {(page - 1) * 9 + 1} - {(page - 1) * 9 + Data.slice(firstIndex, lastIndex).length} of {Data.length} products</span>
                            </div>
                            <div className={cx('tour-list')}>
                                {sortp(Data).slice(firstIndex, lastIndex).map((d, i) =>
                                    <Tourcard2 data={d} />
                                )}
                            </div>

                            <Pagination totalPosts={Data.length} postPerPage={9} setPage={setPage} pageIndex={page} />

                        </div>
                    }
                    <CategoryFilter
                        price
                        priceft={priceFilter}
                        // day
                        category={categoryFillerAddress}
                        tourTags={tourTagsFilter}
                        className={cx('boxFilter')}
                        season={seasonFillter}
                        groupSize={groupSizeFillter}
                        // setValueFillter={dataFillter}
                        setvlcountry={setvlcountry}
                        setvldestination={setvldestination}
                        setvltype={setvltype}
                        setvltag={setvltag}
                        setvlseason={setvlseason}
                        setvlgroup={setvlgroup}
                        setvlfromcost={setvlfromcost}
                        setvlendcost={setvlendcost}
                    />
                </Section>}
            {act[1] == 'act' && <AboutVN />}
            {act[2] == 'act' && <Location />}
            {act[3] == 'act' && <Faq />}

        </div>
    );
}

export default Destimation;
