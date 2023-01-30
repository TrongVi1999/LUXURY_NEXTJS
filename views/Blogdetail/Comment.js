import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import { BsChat } from 'react-icons/bs';
import IMG from '@/public/avatar_default.jpg'
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai'

const cx = classNames.bind(style);

const Comment = ({ data }) => {
    return (
        <div className={cx('comment')}>
            <div className={cx('avt')}>
                {data.img ? <Image src={data.img} /> : <Image src={IMG} />}
            </div>
            <div className={cx('main')}>
                <p className={cx('au-cm')}>{data.name} <AiOutlineClockCircle /><span>{data.date}</span></p>
                <p className={cx('text-cm')}>{data.comment}</p>
                <p className={cx('btn-rep')}><BsChat /> Reply</p>
            </div>
        </div>
    )
}

export default Comment