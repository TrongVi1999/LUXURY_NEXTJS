import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Section } from '@/components';
import { Title } from '@/components';
import IMG from '@/public/images/tour1.jpg';
import Tourcard1 from '../Tourcard/Tourcard1';

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
    return (
        <div className={cx('container')}>
            <Title text="TOUR HIGHLIGHT" />
            <div className={cx('tour-list')}>
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
            </div>
        </div>
    );
};

export default Hottour;
