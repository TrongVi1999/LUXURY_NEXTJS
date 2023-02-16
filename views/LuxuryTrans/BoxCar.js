import classNames from "classnames/bind";
import style from './styleTransFer.module.scss'
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import a4 from '@/public/icon/transfer4.png'
import Link from "next/link";


const cx = classNames.bind(style)

function BoxCar({ className, click, data }) {
    return (
        <Link href={`/transfer-detail/${data.id}`} className={cx('card', { [className]: className })}>
            <div className={cx('boxImg')}>
                <img className={cx('img')} src={`https://vnxpedia.3i.com.vn${data.gallery}`} alt="carImg" />
            </div>
            <div className={cx('infor')}>
                <h1 className={cx('nameCar')}>{data.title}</h1>
                <p className={cx('rate')}>
                    {/* <span className={cx('seats')}> */}
                    <Image src={a4} alt='icon' /> <span> 6 seats</span>
                    {/* </span> */}
                    <br />
                    <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                    <p className={cx('describe')}>
                        <span>Describe: </span>
                        {data.intro_text}
                    </p>
                </p>
            </div>
        </Link>
    );
}

export default BoxCar;