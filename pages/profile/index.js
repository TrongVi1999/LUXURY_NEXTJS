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
    console.log(currentUser);

    const editPicture = (data) => {
        var formdata = new FormData();
        formdata.append('UserName', currentUser.UserName);
        formdata.append('GivenName', currentUser.FullName);
        formdata.append('Gender', currentUser.Gender);
        formdata.append('Reason', currentUser.BirthDay);
        formdata.append('Description', currentUser.About);
        formdata.append('Note', currentUser.Address);
        formdata.append('PhoneNumber', currentUser.PhoneNumber);
        formdata.append('Email', currentUser.Email);
        formdata.append('image', data);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow',
        };

        fetch('https://vnxpedia.3i.com.vn/TravelAPI/UpdateInfo', requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCurrentUser({
                    ...currentUser,
                    Picture: JSON.parse(result).Object,
                });
                alert('Successfully changed avatar.');
                localStorage.setItem(
                    'VNXUser',
                    JSON.stringify({
                        ...currentUser,
                        Picture: JSON.parse(result).Object,
                    }),
                );
                // setUseredit({
                //     ...currentUser,
                //     Picture: JSON.parse(result).Object,
                // });
            })
            .catch(() => alert('Error!'));

        // setnew(!new1);
    };

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
                        <label htmlFor="file"><IoIosAdd className={cx('iconAdd')} /></label>
                        <input className={cx('input-Add')}
                            type="file"
                            id="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={(e) => editPicture(e.target.files[0])}
                        ></input>
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
