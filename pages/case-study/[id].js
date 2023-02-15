import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/casetudy.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
// import { Gettour } from '../api/CallAPI';
import { useRouter } from "next/router";
import ChangeTextHTML from '@/hook/ChangetextHTML';
import Highlight from '@/views/CaseStudy/Highlight';
import InEx from '@/views/CaseStudy/InEx';
import Listtag from '@/views/Blogdetail/Listtag';
import { Blogrecomment } from '@/views/Blogdetail';
import BookMICE from '@/views/CaseStudy/BookMICE';
import { Gettour } from '../api/QuerryAPI';

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
    const [Book, setBook] = useState(true);



    const caseStudy = Gettour(router.query.id);


    if (caseStudy.isLoading) {
        return <p>Loading...</p>;
    }

    if (caseStudy.error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                {(caseStudy.data.Object[0] && caseStudy.data.Object[0].BannerImg && caseStudy.data.Object[0].HightlightImg) ?
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${caseStudy.data.Object[0].BannerImg}`} title={caseStudy.data.Object[0].TourName} bg='bg' descrip={ChangeTextHTML(caseStudy.data.Object[0].TourDescription)} /> :
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${caseStudy.data.Object[0].HightlightImg}`} title={caseStudy.data.Object[0].TourName} bg='bg' descrip={ChangeTextHTML(caseStudy.data.Object[0].TourDescription)} />
                }


                {Book ?
                    <div className={cx('main-infor')}>

                        {caseStudy.data.Object[0] && <Highlight data={caseStudy.data.Object[0]} />}
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


            </div>

        </div>
    )
}

export default index