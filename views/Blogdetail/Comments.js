import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Comment from './Comment';
import { Title } from '@/components';
import { Comment1 } from '@/pages/api/CallAPI';

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



const Comments = () => {
    const [data, setData] = useState()
    const CallAPI = async () => {
        const response = await (Comment1(id, prid, cm, user));
        if (response.status === 200) {
            setData(response.data);
        }
        console.log(response)
    }
    useEffect(() => {
        CallAPI();
    }, [id, prid, cm, user]);
    // console.log(Localist);

    return (
        <div className={cx('comments')}>
            {/* <Title text='COMMENTS' align='center' />
            {data &&
                // (data.map((d, i) => (
                <div className={cx('comment-item')}>
                   
                    < (data.map((d, i) => (Comment data={d} />
                    {d.reply && d.reply.map((a, index) =>
                    (
                        <div className={cx('comment-reply')}>
                            <Comment data={a} />
                        </div>
                    )
                    )}
                    )))
                </div>



            } */}
            aaa
        </div>
    )
}

export default Comments