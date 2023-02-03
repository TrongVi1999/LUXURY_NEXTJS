import { useState } from "react";
import classNames from "classnames/bind";
import style from '@/styles/profile.module.scss'

import Image from "next/image";
import { avatars } from "@/public/images";
import { Button, Section } from "@/components";
import { BookingUser, ProfileUser } from "@/views/ProfileUser";

import { IoIosAdd } from "react-icons/io";
const cx = classNames.bind(style);

function Profile() {
    const [activeProfile, setActiveProfile] = useState(1)

    return (<Section notPadding className={cx('wrapper')} >
        <div className={cx('body')}>
            <div className={cx('boxOption')}>
                <div className={cx('boxAvatar')}>
                    <Image src={avatars.avatar1} alt="avatarErro" className={cx('avatar')} />
                    <IoIosAdd className={cx('iconAdd')} />
                </div>
                <h2 className={cx('name')}>Nora tsunoda</h2>
                <div className={cx('boxItemPage')}>
                    <Button className={cx('itemPage', activeProfile === 1 ? 'active' : null)} onClick={() => setActiveProfile(1)}>profile</Button>
                    <Button className={cx('itemPage', activeProfile === 2 ? 'active' : null)} onClick={() => setActiveProfile(2)}>notifications</Button>
                    <Button className={cx('itemPage', activeProfile === 3 ? 'active' : null)} onClick={() => setActiveProfile(3)}>booking list</Button>
                </div>
            </div>

            <div className={cx('content')}>
                {
                    activeProfile === 1 ?
                        <ProfileUser /> :
                        activeProfile === 3 ?
                            <BookingUser /> : null
                }
            </div>

        </div>
    </Section>);
}

export default Profile;