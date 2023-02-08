import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import IMG from '@/public/images/tour1.jpg';
import { useRouter } from 'next/router';
import { Section, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { categoryFillerAddress, tourTagsFilter, seasonFillter, groupSizeFillter, priceFilter } from '@/public/dataRender';
import { Superfilter } from '../api/CallAPI';
import { useState, useEffect } from 'react';

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

    const [Data, setdata] = useState();
    const router = useRouter();

    const [act, setact] = useState(['act', '', '', '']);
    const Pickmenu = (a) => {
        let arr = act;
        arr = arr.map((d, i) => i == a ? 'act' : '');
        setact(arr);

    }

    const CallAPISuperfilter = async () => {
        const response = await Superfilter(router.query.id, vldestination, vltype, vlfromcost, vlendcost, vltag, vlseason, vlgroup);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
        setPage(1)
    }


    useEffect(() => {
        { router.query.id && CallAPISuperfilter() }
    }, [router.query.id, vldestination, vltype, vlfromcost, vlendcost, vltag, vlseason, vlgroup])



    const dataFillter = (data) => {
        setValueFillter(data)
    }


    const [page, setPage] = useState(1)

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;


    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} titleBanner={router.query.id} classNameTitle={cx('titleBanner')} textBottom={"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} />
            <div className={cx('list-menu')}>
                {listmenu.map((d, i) =>
                    <p className={cx(act[i])} onClick={() => Pickmenu(i)}>{d}</p>
                )}

            </div>
            <Section maxWidth={1170} className={cx('container')}>
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
                                <button>Sort by</button>
                            </div>
                            <span>Showing 1 - 9 of {Data.length} products</span>
                        </div>
                        <div className={cx('tour-list')}>
                            {Data.slice(firstIndex, lastIndex).map((d, i) =>
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
                    setValueFillter={dataFillter}
                    setvlcountry={setvlcountry}
                    setvldestination={setvldestination}
                    setvltype={setvltype}
                    setvltag={setvltag}
                    setvlseason={setvlseason}
                    setvlgroup={setvlgroup}
                    setvlfromcost={setvlfromcost}
                    setvlendcost={setvlendcost}
                />
            </Section>
        </div>
    );
}

export default Destimation;
