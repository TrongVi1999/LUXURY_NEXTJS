import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import { GiCheckMark } from 'react-icons/gi';
import { SlClock, SlLocationPin } from 'react-icons/sl';
import Share from '../Share/Share';
import Link from 'next/link';
const cx = classNames.bind(style);

const Highlight = ({ title, destination, long, highlight, click, btn }) => {
    return (
        <div className={cx('introduce')}>
            <div className={cx('name')}>
                <h1>{title}</h1>
                <div>
                    <p className={cx('long')}><SlClock />{long} days</p>
                    <p><SlLocationPin />{ChangeTextHTML(destination)}</p>
                </div>
                {btn && <div className={cx('btn-book')} onClick={() => click(1)}><p>MAKE AN ENQUIRY</p> <GiCheckMark /> </div>}
            </div>
            <div className={cx('highlight')}>
                {ChangeTextHTML(highlight).map((d, i) => (
                    <div className={cx('hl-item')} key={i}>

                        <div className={cx('dot')}></div><p>{d}</p>
                    </div>
                ))}
                {btn && <div className={cx('btn-book')} onClick={() => click(2)}><p>SHARE WITH FRIEND</p> <GiCheckMark /> </div>}
                <Share />
            </div>
        </div>
    )
}

export default Highlight