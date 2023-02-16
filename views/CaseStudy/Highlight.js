import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/casetudy.module.scss';
import Image from 'next/image';
import { Title } from '@/components';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import { GoPrimitiveDot } from 'react-icons/go';

const cx = classNames.bind(style);

const Highlight = ({ data }) => {
    return (
        <div className={cx('highlight')}>
            <div className={cx('top')}>
                <Image src={`https://vnxpedia.3i.com.vn${data.HightlightImg}`} alt={data.TourName} width='1000' height='1000' className={cx('top-img')} />
                <div className={cx('top-hl')}>
                    <Title className={cx('title')} text='Tour Highlight' />
                    {ChangeTextHTML(data.Hightlight).map((d, i) =>
                        <p className={cx('p-hl')}><GoPrimitiveDot />{d}</p>
                    )}
                </div>

            </div>
            <Image src={`https://vnxpedia.3i.com.vn${data.HightlightImg}`} alt={data.TourName} width='1000' height='1000' className={cx('bot-img')} />

        </div>
    )
}

export default Highlight