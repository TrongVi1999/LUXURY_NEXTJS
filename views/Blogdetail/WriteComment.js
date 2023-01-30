import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import { Title } from '@/components';

const cx = classNames.bind(style);

const WriteComment = () => {
    return (
        <div className={cx('write-cm')}>
            <Title text='WRITE A POST' align='center' />
            <textarea className={cx('textarea')} rows='10'></textarea>
            <div className={cx('login-list')}>
                <span>Login by</span>
            </div>
            <button className={cx('btn')}>ADD COMMENT</button>
        </div>
    )
}

export default WriteComment