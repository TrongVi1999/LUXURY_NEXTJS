import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from '@/styles/profile.module.scss'
import { avatars } from "@/public/images";
import { Button, Section } from "@/components";
import { BookingUser, ProfileUser } from "@/views/ProfileUser";
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
const cx = classNames.bind(style);

function Profile() {
    const [activeProfile, setActiveProfile] = useState(1);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }
    }, []);

    return (<Section notPadding className={cx('wrapper')} >
        <div className={cx('body')}>
            {currentUser &&
                <div className={cx('boxOption')}>
                    <div className={cx('boxAvatar')}>
                        <div className={cx('boxAvatar-div')}>
                            {currentUser.Picture ? <Image src={`https://vnxpedia.3i.com.vn${currentUser.Picture}`}
                                alt='Avatar'
                                className={cx('avatar')}
                                width="2000"
                                height='2000'
                            // layout='fill'

                            // loader={<div>Loading...</div>}
                            /> :
                                <Image src={avatars.avatar1} alt="avatarErro" className={cx('avatar')} />}

                        </div>
                        <IoIosAdd className={cx('iconAdd')} />
                    </div>
                    <h2 className={cx('name')}>{currentUser.FullName}</h2>
                    <div className={cx('boxItemPage')}>
                        <Button className={cx('itemPage', activeProfile === 1 ? 'active' : null)} onClick={() => setActiveProfile(1)}>profile</Button>
                        <Button className={cx('itemPage', activeProfile === 2 ? 'active' : null)} onClick={() => setActiveProfile(2)}>notifications</Button>
                        <Button className={cx('itemPage', activeProfile === 3 ? 'active' : null)} onClick={() => setActiveProfile(3)}>booking list</Button>
                    </div>
                </div>
            }
            {currentUser &&
                <div className={cx('content')}>
                    {
                        activeProfile === 1 ?
                            <ProfileUser data={currentUser} /> :
                            activeProfile === 3 ?
                                <BookingUser /> : null
                    }
                </div>
            }
        </div>
    </Section>);
}

export default Profile;
