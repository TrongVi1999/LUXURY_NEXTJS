import classNames from 'classnames/bind';
import style from '@/styles/mice.module.scss';

import { Section, Button } from '@/components';
// import { BannerSlide } from '@/views';
//import { banners } from '@/public/images';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Img1 from '@/public/images/Layer69.png'
import Img2 from '@/public/images/Layer70.png'
import Img3 from '@/public/images/Layer71.png'
import Img4 from '@/public/images/Layer72.png'
import Img5 from '@/public/images/Layer73.png'
import Img6 from '@/public/images/Layer74.png'
import Img7 from '@/public/images/Layer75.png'
import Img8 from '@/public/images/Layer76.png'
import Img9 from '@/public/images/Layer77.png'
import Img10 from '@/public/images/Layer78.png'
import Img11 from '@/public/images/Layer79.png'
import { TitleMice, DiffItem, BoxImageMice } from '@/views/Mice';
import Booking from '@/views/Mice/Contact';
import { useState } from 'react';
import Headpage from '@/components/Head/head';
import { Tourtype } from '../api/QuerryAPI';
import ChangeTextHTML from '@/hook/ChangetextHTML';


const cx = classNames.bind(style);

function Mice() {

    const listTour = Tourtype('TYPE_MICE');
    const [book, setbook] = useState(false);
    console.log(listTour.data)
    return (
        <div className={cx('wrapper')}>
            <Headpage />
            <BannerIMG className={cx('bannerBody')} bg='bg' title={"mice"} img={Img11} />

            {book ? <Booking click={setbook} /> :
                <div>
                    <div className={cx('sectionDiff')}>
                        <TitleMice title={'we have difference from the rest'} des={"MICE hes been a tight spot in Vietnams tous business during the last ten your sending several encouraging signals In an informal serien Vopedia has had activities and produced monique product in trdochina since to years ago when Vietnam was quite navel on the international tounem man"} />
                        <DiffItem isLeft title={"MEETINGS"} des="Owning facilities including a world-class accommodation system, diverse transportation system, convenient flight routes and many attractive side programs. Therefore, choosing to bring Meeting programs into Vietnam is becoming a wise decision.." img={Img1} />
                        <DiffItem title={"INCENTIVES"} des="The size of a reward tour usually ranges from 100 or more guests to thousands of guests. Some rewarding tours can be mentioned as picnic tours for employees of companies, mass organizations and social organizations, training tours for companies (Team building)." img={Img2} />
                        <DiffItem isLeft title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={Img3} />
                        <DiffItem title={"EVENTS"} des="On-demand events are extremely diverse. Do you think organizing a luxurious and romantic party in the largest cave in HaLong Bay? Or immerse yourself in an Asian art performance at the main courtyard of the Temple of Literature, as well as the most lavish wedding scenario on a private beach at Phu Quoc Pearl Island.?" img={Img4} />
                    </div>

                    <div className={cx('main')}>
                        {/* <Section className={cx('sectionDiff')}> */}
                        <TitleMice title={'WHAT ARE DIFFERENCE'} des={"We research, and select unique and clasey values to put into MICE products Customers can experiance the most different values when they have faith and order with VNXPEDIA"} />
                        <div className={cx('sectionDiffCase')}>
                            <BoxImageMice img={Img5} title="INNOVATIVE TEAM-BUIDLING" size={'45%'} />
                            <BoxImageMice img={Img6} title="DINNING & EVENT VENUES" size={'45%'} />
                            <BoxImageMice img={Img7} title="OUTSTANDING IDEA" size={'45%'} />
                            <BoxImageMice img={Img8} title="LOCAL TRANSPORT EXPERIENCES" size={'45%'} />
                        </div>
                        {/* </Section> */}

                        {/* <Section className={cx('sectionDiff')}> */}
                        <TitleMice title={'CASE STUDIES'} des={"We research, and select unique and classy values ​​to put into MICE products. Customers can experience the most different values ​​when they have faith and order with VNXPEDIA"} />
                        {listTour.data && <div className={cx('sectionDiffCase')}>
                            {listTour.data.Object.map((d, i) =>
                                <BoxImageMice img={`https://vnxpedia.3i.com.vn${d.HightlightImg}`} title={d.TourName} des={ChangeTextHTML(d.TourDescription)} size={'100%'} minWidth={'40rem'} />
                            )}
                            {/* <BoxImageMice img={Img9} title="Night barbecue party in Mui Ne for 120 paxs" des={"Recreate the image of a barbecue party in the desert at the sand dunes of Phan Thiet"} size={'100%'} minWidth={'40rem'} />
                            <BoxImageMice img={Img10} title="A unique and luxurious wedding takes place on Phu Quoc beach" des={"With the request to organize a private and luxurious wedding space on Phu Quoc pearl beach it was perfectly fulfilled"} size={'100%'} minWidth={'40rem'} /> */}
                        </div>}
                        {/* </Section> */}
                    </div>

                    <div className={cx('btnBoxContact')}>
                        <p className={cx('text')}>Let us accompany you to make the experice end trips of your dreams and your loved ones and colleagues!</p>
                        <button className={cx('btn')} onClick={() => setbook(true)}>
                            Contact us now
                        </button>
                    </div>
                </div>}
        </div >
    );
}

export default Mice;