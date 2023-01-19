import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

const Crumb = ({ text }) => {
    return (
        <div>
            <p className={cx('text')}>Home | {text}</p>
        </div>
    )
}

export default Crumb