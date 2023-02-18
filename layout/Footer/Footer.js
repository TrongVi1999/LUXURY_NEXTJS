import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './footer.module.scss';
import Logo from '../../public/logo-w-2.png';
import { GiPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import { TfiGoogle } from 'react-icons/tfi';
import Img1 from '../../public/logo6.png';
import Img2 from '../../public/logo5.png';
import Img3 from '../../public/logo4.png';
import Img4 from '../../public/logo3.png';
import Img5 from '../../public/logo2.png';
import Img6 from '../../public/logo1.png';
import Link from 'next/link';
import { Subcrise } from '@/pages/api/CallAPI';
import { useState, useEffect } from 'react';


const cx = classNames.bind(style);
const Listimg = [Img1, Img2, Img3, Img4, Img5, Img6];

function Footer() {
    const [email, setemail] = useState();
    const CallAPI = async () => {
        const response = await Subcrise(email);
        if (response.status == 200) {
            alert('Subcrise success !');
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('list-logo')}>
                    <Image src={Img1} className={cx('img')} alt="logo-prize-vnxpedia" width='200' height='200' />
                    <Image src={Img2} className={cx('img-logo')} alt="logo-prize-vnxpedia" width='200' height='200' />
                    <Image src={Img3} className={cx('img')} alt="logo-prize-vnxpedia" width='200' height='200' />
                    <Image src={Img4} className={cx('img')} alt="logo-prize-vnxpedia" width='200' height='200' />
                    <Image src={Img5} className={cx('img')} alt="logo-prize-vnxpedia" width='200' height='200' />
                    <Image src={Img6} className={cx('img-logo')} alt="logo-prize-vnxpedia" width='200' height='200' />
                </div>
                <hr className={cx('hr')} />
                <div className={cx('main')}>
                    <div className={cx('main-top')}>
                        <div className={cx('main-left')}>
                            <div className={cx('infor')}>
                                {/* <img src={Logo} className={cx("logo-img")} alt="logo-VNXpedia" /> */}
                                <Image src={Logo} className={cx('logo-img')} alt="logo-VNXpedia" />
                                <div className={cx('infor-bot')}>
                                    <div className={cx('phone')}>
                                        <GiPhone />
                                        <div>+84 901591111</div>
                                    </div>
                                    <div className={cx('email')}>
                                        <MdEmail />
                                        <div>info@luxuryvietravel.com</div>
                                    </div>
                                    <div className={cx('icon')}>
                                        <div className={cx('item-icon')}>
                                            <GrFacebookOption />
                                        </div>
                                        <div className={cx('item-icon')}>
                                            <TiSocialInstagram />
                                        </div>
                                        <div className={cx('item-icon')}>
                                            <BsTwitter />
                                        </div>
                                        <div className={cx('item-icon')}>
                                            <TfiGoogle />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('list-link')}>
                                <div className={cx('list')}>
                                    <div className={cx('title')}>OUR DESTINATIONS</div>
                                    <Link href='/destination/VietNam'>VietNam</Link>
                                    <Link href='/destination/VietNam'>Thailand</Link>
                                    <Link href='/destination/VietNam'>Cambodia</Link>
                                    <Link href='/destination/VietNam'>Laos</Link>
                                    <Link href='/destination/VietNam'>Myanmar</Link>
                                </div>
                                <div className={cx('list')}>
                                    <div className={cx('title')}>AS TOUR OPERATOR</div>
                                    <Link href='/about-us'>Why travel with us</Link>
                                    <Link href='/about-us#this' >Meat VNXpedia team</Link>

                                    <Link href='/responsible'>Responsible Travel</Link>
                                    <Link href='/payment/conditions'>Terms & Conditions</Link>
                                    <Link href='/payment/Deposit&Payment'>Deposit & Payment</Link>
                                    <Link href='/payment/policy'>Cancellation Policy</Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('about')}>
                            <div className={cx('title')}>ABOUT</div>
                            <p>
                                img elements must have an alt prop, either with meaningful text, or an empty string for
                                decorative img elements must have an alt prop, either with meaningful text
                            </p>
                            <div className={cx('new-letter')}>Newsletter Sign up</div>
                            <div className={cx('form-email')}>
                                <input type="text" placeholder="Your Email Address" onChange={(e) => setemail(e.target.value)} />
                                <button type="button" onClick={() => CallAPI()}>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <hr className={cx('hr')} />
                    <div className={cx('end')}>
                        <div className={cx('end-left')}>
                            <BiCopyright />
                            <div>Copyright 2019 VNXpedia</div>
                        </div>
                        <div>All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
