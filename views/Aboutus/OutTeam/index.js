import classNames from "classnames/bind";
import styles from './outTeam.module.scss';
import avt from '@/public/avtT1.jpg';
import { Title, Section } from "@/components";
import { avatars } from "@/public/images";
import Item from "./Item";
const cx = classNames.bind(styles)

const ListTeam = [
    {
        Name: 'Mr.Tuan',
        Avatar: avt,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    },
    {
        Name: 'Sara',
        Avatar: avatars.avatar1,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    },
    {
        Name: 'Hanna',
        Avatar: avatars.avatar1,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    },
    {
        Name: 'Mr.Tuan',
        Avatar: avatars.avatar1,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    },
    {
        Name: 'Mr.Tuan',
        Avatar: avatars.avatar1,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    },
    {
        Name: 'Mr.Tuan',
        Avatar: avatars.avatar1,
        Position: 'Founder',
        Intro: `Mr. Tuan is one of the founders of a well-known travel company in Vietnam. He is a talented entrepreneur with a passion for exploring the culture, tourist destinations, cuisine, and traditions of his homeland. With over 10 years of experience in the tourism industry, Mr. Tuan has built a travel company with unique and quality tour programs that have attracted the attention of many tourists both locally and internationally.

        In addition to business, Mr. Tuan is also a positive contributor to the tourism community by organizing social activities and protecting the environment. With a sense of responsibility and professionalism in his work, Mr. Tuan has become one of the important and admired figures in the tourism industry in Vietnam.'`
    }
]

function OutTeam() {
    return (<div className={cx('wrapper')}>
        <Title text={"Out Team"} align={'center'} />
        <p className={cx('title')}>United by love & help to build great brands</p>
        <Section isWrap gapBox={7} maxWidth={970} className={cx('bodyItem')}>
            {ListTeam.map((d, i) =>
                <Item avatar={d.Avatar} name={d.Name} position={d.Position} intro={d.Intro} />
            )}
            {/* <Item avatar={avatars.avatar1} name='mr. tuan' position='founder' />
            <Item avatar={avatars.avatar2} name='jennifer rod' position={'co-founder'} />
            <Item avatar={avatars.avatar2} name='natasha singh' position='marketing head' />
            <Item name='robert long' position='sale manager' />
            <Item name='aaron smith' position='digital manager' />
            <Item name='cyril roy' position='operator' /> */}
        </Section>
    </div>);
}

export default OutTeam;