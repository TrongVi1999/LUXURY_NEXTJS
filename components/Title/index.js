import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

const index = ({ text, align, className }) => {
    const clases = cx('h6', { [className]: className })

    return <h6 className={clases} style={{ textAlign: align }}>{text.toUpperCase()}</h6>;
};

export default index;
