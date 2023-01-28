import classNames from "classnames/bind";
import styles from './outTeam.module.scss';

import { Title, Section } from "@/components";
import { avatars } from "@/public/images";
import Item from "./Item";
const cx = classNames.bind(styles)

function OutTeam() {
    return (<div className={cx('wrapper')}>
        <Title text={"Out Team"} align={'center'} />
        <p className={cx('title')}>United by love & help to build great brands</p>
        <Section isWrap gapBox={7} maxWidth={970} className={cx('bodyItem')}>
            <Item avatar={avatars.avatar1} name='robert long' position='sale manager' />
            <Item avatar={avatars.avatar2} name='robert long' position='sale manager' />
            <Item avatar={avatars.avatar2} name='robert long' position='sale manager' />
            <Item name='robert long' position='sale manager' />
            <Item name='robert long' position='sale manager' />
            <Item name='robert long' position='sale manager' />
        </Section>
    </div>);
}

export default OutTeam;