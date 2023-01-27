import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

const index = ({ text, align }) => {
    return <h6 className={cx('h6')} style={{ textAlign: align }}>{text.toUpperCase()}</h6>;
};

export default index;
