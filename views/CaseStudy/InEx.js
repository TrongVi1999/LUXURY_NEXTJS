import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/casetudy.module.scss';
import { Title } from '@/components';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';


const cx = classNames.bind(style);

const InEx = ({ data, type }) => {
    console.log('data', data)
    return (
        <div className={cx('in-ex')}>
            {type == 'inc' ? <Title text='Tour Inclusion' /> : <Title text='Tour Exclusion' />}
            <div className={cx('main-list')}>
                {data.map((d) =>
                    <span>
                        {type == 'inc' ? <IoMdCheckmarkCircleOutline /> : <AiOutlineCloseCircle />}
                        {d}
                    </span>
                )}
            </div>
        </div>
    )
}

export default InEx