import Loading from '@/components/Loading';
import a1 from '@/public/a1.png';
import a2 from '@/public/a2.png';
import a3 from '@/public/a3.png';
import a4 from '@/public/a4.png';
import { banners } from '@/public/images';
import style from '@/styles/Hoteldetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Hotelbook from '@/views/BookHotel';
import HotelDetail from '@/views/HotelDetail';
import Imglist from '@/views/Tourdetail/Imglist';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GetLuxservice } from '../api/QuerryAPI';
import { ListHotel } from '../api/QuerryAPI';


const cx = classNames.bind(style);

const Index = () => {
    const [book, setbook] = useState(false);
    const [Data, setdata] = useState();
    const router = useRouter();
    const data = {
        img: a1,
        title: 'HA LONG BAY DAY CRUISE - PARADISE EXPLORER',
        price: 200000000,
    }

    const hotelData = GetLuxservice(router.query.id);
    if (hotelData.isLoading) {
        return <Loading />;
    }

    if (hotelData.error) {
        return <p>Error: {error.message}</p>;
    }




    return (
        <div>
            {hotelData.data && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.hoteldetail} title={hotelData.data.Object[0].title} bg='bg' />
                {book ? <Hotelbook click={setbook} hotel={hotelData.data.Object[0].title} /> : <div className={cx('container')}>
                    <Imglist data={[`https://vnxpedia.3i.com.vn${hotelData.data.Object[0].gallery}`, a2, a3, a4]} issv={false} />

                    <div className={cx('des')}>
                        <h2>{hotelData.data.Object[0].title}</h2>
                        <div className={cx('star')}>

                            <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                            <p className={cx('address')}><CiLocationOn />
                                {hotelData.data.Object[0].DETAIL.find(d => d.TYPE == 'ADDRESS_HOTEL')}

                            </p>


                            <button onClick={() => setbook(true)}>BOOK NOW <span className={cx('hr-left')}></span> <BsCheckLg /></button>
                        </div>
                    </div>

                    <div className={cx('main-hotel')} dangerouslySetInnerHTML={{ __html: hotelData.data.Object[0].full_text }}></div>

                    <h2>Siminal Hotels</h2>
                    {hotelData.data && <HotelDetail />
                        // <div className={cx('Siminal-Hotel')}>
                        //     <Link href={`/hotel-detail/5258=`} className={cx('card')}>
                        //         <div className={cx('card-img')}>
                        //             <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                        //         </div>
                        //         <div className={cx('infor')}>
                        //             <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                        //             <p className={cx('rate')}>
                        //                 <span className={cx('rating')}>
                        //                     <AiFillStar /> 4.8
                        //                 </span>
                        //                 <span className={cx('ratecount')}>
                        //                     &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                        //                 </span>
                        //             </p>
                        //             <p className={cx('price')}>
                        //                 <span className={cx('price1')}>$ {data.price}</span>

                        //             </p>
                        //         </div>
                        //     </Link>
                        /* <Link href={`/hotel-detail/5258`} className={cx('card')}>
                                <div className={cx('card-img')}>
                                    <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                                </div>
                                <div className={cx('infor')}>
                                    <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                    <p className={cx('rate')}>
                                        <span className={cx('rating')}>
                                            <AiFillStar /> 4.8
                                        </span>
                                        <span className={cx('ratecount')}>
                                            &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                        </span>
                                    </p>
                                    <p className={cx('price')}>
                                        <span className={cx('price1')}>	&#36; {data.price}</span>

                                    </p>
                                </div>
                            </Link>
                            <Link href={`/hotel-detail/5258`} className={cx('card')}>
                                <div className={cx('card-img')}>
                                    <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                                </div>
                                <div className={cx('infor')}>
                                    <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                    <p className={cx('rate')}>
                                        <span className={cx('rating')}>
                                            <AiFillStar /> 4.8
                                        </span>
                                        <span className={cx('ratecount')}>
                                            &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                        </span>
                                    </p>
                                    <p className={cx('price')}>
                                        <span className={cx('price1')}>$ {data.price}</span>

                                    </p>
                                </div>
                            </Link> */


                    }
                </div>
                }
            </div>}
        </div >
    )
}

export default Index