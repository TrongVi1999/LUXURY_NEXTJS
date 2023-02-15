import style from '@/styles/luxuryTransfer.module.scss';
import classNames from 'classnames/bind';

import { Button, Pagination, Section } from '@/components';
import a1 from '@/public/icon/transfer1.png';
import a2 from '@/public/icon/transfer2.png';
import a3 from '@/public/icon/transfer3.png';
import { banners } from '@/public/images';
import { BannerSlide, BoxCarTrans } from '@/views';

import xe1 from '@/public/images/xe1.jpg';
import xe2 from '@/public/images/xe2.jpg';
import xe3 from '@/public/images/xe3.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ListTransfer } from '../api/CallAPI';

const cx = classNames.bind(style);

const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const listtype = ['VEHICLES', 'YACHTS', 'HELICOPTERS', 'LUX TRAIN']

function Destimation() {
    const router = useRouter();
    const [page, setPage] = useState(1)
    const [transActive, setTransActive] = useState(0);
    const [Book, setBook] = useState(true);
    const [Type, settype] = useState('VEHICLES')
    const handleBooking = () => {
        setBook(false);
    }

    const [Data, setdata] = useState();
    const CallAPI = async () => {

        const response = await (ListTransfer(Type));
        if (response.status == 200) {
            setdata(response.data.Object);
        }

    }

    useEffect(() => {
        CallAPI();
    }, [page, router.query.id, Type]);

    const onChangePag = (page) => {
        setcurrent(Tourresult.slice((page - 1) * 9, page * 9));
    };

    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.luxuryTransfer]} className={cx('bannerBody')} titleBanner={"luxury transfer"} classNameTitle={cx('titleBanner')} />
            <Section maxWidth={850} className={cx('boxTitle')}>
                <h1 className={cx('title')}>luxury transfer</h1>
                <p className={cx('textTitle')}>At VNXpedia, we are disceming, opinionated, and beleve kairy should be part of the pleasure in exploring our beautiful country No matter what you need from your kury experience, we make sure than your journey is customized to your meds Fram commercialigns to private charters points and legge planning to luxury arexpenence</p>
            </Section>

            <Section maxWidth={800} isWrap className={cx('boxBtn')} gapBox={0}>
                {listtype.map((d, i) =>
                    <Button className={cx('btn', transActive === i ? 'active' : null)} onClick={() => { setTransActive(i); settype(d) }}>{d} </Button>
                )}

            </Section>

            <div className={cx('container')}>
                <div className={cx('text')}>
                    <h2>VEHICLES</h2>
                    <p>We manually compare the prices from hundreds of airport transfer service suppliers in Vietnam to offer you the best value for money service. All of our transportation suppliers in Vietnam offer free cancellations and free amendments, up to 24 hours before pick up. Vietnam Airport pick ups include meet and greet and our prices are fully inclusive. Book your Vietnam taxi transfer online in minutes and enjoy a stress free transfer and a perfect start to your holiday. And while you are here, why not book your transfer from your home to the airport and back. You can find a list of all destinations we cover on our destinations page, or use the quote form.<br /><br />

                        Our Private Cars are all new, modern with strong A/C and only use for our customers.</p>
                    <div className={cx('icon')}>
                        <div>
                            <Image src={a1} />
                            <h4>Professional Service</h4>
                        </div>
                        <div className={cx('seperate')}></div>
                        <div>
                            <Image src={a2} />
                            <h4>Professional Service</h4>
                        </div>
                        <div className={cx('seperate')}></div>
                        <div className={cx('icon1')}>
                            <Image src={a3} />
                            <h4>Professional Service</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Section maxWidth={1170} isWrap gapBox={3.2}>
                {
                    Data && Data.map((d) => (
                        <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} click={handleBooking} />
                    ))
                }
            </Section>
            <Pagination totalPosts={datafa.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    );
}

export default Destimation;
