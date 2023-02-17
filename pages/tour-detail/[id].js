import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Crumb from '@/views/Crumb/Crumb';
import Imglist from '@/views/Tourdetail/Imglist';
import Highlight from '@/views/Tourdetail/Highlight';
import Itinerary from '@/views/Tourdetail/Itinerary';
import Tourrecomment from '@/views/Tourdetail/Tourrecomment';
import { useRouter } from "next/router";
import Booking from '@/views/Tourdetail/Booking';
import Shareemail from '@/views/Tourdetail/Shareemail';
import { Gettour } from '../api/QuerryAPI';
import Headpage from '@/components/Head/head';

const cx = classNames.bind(style);


const index = () => {
    const router = useRouter();
    const [Book, setBook] = useState(0);
    const componentRef = useRef(null);

    const Tourresponse = Gettour(router.query.id)
    const Tourdata = Tourresponse.data;


    if (Tourresponse.isLoading) {
        return <p>Loading...</p>;
    }

    if (Tourresponse.error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className={cx('container')}>
            <Headpage />
            <div className={cx('main')}>
                {Tourdata.Object[0].BannerImg ?
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.Object[0].BannerImg}`} title={Tourdata.Object[0].TourName} bg='bg' /> :
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`} title={Tourdata.Object[0].TourName} bg='bg' />
                }


                {Book == 0 &&
                    <div className={cx('main-infor')}>

                        <div className={cx('crumb-cost')}>
                            <Crumb text={Tourdata.Object[0].TourName} />
                            <div className={cx('cost')}>
                                <sup>From</sup>
                                <p>$ {Tourdata.Object[0].PRICE[0].price}</p>
                                <span>/PAX</span>
                            </div>
                        </div>

                        <Imglist data={[`https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg1}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg2}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg3}`]} />
                        <Highlight title={Tourdata.Object[0].TourName} destination={Tourdata.Object[0].Destination} long={Tourdata.Object[0].DETAIL.length} highlight={Tourdata.Object[0].Hightlight} click={setBook} btn cla='name' cla2='highlight' />
                        <Itinerary description={Tourdata.Object[0].TourDescription} detail={Tourdata.Object[0].DETAIL} click={setBook} btn dataref={componentRef.current} />

                    </div>}
                {Book == 1 && <Booking
                    onClick={setBook}
                    datas={Tourdata.Object[0]}
                />

                }
                {Book == 2 && <Shareemail close={setBook} />}
                <Tourrecomment type={Tourdata.Object[0].TourType} />

                <div className={cx('pdf')}>
                    <div className={cx('main-infor1')} ref={el => (componentRef.current = el)}>
                        <div className={cx('crumb-cost')}>
                            <h3> {Tourdata.Object[0].TourName} </h3>
                            <div className={cx('cost')}>
                                <sup>From</sup>
                                <p>${Tourdata.Object[0].PRICE[0].price}</p>
                                <span>/PAX</span>
                            </div>
                        </div>

                        <Imglist data={[`https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`, `https://vnxpedia.3i.com.vn${Tourdata.Object[0].HightlightImg}`]} issv={true} />
                        <Highlight title={Tourdata.Object[0].TourName} destination={Tourdata.Object[0].Destination} long={Tourdata.Object[0].DETAIL.length} highlight={Tourdata.Object[0].Hightlight} click={setBook} cla='name1' cla2='highlight2' />
                        <Itinerary description={Tourdata.Object[0].TourDescription} detail={Tourdata.Object[0].DETAIL} click={setBook} />

                    </div>
                </div>




                {/* <ReactToPrint
                    trigger={() => <button >In</button>}
                    content={() => componentRef.current}
                /> */}

            </div>

        </div>
    )
}

export default index

