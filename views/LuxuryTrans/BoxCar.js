import classNames from "classnames/bind";
import style from './styleTransFer.module.scss'
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import a4 from '@/public/icon/transfer4.png'
import Link from "next/link";
import { ListTransfer } from "@/pages/api/QuerryAPI";
import Loading from "@/components/Loading";


const cx = classNames.bind(style)

function BoxCar(className) {
    const getTransDetail = ListTransfer();
    if (getTransDetail.isLoading) {
        return <Loading />;
    }

    if (getTransDetail.error) {
        return <p>Error: {error.message}</p>;
    }
    console.log(getTransDetail);
    return (
        <>
            {getTransDetail.data && getTransDetail.data.Object.slice(0, 3).map((i, d) =>
                <Link href={`/transfer-detail/${data.id}`} className={cx('card', { [className]: className })} key={i}>

                    <div className={cx('boxImg')} >
                        <img className={cx('img')} src={`https://vnxpedia.3i.com.vn${d.gallery}`} alt="carImg" />
                    </div>
                    <div className={cx('infor')}>
                        <h1 className={cx('nameCar')}>{d.title}</h1>
                        <p className={cx('rate')}>
                            {/* <span className={cx('seats')}> */}
                            <Image src={a4} alt='icon' /> <span> 6 seats</span>
                            {/* </span> */}
                            <br />
                            <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                            <p className={cx('describe')}>
                                <span>Describe: </span>
                                {d.intro_text}
                            </p>
                        </p>
                    </div>

                </Link>
            )}
        </>
    );
}

export default BoxCar;