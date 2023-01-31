import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Section } from '@/components';
import { Title } from '@/components';
import IMG from '@/public/images/tour1.jpg';
import Tourcard1 from '../Tourcard/Tourcard1';
import { Tourhot } from '@/pages/api/CallAPI';

const cx = classNames.bind(style);

const data = {
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
};

const Hottour = () => {
    const [Data, setdata] = useState();
    const CallHottour = async () => {
        const response = await Tourhot();
        if (response.status == 200) {
            setdata(response.data.Object.slice(0, 6));
        }
    }
    useEffect(() => {
        CallHottour();
    }, []);
    console.log(Data)
    return (
        <div className={cx('container')}>
            <Title text="TOUR HIGHLIGHT" align='center' />
            {Data &&

                <div className={cx('tour-list')}>
                    {Data.map(d => (

                        <Tourcard1 data={d} />
                    ))}

                </div>
            }
        </div>
    );
};

export default Hottour;
