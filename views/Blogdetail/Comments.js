import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Comment from './Comment';
import { Title } from '@/components';

const cx = classNames.bind(style);

const data = [{
    img: '',
    name: 'NGUYEN TRONG PHU',
    date: 'Januery 23, 2015  -  10:30 am',
    comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
},
{
    img: '',
    name: 'NGUYEN TRONG PHU',
    date: 'Januery 23, 2015  -  10:30 am',
    comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
    reply: [
        {
            img: '',
            name: 'NGUYEN TRONG PHU',
            date: 'Januery 23, 2015  -  10:30 am',
            comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
        }
    ]
},
{
    img: '',
    name: 'NGUYEN TRONG PHU',
    date: 'Januery 23, 2015  -  10:30 am',
    comment: 'Lorem ipsu m dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem or et faucibus. Nunc  et faucibus. Nuncnare pharin placetis luctus. Morbi ac scelerisque madales a nulla ornare viverra. ',
}
]


const Comments = () => {
    return (
        <div className={cx('comments')}>
            <Title text='COMMENTS' align='center' />
            {data.map((d, i) => (
                <div className={cx('comment-item')}>
                    <Comment data={d} />
                    {d.reply && d.reply.map((a, index) =>
                    (
                        <div className={cx('comment-reply')}>
                            <Comment data={a} />
                        </div>
                    )
                    )}
                </div>
            )

            )}

        </div>
    )
}

export default Comments