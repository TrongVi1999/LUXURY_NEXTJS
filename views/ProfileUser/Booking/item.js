import classNames from "classnames/bind";
import style from './booking.module.scss'

import Link from "next/link";
import Image from "next/image";
const cx = classNames.bind(style)

function ItemBookingUser({
    img,
    titleTour,
    id,
    place,
    time,
    type,
    status }) {
    return (<Link href={'/'} className={cx('wrapperItem')}>
        <div className={cx('boxImg')}>
            <Image src={img} alt='imgError' className={cx('img')} />
        </div>
        <div className={cx('boxContent')}>
            {titleTour && <h2 className={cx('titleTour')}>{titleTour}</h2>}
            <div className={cx('boxInfoTour')}>
                <span>Booking number: {id}</span>
                <span>Time: {time}</span>
                <span>Place: {place}</span>
                <span>Type: {type}</span>
            </div>
        </div>
        <div className={cx('status', { [status]: status })}><span>
            {status}
        </span>
        </div>
    </Link>);
}

export default ItemBookingUser;