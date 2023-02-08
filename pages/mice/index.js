import classNames from 'classnames/bind';
import style from '@/styles/mice.module.scss';

import { Section, Button } from '@/components';
import { BannerSlide } from '@/views';
import { banners } from '@/public/images';
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

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';
import { images } from '@/public/images';
import { TitleMice, DiffItem, BoxImageMice } from '@/views/Mice';

const cx = classNames.bind(style);

function Mice() {
    return (
        <div className={cx('wrapper')}>
            <BannerIMG className={cx('bannerBody')} bg='bg' title={"mice"} img={banners.banner4} />

            <div className={cx('sectionDiff')}>
                <TitleMice title={'we have difference from the rest'} des={"MICE hes been a tight spot in Vietnams tous business during the last ten your sending several encouraging signals In an informal serien Vopedia has had activities and produced monique product in trdochina since to years ago when Vietnam was quite navel on the international tounem man"} />
                <DiffItem isLeft title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={Img1} />
                <DiffItem title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={Img2} />
                <DiffItem isLeft title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={Img3} />
                <DiffItem title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={Img4} />
            </div>

            <Section className={cx('sectionDiff')}>
                <TitleMice title={'WHAT ARE DIFFERENCE'} des={"We research, and select unique and clasey values to put into MICE products Customers can experiance the most different values when they have faith and order with VNXPEDIA"} />
                <div className={cx('sectionDiffCase')}>
                    <BoxImageMice img={Img5} title="INNOVATIVE TEAM-BUIDLING" size={'23%'} />
                    <BoxImageMice img={Img6} title="INNOVATIVE TEAM-BUIDLING" size={'23%'} />
                    <BoxImageMice img={Img7} title="INNOVATIVE TEAM-BUIDLING" size={'23%'} />
                    <BoxImageMice img={Img8} title="INNOVATIVE TEAM-BUIDLING" size={'23%'} />
                </div>
            </Section>

            <Section className={cx('sectionDiff')}>
                <TitleMice title={'CASE STUDIES'} des={"We research and celegge and May we no out of products Cust"} />
                <div className={cx('sectionDiffCase')}>
                    <BoxImageMice img={Img9} title="Night barbecue party in Mui Ne for 120 paxs" des={"Recreate the image of a barbecue party in the desert at the sand dunes of Phan Thiet"} size={'48%'} minWidth={'40rem'} />
                    <BoxImageMice img={Img10} title="A unique and luxurious wedding takes place on Phu Quoc beach" des={"With the request to organize a private and luxurious wedding space on Phu Quoc pearl beach it was perfectly fulfilled"} size={'48%'} minWidth={'40rem'} />
                </div>
            </Section>

            <div className={cx('btnBoxContact')}>
                <p className={cx('text')}>Let us accompany you to make the experice end trips of your dreams and your loved ones and colleagues!</p>
                <Button to={'/'} className={cx('btn')}>
                    Contact us now
                </Button>
            </div>

        </div>
    );
}

export default Mice;