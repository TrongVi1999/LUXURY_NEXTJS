import style from '@/styles/responsible.module.scss';
import classNames from 'classnames/bind';
import anh1 from '@/public/anh1.png';
import anh2 from '@/public/anh2.png';
import anh3 from '@/public/anh3.png';
import anh4 from '@/public/anh4.png';
import anh5 from '@/public/anh5.png';
import anh6 from '@/public/anh6.png';
import anh7 from '@/public/anh7.png';
import Image from 'next/image';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Headpage from '@/components/Head/head';

const cx = classNames.bind(style);

const Responsible = () => {
    return (
        <div className={cx('container')}>
            <Headpage />
            <BannerIMG img={anh1} title='OUR FOCUS ON SUSTAINABILITY' bg='bg' />
            <div className={cx('text1')}>
                <p>At Black Tomato, we believe in the positive influence travel can have. Not just for individuals and their experiences but for the destinations that receive them and the world as a whole.
                    <br />
                    <br />
                    Travel has always helped fund local economies and in recent years, in particular, become increasingly adept at preserving the culture and supporting conservation of lands and protection of ecosystems. Travel creates empathy and understanding, can inspire and educate. It creates the human to human and human to nature connection that the world needs right now.</p>
            </div>
            <BannerIMG img={anh2} title='CARBON OFFSETTING' />
            <div className={cx('text2')}>
                <div className={cx('img')}>
                    <Image src={anh3} alt="img" />
                </div>
                <div className={cx('text')}>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br />
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <BannerIMG img={anh4} title='COMMUNITY IMPACT' />
            <div className={cx('image')}>
                <div className={cx('img1')}>
                    <Image src={anh5} alt="img-children" />
                </div>
                <div className={cx('img2')}>
                    <Image src={anh6} alt='img-person' />
                </div>
                <div className={cx('img3')}>
                    <Image src={anh7} alt='img-elephant' />
                </div>

            </div>
            <div className={cx('text1')}>
                <p>Our carefully selected partners around the globe support sustainable travel and actively work to improve the communities in which they operate – this includes supporting micro-economies in Cambodia, the protection of the endangered rhino population in Kenya, and supporting sustainable tourism in the Indian Subcontinent.  Please speak to us about your specific itinerary and destination so that we can share details of how you can offset your trip.
                    <br />
                    <br />
                    As the world becomes increasingly educated on the impact of our actions it is both our responsibility and focus to develop our corporate and client initiatives to ensure that we move to a future that is beyond sustainable.</p>
            </div>

        </div>
    )
}

export default Responsible