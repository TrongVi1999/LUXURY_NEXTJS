import { Button, Pagination } from '@/components';
import Headpage from '@/components/Head/head';
import Loading from '@/components/Loading';
import a1 from '@/public/icon/transfer1.png';
import a2 from '@/public/icon/transfer2.png';
import a3 from '@/public/icon/transfer3.png';
import { banners } from '@/public/images';
import style from '@/styles/luxuryTransfer.module.scss';
import { BoxCarTrans } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState } from 'react';
import { ListTransfer } from '../api/QuerryAPI';
import Transferbook from '@/views/BookTransfer';
import { Vehicles, CruiseYacht, Helicopters, Luxtrain } from '@/views/LuxuryTrans/ContentType';

const cx = classNames.bind(style);

const listtype = ['VEHICLES', 'YACHTS', 'HELICOPTERS', 'LUX TRAIN']

function index() {

    const [page, setPage] = useState(1)
    const [transActive, setTransActive] = useState(0);
    const [Book, setbook] = useState(false);
    const [Type, settype] = useState('VEHICLES')


    const transferList = ListTransfer(Type);
    // const ChangeType = (i) => {
    //     setTransActive(i);
    //     settype(listtype(i));
    // }

    // const onChangePag = (page) => {
    //     setcurrent(Tourresult.slice((page - 1) * 9, page * 9));
    // };


    return (
        <div className={cx('wrapper')}>
            <Headpage />
            <BannerIMG img={banners.luxuryTransfer} title={"LUXURY TRANSFER"} />
            {Book ? <Transferbook click={setbook} type={Type} /> :
                <div className={cx('main')}>
                    <div className={cx('boxTitle')}>
                        <h2 className={cx('title')}>luxury transfer</h2>
                        <p className={cx('textTitle')}>At Luxuryvietravel, we are disceming, opinionated, and beleve kairy should be part of the pleasure in exploring our beautiful country No matter what you need from your kury experience, we make sure than your journey is customized to your meds Fram commercialigns to private charters points and legge planning to luxury arexpenence</p>
                    </div>

                    <div className={cx('boxBtn')} >
                        {listtype.map((d, i) =>
                            <Button className={cx('btn', transActive === i ? 'active' : null)} onClick={() => { setTransActive(i); settype(d) }} key={i}>{d} </Button>
                        )}

                    </div>

                    <div className={cx('container')}>
                        {Type == 'VEHICLES' && <Vehicles setbook={setbook} />}
                        {Type == 'YACHTS' && <CruiseYacht />}
                        {Type == 'HELICOPTERS' && <Helicopters />}
                        {Type == 'LUX TRAIN' && <Luxtrain />}


                    </div>

                </div>
            }
        </div>
    );
}

export default index;
