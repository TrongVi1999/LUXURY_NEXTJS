import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import IMG from '@/public/images/tour1.jpg';
import { useRouter } from 'next/router';
import { Section, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { categoryFillerAddress, tourTagsFilter, seasonFillter, groupSizeFillter } from '@/public/dataRender';
import { Gettourcountry, Gettourdestination } from '../api/CallAPI';
import { useState, useEffect } from 'react';

const cx = classNames.bind(style);

function Destimation() {
    const [valueFillter, setValueFillter] = useState({ category: -1, tourTag: -1 })

    const [Data, setdata] = useState();
    const router = useRouter();

    const CallAPI = async () => {
        const response = await Gettourcountry(router.query.id);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }
    const CallAPICategory = async () => {
        const response = await Gettourdestination(categoryFillerAddress.elements[valueFillter.category].name);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }

    useEffect(() => {
        if (valueFillter.category !== -1) {
            CallAPICategory();
        }
    }, [valueFillter.category])

    useEffect(() => {
        CallAPI();
    }, [router.query.id]);

    const dataFillter = (data) => {
        setValueFillter(data)
    }


    const [page, setPage] = useState(1)

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} titleBanner={router.query.id} classNameTitle={cx('titleBanner')} textBottom={"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} />
            <Section maxWidth={1170} className={cx('container')}>
                {Data &&
                    <div className={cx('list')}>
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
                    day
                    category={categoryFillerAddress}
                    tourTags={tourTagsFilter}
                    className={cx('boxFilter')}
                    season={seasonFillter}
                    groupSize={groupSizeFillter}
                    setValueFillter={dataFillter}
                />
            </Section>
        </div>
    );
}

export default Destimation;
