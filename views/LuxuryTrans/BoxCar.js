import classNames from "classnames/bind";
import style from './styleTransFer.module.scss'
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import a4 from '@/public/icon/transfer4.png'
import Link from "next/link";


const cx = classNames.bind(style)

function BoxCar({ img, name, className, key, click }) {
    return (
        // <Link href={`/`} className={cx('card')}>
        <Link href='/transfer-detail/1' key={key} className={cx('card', { [className]: className })}>

            <div className={cx('boxImg')}>
                <Image className={cx('img')} src={img} alt="carImgErr" />
            </div>
            <div className={cx('infor')}>
                <h1 className={cx('nameCar')}>{name}</h1>
                <p className={cx('rate')}>
                    {/* <span className={cx('seats')}> */}
                    <Image src={a4} /> <span> 6 seats</span>
                    {/* </span> */}
                    <br />
                    <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                    <p className={cx('describe')}>
                        <span>Describe:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices ..
                    </p>
                </p>
            </div>
        </Link>
        // </Link>
    );
}

export default BoxCar;