import { Pagination, Section } from '@/components';
import { banners } from '@/public/images';
import xe1 from '@/public/images/xe1.jpg';
import xe2 from '@/public/images/xe2.jpg';
import xe3 from '@/public/images/xe3.jpg';
import a1 from '@/public/oto1.png';
import a2 from '@/public/oto2.png';
import a3 from '@/public/oto3.png';
import a4 from '@/public/oto4.png';
import style from '@/styles/transferDetail.module.scss';
import { BoxCarTrans } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Transferbook from '@/views/BookTransfer';
import Crumb from '@/views/Crumb/Crumb';
import Booking from '@/views/LuxuryTrans/Contact';
import Imglist from '@/views/Tourdetail/Imglist';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(style);

const fakeDataTrans = [[
    {
        img: xe1,
        name: "Setra S 416 HDH"
    },
    {
        img: xe2,
        name: "Setra S 416 HDH"
    },
    {
        img: xe3,
        name: "Setra S 416 HDH"
    }], [{
        img: xe1,
        name: "Setra S 416 HDH2"
    },
    {
        img: xe2,
        name: "Setra S 416 HDH2"
    },
    {
        img: xe3,
        name: "Setra S 416 HDH2"
    }], [{
        img: xe1,
        name: "Setra S 416 HDH3"
    },
    {
        img: xe2,
        name: "Setra S 416 HDH3"
    },
    {
        img: xe3,
        name: "Setra S 416 HDH3"
    }],

]
const index = () => {
    const [book, setbook] = useState(false);
    const [page, setPage] = useState(1);
    const onChangePag = (page) => {
        setcurrent(Tourresult.slice((page - 1) * 9, page * 9));
    };
    return (
        <>
            <BannerIMG className={cx('bannerHotelDetial')} img={banners.transferDetail} title='LUXURY TRANSFER' bg='bg' />
            {book ? <Transferbook /> :
                <div className={cx('container')}>
                    <Crumb text='Luxury Transfer | Vehicles Mercedes' />
                    <Imglist data={[a1, a2, a3, a4]} issv={false} />
                    <div className={cx('des')}>
                        <h2>MERSEDES BENS AMG COUPE</h2>
                        <p>The sporty Mercedes-AMG C 43 4MATIC vehicles enhance the new generation of the C-Class. This facelift is characterised by the sharpened design and the stronger differentiation from the AMG Line of the series-production models. Sporty, striking features reflect the level of performance which is to be expected. The enhanced 3.0-litre V6 biturbo engine, together with the all-wheel drive system offering maximum agility, enables optimum acceleration values. In the interior too, the AMG experience is discernible in every detail – the result is a perfect fusion of first-class comfort and a sporty ambience.</p>

                    </div>
                    <div className={cx('box')}>
                        <div>
                            <p>Engine: <span>2.143 cm3</span><br />
                                Airbags: <span>8</span><br />
                                Air conditioning: <span>Yes</span><br />
                                Interrior Color: <span>Lite-Gray</span><br />
                                Seats: <span>6</span></p>
                        </div>
                        <div>
                            <p>Types: <span>2143 cm3</span><br /></p>
                            <p>Doors: <span>4</span><br /></p>
                            <p>Interior: <span>Leather</span><br /></p>
                            <p>Entertainment: <span>CD/DVD Player I Radio | Microcomputer</span><br /></p>
                        </div>
                        <div>
                            <p>Model: <span>Mercedes-Benz AMG COUPE</span><br /></p>
                            <p>Roof type: <span>Simple</span><br /></p>
                            <p>Smoking: <span>Prohubited</span><br /></p>
                            <p>Big/Small suitcases: <span>8/8</span><br /></p>
                            <p>Year: <span>2014</span></p>
                        </div>
                    </div>
                    <div className={cx('book')}>

                        <button onClick={() => setbook(true)}>BOOK NOW</button>

                    </div>
                    <h2>Similar Vehicles</h2>

                    <Section maxWidth={1170} isWrap gapBox={3.2}>
                        {
                            fakeDataTrans.map((item, index) => (
                                <BoxCarTrans img={item.img} name={item.name} key={index} />
                            ))
                        }
                    </Section>
                    <Pagination totalPosts={fakeDataTrans.length} postPerPage={9} setPage={setPage} pageIndex={page} />

                </div>}
        </>)
}

export default index