// import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/casestudy.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { banners } from '@/public/images';
import HighImg from '@/public/images/banner/Layer17.png';
import HighImg1 from '@/public/images/banner/Layer28.png';
import Image from 'next/image';
import { GoPrimitiveDot } from 'react-icons/go'
import { TiTick } from 'react-icons/ti'
import { TiDeleteOutline } from 'react-icons/ti'


const cx = classNames.bind(style);

const index = () => {
    return (
        <div className={cx('container')}>
            <BannerIMG className={cx('bannerCaseStudy')} img={banners.banner2} title='vnxpedia blog list' bg='bg' crumb={{ title: 'BLOG' }} />
            <div className={cx('formHighlight')}>
                <Image src={HighImg} className={cx('image')}></Image>
                <div className={cx('highlight')}>
                    <h3>Tour Highlight</h3>
                    <div className={cx('auto')}>
                        <GoPrimitiveDot /><p>Yes, we did a great job :</p>
                    </div>
                    <div className={cx('auto')}>
                        <GoPrimitiveDot /> <p>Held at a private beach in Phu Quoc with an extremely unique and impressive design
                            by talented conceptual designers of VNXPEDIA.</p>
                    </div>
                    <div className={cx('auto')}>
                        <GoPrimitiveDot /> <p>The entire decoration system is prepared in a luxurious style on a white background with the
                            participation of guests to create a very beautiful and solemn scene.</p>
                    </div>
                    <div className={cx('auto')}>
                        <GoPrimitiveDot /> <p>ALL relatives and friends are invited to come and be welcomed, prepared to attend the wedding
                            ceremony thoughtfully and completely.</p>
                    </div>
                    <div className={cx('auto')}>
                        <GoPrimitiveDot /> <p>Venue:  Phu Quoc
                            <br />Organizer: VNXPEDIA
                        </p>
                    </div>
                </div>

            </div>
            <div className={cx('InforTour')}>
                <div className={cx('Inforimg')}>
                    <Image src={HighImg1} className={cx('image1')}></Image>
                </div>
                <div className={cx('textTour')}>
                    <div className={cx('formTour')}>
                        <h3>Tour Inclusions :</h3>
                        <div className={cx('Item')}>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /><p>Food for 150 pax</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /><p>Drink</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /><p>Table and chair</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /> <p>Decoration</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /> <p>Service proesional staff</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiTick id={cx('icon')} /> <p>Cleaning service</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('formTour')}>
                        <h3>Tour Exclusions :</h3>
                        <div className={cx('Item')}>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /><p>Food not in menu</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /><p>Wine and Alcoho</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /><p>Tip money for staff</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /> <p>Lorem ipsum dolor</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /> <p>Lorem ipsum dolor</p>
                            </div>
                            <div className={cx('flexItem')}>
                                <TiDeleteOutline id={cx('icon1')} /> <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('textBook')}>
                        <h3>Let me us know your dream trip for your company! </h3>
                        <div><p>Book Now</p></div>
                    </div>
                    <div className={cx('inline')}>
                    </div>
                    <div className={cx('navbarItem')}>
                        <p>PRIVATE wedding</p>
                        <p>Phu Quoc</p>
                        <p>Luxury</p>
                        <div className={cx('icon')}>
                            <p>share</p>
                            <p>a</p>
                            <p>a</p>
                            <p>a</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index