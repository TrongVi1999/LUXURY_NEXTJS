import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import { GiCheckMark } from 'react-icons/gi';
import { SlClock, SlLocationPin } from 'react-icons/sl';
import Share from '../Share/Share';

const cx = classNames.bind(style);

const Highlight = ({ title, destination, long, highlight }) => {
    return (
        <div className={cx('introduce')}>
            <div className={cx('name')}>
                <h1>{title}</h1>
                <p className={cx('long')}><SlClock />{long} days</p>
                <p><SlLocationPin />{ChangeTextHTML(destination)}</p>
                <div ><p>MAKE AN ENQUIRY</p> <GiCheckMark /> </div>
            </div>
            <div className={cx('highlight')}>
                {ChangeTextHTML(highlight).map((d, i) => (
                    <div className={cx('hl-item')} key={i}>

                        <div className={cx('dot')}></div><p>{d}</p>
                    </div>
                ))}
                <Share />
            </div>
        </div>
    )
}

export default Highlight