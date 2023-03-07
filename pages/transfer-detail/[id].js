import Loading from '@/components/Loading';
import { banners } from '@/public/images';
import style from '@/styles/transferDetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Bookairport from '@/views/BookAirport/BookAirport';
import Crumb from '@/views/Crumb/Crumb';
import Imglist from '@/views/Tourdetail/Imglist';
import TransListDetail from '@/views/TransDetail';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetLuxservice } from '../api/QuerryAPI';
import Headpage from '@/components/Head/head';
import { GetlistImg } from '@/hook/GetListImg';
import { Title } from '@/components';
import { getModel, getType } from '@/hook/getModel';

const cx = classNames.bind(style);

const index = () => {
    const [book, setbook] = useState(false);
    const router = useRouter();
    const transferData = GetLuxservice(router.query.id);
    // const onChangePag = (page) => {
    //     setcurrent(Tourresult.slice((page - 1) * 9, page * 9));
    // };

    return (
        <div>
            <Headpage />
            {transferData.data && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.transferDetail} title='LUXURY TRANSFER' bg='bg' />
                {book ? <Bookairport click={setbook} transfer={transferData.data.title} typecar={getModel(transferData.data.DETAIL)} /> :
                    <div className={cx('container')}>
                        <Crumb text={`Luxury Transfer | ${transferData.data.title}`} />
                        <Imglist data={GetlistImg(transferData.data.gallery)} />
                        <div className={cx('des')}>
                            <h2>{transferData.data.title}</h2>
                            <p>{transferData.data.intro_text}</p>

                        </div>

                        <Title text='Technical specifications' align='center' />
                        <div className={cx('box')} dangerouslySetInnerHTML={{
                            __html: transferData.data.full_text,
                        }}>


                        </div>
                        <div className={cx('book')}>

                            <button onClick={() => setbook(true)}>BOOK NOW</button>

                        </div>
                        <h2>Similar Vehicles</h2>


                        <TransListDetail type={getType(transferData.data.DETAIL)} />

                    </div>}
            </div>}
        </div>)
}

export default index