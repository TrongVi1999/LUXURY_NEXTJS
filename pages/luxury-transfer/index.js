import classNames from 'classnames/bind';
import style from '@/styles/luxuryTransfer.module.scss';
import { useRouter } from 'next/router';

import { Section, Button } from '@/components';
import { BannerSlide, BoxCarTrans } from '@/views';
import { banners, carTrans } from '@/public/images';
import { useState } from 'react';
import { Pagination } from 'antd';

const cx = classNames.bind(style);

const fakeDataTrans = [[
    {
        img: carTrans.xe1,
        name: "Setra S 416 HDH"
    },
    {
        img: carTrans.xe2,
        name: "Setra S 416 HDH"
    },
    {
        img: carTrans.xe3,
        name: "Setra S 416 HDH"
    }], [{
        img: carTrans.xe1,
        name: "Setra S 416 HDH2"
    },
    {
        img: carTrans.xe2,
        name: "Setra S 416 HDH2"
    },
    {
        img: carTrans.xe3,
        name: "Setra S 416 HDH2"
    }], [{
        img: carTrans.xe1,
        name: "Setra S 416 HDH3"
    },
    {
        img: carTrans.xe2,
        name: "Setra S 416 HDH3"
    },
    {
        img: carTrans.xe3,
        name: "Setra S 416 HDH3"
    }]
]

function Destimation() {

    const [transActive, setTransActive] = useState(0)
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

            <Section maxWidth={600} isWrap className={cx('boxBtn')} gapBox={0}>
                <Button className={cx('btn', transActive === 0 ? 'active' : null)} onClick={() => setTransActive(0)}>VEHICLES </Button>
                <Button className={cx('btn', transActive === 1 ? 'active' : null)} onClick={() => setTransActive(1)}>YACHTS </Button>
                <Button className={cx('btn', transActive === 2 ? 'active' : null)} onClick={() => setTransActive(2)}>HELICOPTERS </Button>
            </Section>

            <Section maxWidth={1170} isWrap gapBox={3}>
                {
                    fakeDataTrans[transActive].map((item, index) => (
                        <BoxCarTrans img={item.img} name={item.name} key={index} />
                    ))
                }
            </Section>
            {/* <Pagination
                defaultCurrent={1}
                total={Tourresult.length}
                onChange={onChangePag}
                defaultPageSize={9}
            /> */}
        </div>
    );
}

export default Destimation;