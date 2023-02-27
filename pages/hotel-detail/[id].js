import Headpage from '@/components/Head/head';
import Loading from '@/components/Loading';
import { GetlistImg } from '@/hook/GetListImg';
import { banners } from '@/public/images';
import style from '@/styles/Hoteldetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Hotelbook from '@/views/BookHotel';
import HotelDetail from '@/views/HotelDetail';
import Imglist from '@/views/Tourdetail/Imglist';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GetLuxservice } from '../api/QuerryAPI';




const cx = classNames.bind(style);

const Index = () => {
    const [book, setbook] = useState(false);
    const router = useRouter();


    const hotelData = GetLuxservice(router.query.id);

    return (
        <div>
            <Headpage />
            {hotelData.data && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.hoteldetail} title={hotelData.data.title} bg='bg' />
                {book ? <Hotelbook click={setbook} hotel={hotelData.data.title} /> : <div className={cx('container')}>
                    <Imglist data={GetlistImg(hotelData.data.gallery)} />

                    <div className={cx('des')}>
                        <h2>{hotelData.data.title}</h2>
                        <div className={cx('star')}>

                            <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                            <p className={cx('address')}><CiLocationOn />
                                {hotelData.data.DETAIL.find(d => d.Type == "ADDRESS_HOTEL").Value}

                            </p>
                            <p>{hotelData.data.intro_text}</p>

                            {/* <button onClick={() => setbook(true)}>BOOK NOW <span className={cx('hr-left')}></span> <BsCheckLg /></button> */}
                        </div>
                    </div>

                    <div className={cx('main-hotel')} dangerouslySetInnerHTML={{ __html: hotelData.data.full_text }}></div>
                    <button onClick={() => setbook(true)} className={cx('btn-hotel')}>BOOK NOW <span className={cx('hr-left')}></span> <BsCheckLg /></button>


                    <h2 className={cx('h2-hotel')}>Siminal Hotels</h2>
                    {/* {hotelData.data &&  */}
                    <HotelDetail />
                    {/* } */}
                </div>
                }
            </div>}
        </div >
    )
}

export default Index