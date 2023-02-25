import classNames from "classnames/bind";
import style from './styleTransFer.module.scss'
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import a4 from '@/public/icon/transfer4.png'
import Link from "next/link";
import { GetlistImg } from "@/hook/GetListImg";


const cx = classNames.bind(style)

function BoxCar({ className, data }) {
    return (
        <Link href={`/transfer-detail/${data.id}`} className={cx('card', { [className]: className })}>
            <div className={cx('boxImg')}>
                <Image className={cx('img')} src={GetlistImg(data.gallery)[0]} alt="carImg" width='1000' height='1000' />
            </div>
            <div className={cx('infor')}>
                <h2 className={cx('nameCar')}>{data.title}</h2>
                <p className={cx('rate')}>

                    <Image src={a4} alt='icon' /> <span> 6 seats</span>

                    <br />

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