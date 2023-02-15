import React from 'react'
import style from './Loading.module.scss';
import classNames from "classnames/bind";
import { Vortex } from 'react-loader-spinner';
import logo from '@/public/images/logos/logo-w-2.png'
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';


const cx = classNames.bind(style);

const Loading = () => {
    return (
        <div className={cx('container')}>
            {/* <Image src={logo} /> */}
            <div>
                <Vortex
                    visible={true}
                    height="130"
                    width="130"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>

            <span>LUXURYVIETRAVEL</span><TiTick />
        </div>
    )
}

export default Loading