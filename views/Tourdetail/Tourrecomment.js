import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import { Title } from '@/components';
import Tourcard1 from '../Tourcard/Tourcard1';

const cx = classNames.bind(style);

const Tourrecomment = ({ data }) => {
    return (
        <div className={cx('tour-rcm')}>
            <Title text='Tour recomment' align='start' />
            <div className={cx('tour-list')}>
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
                <Tourcard1 data={data} />
            </div>
        </div>
    )
}

export default Tourrecomment