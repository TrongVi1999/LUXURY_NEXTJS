import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import { Title } from '@/components';
import { Comment, GetComment } from '@/pages/api/CallAPI';
import { InsertComment } from '@/pages/api/QuerryAPI';
import { useMutation } from '@tanstack/react-query';
import { useApppContext } from '@/pages/_app';

const cx = classNames.bind(style);


const WriteComment = ({ id, prid, repname, setrepid }) => {
    const [input, setinput] = useState('');


    const CT = useApppContext();

    // const CallAPI = async () => {
    //     const response = await Comment(id, prid ? `@${repname} ` + input : input, currentUser.FullName, prid);
    //     if (response.status == 200) {
    //         setloadcm();

    //     }

    // }
    const CreateComment = InsertComment(id, prid, CT.currentUser ? CT.currentUser.FullName : 'NoName', prid ? `@${repname} ` + input : input)


    const handleComment = () => {
        if (input != '') {

            CT.setreload(!CT.reload);
            CreateComment.refetch();
            // CallAPI();
            // const CreateComment = InsertComment(id, prid ? `@${repname} ` + input : input, currentUser.FullName, prid);
            setinput('');
            setrepid(null);
        }
    }


    return (
        <div className={cx('write-cm')}>
            <Title text='WRITE A POST' align='center' />
            {prid && <p> Reply comment of {repname}</p>}
            <textarea className={cx('textarea')} rows='10' onChange={(e) => setinput(e.target.value)} value={input}></textarea>
            <div className={cx('login-list')}>
                {/* <span>Login by</span> */}
            </div>
            <button className={cx('btn-add')} onClick={() => handleComment()}>ADD COMMENT</button>
        </div>
    )
}

export default WriteComment