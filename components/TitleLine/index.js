import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

const TitleLine = ({ text, color }) => {
    console.log(color);
    return (
        <div className={cx('title-line')} >
            <div className={cx('text-line')}></div>
            <p className={cx('text-type')} style={{ color: `${color}` }}>
                {text.toUpperCase()}
            </p>
        </div>
    )
}

export default TitleLine