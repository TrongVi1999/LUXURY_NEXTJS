import classNames from 'classnames/bind';
import style from '@/styles/mice.module.scss';

import { Section, Button } from '@/components';
import { BannerSlide } from '@/views';
import { banners } from '@/public/images';
import BannerIMG from '@/views/BannerSlide/BannerIMG';

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
                <DiffItem isLeft title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={banners.banner4} />
                <DiffItem title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={banners.banner4} />
                <DiffItem isLeft title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={banners.banner4} />
                <DiffItem title={"CONFERENCES"} des="Successfully organiga cerference with a scale of thousaner decle thoughtful and comfortable, perfecting the program strict perfectly-t has never been an easy thing for the people in charge of logic and oper ations mainly for colporations and corporations" img={banners.banner4} />
            </div>

            <Section className={cx('sectionDiff')}>
                <TitleMice title={'WHAT ARE DIFFERENCE'} des={"We research, and select unique and clasey values to put into MICE products Customers can experiance the most different values when they have faith and order with VNXPEDIA"} />
                <div className={cx('sectionDiffCase')}>
                    <BoxImageMice img={images.MICETest} title="INNOVATIVE TEAM-BUIDLING" size={'25%'} />
                    <BoxImageMice img={images.MICETest} title="INNOVATIVE TEAM-BUIDLING" size={'25%'} />
                    <BoxImageMice img={images.MICETest} title="INNOVATIVE TEAM-BUIDLING" size={'25%'} />
                    <BoxImageMice img={images.MICETest} title="INNOVATIVE TEAM-BUIDLING" size={'25%'} />
                </div>
            </Section>

            <Section className={cx('sectionDiff')}>
                <TitleMice title={'CASE STUDIES'} des={"We research and celegge and May we no out of products Cust"} />
                <div className={cx('sectionDiffCase')}>
                    <BoxImageMice img={images.MICETest} title="Night barbecue party in Mui Ne for 120 paxs" des={"Recreate the image of a barbecue party in the desert at the sand dunes of Phan Thiet"} size={'50%'} />
                    <BoxImageMice img={images.MICETest} title="A unique and luxurious wedding takes place on Phu Quoc beach" des={"With the request to organize a private and luxurious wedding space on Phu Quoc pearl beach it was perfectly fulfilled"} size={'50%'} />
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