import style from '@/styles/mice.module.scss';
import classNames from 'classnames/bind';
import Headpage from '@/components/Head/head';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import Img1 from '@/public/images/Layer69.png';
import Img2 from '@/public/images/Layer70.png';
import Img3 from '@/public/images/Layer71.png';
import Img4 from '@/public/images/Layer72.png';
import Img5 from '@/public/images/Layer73.png';
import Img6 from '@/public/images/Layer74.png';
import Img7 from '@/public/images/Layer75.png';
import Img8 from '@/public/images/Layer76.png';
import Img11 from '@/public/images/Layer79.png';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { BoxImageMice, DiffItem, TitleMice } from '@/views/Mice';
import Booking from '@/views/Mice/Contact';
import { useState } from 'react';
import { Tourtype } from '../api/QuerryAPI';


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
                        <TitleMice title={'we have difference from the rest'} des={"M.I.C.E tourism has emerged as a promising segment in Vietnam's tourism industry over the past decade, providing a glimmer of hope for the sector. Luxury Vietravel has been actively involved in developing and offering unique M.I.C.E products in Indochina for the past 30 years, when Vietnam was still a relatively unknown destination on the global tourism scene."} />
                        <DiffItem isLeft title={"MEETINGS"} des="Vietnam is an increasingly attractive destination for business and corporate meetings due to its world-class accommodations, convenient transportation, and diverse array of side programs. Luxury Vietravel, as a highly successful service provider, has organized hundreds of large-scale and diverse meetings that have always met the needs of attendees and their accompanying spouses. Many multinational corporations have entrusted Luxury Vietravel to organize their annual events, attesting to the quality and reliability of the company's services. With a range of facilities and a professional team boasting extensive experience in the tourism industry, Luxury Vietravel can confidently offer high-quality products and services to organize groups of up to thousands of guests, ensuring complete satisfaction." img={Img1} />
                        <DiffItem title={"INCENTIVES"} des="Reward tours, ranging from 100 to thousands of guests, have become increasingly popular among companies and organizations for employee incentives, team building, and social events. As the demand for such tours continues to grow, businesses seek out professional and reputable travel agencies that can effectively convey their message and meet urgent needs.
Luxury Vietravel is well-equipped with experience and a professional coordination system, with 50% of their core staff having over 15 years of experience in the tourism industry. This allows them to confidently offer high-quality products and services and organize tour groups of any size to ensure customer satisfaction. Their loyal clientele includes multinational corporations, chain systems, and corporations from the Asia Pacific region. Trusting in Luxury Vietravel's expertise, businesses can successfully plan and execute rewarding and memorable tours for their employees." img={Img2} />
                        <DiffItem isLeft title={"CONFERENCES"} des="Organizing a large-scale conference with thousands of attendees can be a daunting task, especially for corporations. However, Luxury Vietravel has gained recognition for their ability to execute such events flawlessly. Their expertise in connecting with government agencies, influential figures, and public figures helps ensure the success of their clients' conferences. Luxury Vietravel's unique approach to designing and implementing facilities is aimed at achieving optimal comfort and convenience for attendees. When presented with a customer's desired vision, Luxury Vietravel proposes solutions and works collaboratively to bring that vision to life. With their experience and dedication, Luxury Vietravel is committed to delivering successful and memorable conferences for their clients." img={Img3} />
                        <DiffItem title={"EVENTS"} des="The possibilities for on-demand events are endless and can be truly unique and unforgettable experiences. For instance, imagine a luxurious and romantic party held in the largest cave in HaLong Bay, or an Asian art performance immersed in the main courtyard of the Temple of Literature. Luxury Vietravel has successfully organized such events and left a strong mark in the hearts of their partners. The team's creative approach involves a lot of brainstorming meetings, surveys, and script building to ensure the event's success. From bold ideas to workable concepts, Luxury Vietravel strives to deliver exceptional experiences to their clients." img={Img4} />
                    </div>

                    <div className={cx('main')}>
                        <TitleMice title={'WHAT ARE DIFFERENCE'} des={"MICE tourism is a rapidly growing segment in Vietnam's tourism industry, which differs from traditional leisure tourism. MICE events require a higher standard of facilities and generate more revenue for the local economy. Hosting international conferences and exhibitions can showcase Vietnam's world-class facilities and attract foreign investors and businesses, raising the country's profile in the global economy. MICE tourism plays a crucial role in promoting Vietnam as a destination for international business events."} />
                        <div className={cx('sectionDiffCase')}>
                            <div className={cx('item-card')}>
                                <BoxImageMice img={Img5} title="INNOVATIVE TEAM-BUIDLING" size={'45%'} />
                            </div>
                            <div className={cx('item-card')}>
                                <BoxImageMice img={Img6} title="DINNING & EVENT VENUES" size={'45%'} />
                            </div>
                            <div className={cx('item-card')}>
                                <BoxImageMice img={Img7} title="OUTSTANDING IDEA" size={'45%'} />
                            </div>
                            <div className={cx('item-card')}>
                                <BoxImageMice img={Img8} title="LOCAL TRANSPORT EXPERIENCES" size={'45%'} />
                            </div>
                        </div>

                        <TitleMice title={'CASE STUDIES'} des={"MICE tourism has boosted Vietnam's hospitality industry, sustainability efforts, and overall economic and social development. By attracting international events, stimulating local businesses, and promoting cultural heritage, Vietnam is well-positioned to become a leading MICE destination in Southeast Asia. Moreover, the emergence of luxury accommodations and dining options and the adoption of sustainable practices have further contributed to the growth of MICE tourism in Vietnam."} />
                        {listTour.data && <div className={cx('sectionDiffCase-2')}>
                            {listTour.data.Object.map((d, i) =>
                                <div className={cx('item-card-2')} key={i}>
                                    <BoxImageMice img={`https://vnxpedia.3i.com.vn${d.HightlightImg}`} id={d.TourCode} title={d.TourName} des={ChangeTextHTML(d.TourDescription)} size={'100%'} minWidth={'40rem'} />
                                </div>
                            )}
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