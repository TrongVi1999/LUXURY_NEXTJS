import { useState } from "react";
import classNames from "classnames/bind";
import style from '@/styles/profile.module.scss'
import { avatars } from "@/public/images";
import { Button, Section } from "@/components";
import { BookingUser, ProfileUser } from "@/views/ProfileUser";
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import { useApppContext } from "../_app";
import Headpage from '@/components/Head/head';

const cx = classNames.bind(style);

function Profile() {
    const [activeProfile, setActiveProfile] = useState(1);
    const [reloadBook, setreload] = useState(false);

    const CT = useApppContext();


    const editPicture = (data) => {
        var formdata = new FormData();
        formdata.append('UserName', CT.currentUser.UserName);
        formdata.append('GivenName', CT.currentUser.FullName);
        formdata.append('Gender', CT.currentUser.Gender);
        formdata.append('Reason', CT.currentUser.BirthDay);
        formdata.append('Description', CT.currentUser.About);
        formdata.append('Note', CT.currentUser.Address);
        formdata.append('PhoneNumber', CT.currentUser.PhoneNumber);
        formdata.append('Email', CT.currentUser.Email);
        formdata.append('image', data);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        fetch('https://vnxpedia.3i.com.vn/TravelAPI/UpdateInfo', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                CT.setCurrentUser({
                    ...CT.currentUser,
                    Picture: JSON.parse(result).Object,
                });
                alert('Successfully changed avatar.');
                localStorage.setItem(
                    'VNXUser',
                    JSON.stringify({
                        ...CT.currentUser,
                        Picture: JSON.parse(result).Object,
                    }),
                );
            })
            .catch(() => alert('Error!'));
    };

    return (<Section notPadding className={cx('wrapper')} >
        <Headpage />
        <div className={cx('body')}>
            {CT.currentUser &&
                <div className={cx('boxOption')}>
                    <div className={cx('boxAvatar')}>
                        <div className={cx('boxAvatar-div')}>
                            {CT.currentUser.Picture ? <Image src={`https://vnxpedia.3i.com.vn${CT.currentUser.Picture}`}
                                alt='Avatar'
                                className={cx('avatar')}
                                width="2000"
                                height='2000'
                            /> :
                                <Image src={avatars.avatar3} alt="avatarErro" className={cx('avatar')} />}

                        </div>
                        <label htmlFor="file"><IoIosAdd className={cx('iconAdd')} /></label>
                        <input className={cx('input-Add')}
                            type="file"
                            id="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={(e) => editPicture(e.target.files[0])}
                        ></input>
                    </div>
                    <h2 className={cx('name')}>{CT.currentUser.FullName}</h2>
                    <div className={cx('boxItemPage')}>
                        <Button className={cx('itemPage', activeProfile === 1 ? 'active' : null)} onClick={() => setActiveProfile(1)}>profile</Button>
                        <Button className={cx('itemPage', activeProfile === 2 ? 'active' : null)} onClick={() => setActiveProfile(2)}>notifications</Button>
                        <Button className={cx('itemPage', activeProfile === 3 ? 'active' : null)} onClick={() => setActiveProfile(3)}>booking list</Button>
                    </div>
                </div>
            }
            {CT.currentUser &&
                <div className={cx('content')}>
                    {
                        activeProfile === 1 ?
                            <ProfileUser data={CT.currentUser} setuser={CT.setCurrentUser} /> :
                            activeProfile === 3 ?
                                <div>
                                    {CT.currentUser && <BookingUser user={CT.currentUser.UserName} reload={reloadBook} setreload={setreload} />}
                                </div> : null
                    }
                </div>
            }
        </div>
    </Section>);
}

export default Profile;
