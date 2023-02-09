import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/casetudy.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { Gettour } from '../api/CallAPI';
import { useRouter } from "next/router";
import ChangeTextHTML from '@/hook/ChangetextHTML';
import Highlight from '@/views/CaseStudy/Highlight';
import InEx from '@/views/CaseStudy/InEx';
import Listtag from '@/views/Blogdetail/Listtag';
import { Blogrecomment } from '@/views/Blogdetail';
import BookMICE from '@/views/CaseStudy/BookMICE';


const cx = classNames.bind(style);

const Data = {
    Img: '',
    Infor: [`Time: May 2017 `, `Number of pax: 150`, `Venue: Mui Ne - Phan Thiet`, `Organizer: VNXPEDIA`],
    Inclusions: ['Food for 150 pax', 'Table and chair', 'Service proesinal staff', 'Drink', 'Decoration', 'Cleaning Service'],
    Exclusions: ['Food not in menu', 'Tip money for staff', 'Wine and alcoho', 'Tip money for staff', 'Tip money for staff', 'Tip money for staff'],
    hash_tag: "[\"#BBQ Party\",\"#Phan Thiet \",\"#Dailytour\"]"
}

const index = () => {
    const router = useRouter();
    const [Tourdata, setTourdata] = useState();
    const [Book, setBook] = useState(true);


    const callApi = async () => {
        const response = await Gettour(router.query.id)

        if (response.status === 200) {
            setTourdata(response.data.Object[0]);
        }
    };

    useEffect(() => {
        callApi();
    }, [router.query.id])
    { Tourdata && console.log(ChangeTextHTML(Tourdata.Hightlight)) }

    return (
        <div className={cx('container')}>
            {Tourdata && <div className={cx('main')}>
                {Tourdata.BannerImg ?
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.BannerImg}`} title={Tourdata.TourName} bg='bg' descrip={ChangeTextHTML(Tourdata.TourDescription)} /> :
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.HightlightImg}`} title={Tourdata.TourName} bg='bg' descrip={ChangeTextHTML(Tourdata.TourDescription)} />
                }


                {Book ?
                    <div className={cx('main-infor')}>

                        <Highlight data={Tourdata} />
                        <InEx data={Data.Inclusions} type='inc' />
                        <InEx data={Data.Exclusions} type='exc' />

                        <div className={cx('book-div')}>
                            <h6 className={cx('h6')}>Let me us know your dream trip for your company! </h6>
                            <button className={cx('btn')} onClick={() => setBook(false)}>Book Now</button>
                        </div>
                        <Listtag data={Data.hash_tag} />

                    </div> : <BookMICE close={setBook} />

                }

                <Blogrecomment />


            </div>}

        </div>
    )
}

export default index