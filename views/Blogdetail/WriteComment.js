import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import { Title } from '@/components';
import { Comment, GetComment } from '@/pages/api/CallAPI';
import { InsertComment } from '@/pages/api/QuerryAPI';
import { useMutation } from '@tanstack/react-query';

const cx = classNames.bind(style);


const WriteComment = ({ id, prid, setloadcm, loadcm, repname, setrepid }) => {
    const [input, setinput] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    // const CallAPI = async () => {
    //     const response = await Comment(id, prid ? `@${repname} ` + input : input, currentUser.FullName, prid);
    //     if (response.status == 200) {
    //         setloadcm();

    //     }

    // }
    const CreateComment = useMutation((commentData) => InsertComment(...commentData),
        {
            onSuccess: () => {
                console.log('Comment submitted successfully!');
            },
            onError: (error) => {
                console.error('Error submitting comment:', error);
            },
        }
    );

    const handleComment = () => {
        if (input != '') {
            CreateComment.mutate([id, prid ? `@${repname} ` + input : input, currentUser.FullName, prid]);
            // CallAPI();
            // const CreateComment = InsertComment(id, prid ? `@${repname} ` + input : input, currentUser.FullName, prid);
            setinput('');
            setrepid();
        }
    }
    useEffect(() => {
        let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }

    }, [])

    return (
        <div className={cx('write-cm')}>
            <Title text='WRITE A POST' align='center' />
            {prid && <p> Reply comment of {repname}</p>}
            <textarea className={cx('textarea')} rows='10' onChange={(e) => setinput(e.target.value)} value={input}></textarea>
            <div className={cx('login-list')}>
                {/* <span>Login by</span> */}
            </div>
            <button className={cx('btn')} onClick={() => handleComment()}>ADD COMMENT</button>
        </div>
    )
}

export default WriteComment