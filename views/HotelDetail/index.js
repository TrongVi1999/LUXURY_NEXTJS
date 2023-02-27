import Loading from '@/components/Loading';
import { GetlistImg } from '@/hook/GetListImg';
import { ListHotel } from '@/pages/api/QuerryAPI';
import style from '@/styles/Hoteldetail.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import Hotelcard from '../HotelCard/Hotelcard';

const cx = classNames.bind(style);

const HotelDetail = () => {
    const getHotelDetail = ListHotel('')
    // if (getHotelDetail.isLoading) {
    //     return <Loading />;
    // }

    // if (getHotelDetail.error) {
    //     return <p>Error: {error.message}</p>;
    // }
    console.log('data', getHotelDetail.data)
    return (
        <div className={cx('Siminal-Hotel')}>
            {getHotelDetail.data && getHotelDetail.data.Object.slice(0, 3).map((d, i) =>
                <div className={cx('hotelCard')}> <Hotelcard data={d} key={i} to={`/hotel-detail/${d.id}`} /></div>

            )
            }
        </div>
    )
}

export default HotelDetail