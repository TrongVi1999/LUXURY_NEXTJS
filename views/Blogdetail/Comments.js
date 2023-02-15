import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Comment from './Comment';
import { Title } from '@/components';
import { Comment1 } from '@/pages/api/CallAPI';
import { GetComment } from '@/pages/api/CallAPI';

const cx = classNames.bind(style);

// const data = [{
//     img: '',
//     name: 'NGUYEN TRONG PHU',
//     date: 'Januery 23, 2015  -  10:30 am',
//     comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
// },
// {
//     img: '',
//     name: 'NGUYEN TRONG PHU',
//     date: 'Januery 23, 2015  -  10:30 am',
//     comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
//     reply: [
//         {
//             img: '',
//             name: 'NGUYEN TRONG PHU',
//             date: 'Januery 23, 2015  -  10:30 am',
//             comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
//         }
//     ]
// },
// {
//     img: '',
//     name: 'NGUYEN TRONG PHU',
//     date: 'Januery 23, 2015  -  10:30 am',
//     comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
// }
// ]



const Comments = ({ Commentss, setrepid, setrepname }) => {


    // const CallComment = async (id) => {
    //     const response = await GetComment(id);
    //     if (response.status === 200) {
    //         setcomment(response.data.Object);
    //     }
    // }
    // useEffect(() => {
    //     CallComment(id)
    // }, []);


    return (
        <div className={cx('comments')}>
            <Title text='COMMENTS' align='center' />
            {Commentss &&

                <div className={cx('comment-item')}>

                    {Commentss.map((d, i) => <div><Comment data={d} setrepid={setrepid} setrepname={setrepname} id={d.ID} />
                        {d.CommentChild.length > 0 && d.CommentChild.map(
                            a =>
                                <div className={cx('comment-reply')}>
                                    <Comment data={a} setrepid={setrepid} setrepname={setrepname} id={d.ID} />
                                </div>
                        )}
                    </div>)}

                </div>



            }

        </div>
    )
}

export default Comments