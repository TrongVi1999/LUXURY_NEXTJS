import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from "next/router";

import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';

import IMGbn from '@/public/images/blogbn.png';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import GalleryIMG from '@/public/images/gallery.png';
import Image from 'next/image';


import { Author, Comments, WriteComment, Blogrecomment } from '@/views/Blogdetail';
// import TitleLine from '@/components/TitleLine';
// import { GetComment } from '../api/CallAPI';
import { Getblog, GetComment } from '../api/QuerryAPI';
import TitleLine from '@/components/TitleLine';
import Listtag from '@/views/Blogdetail/Listtag';
import Loading from '@/components/Loading';

const cx = classNames.bind(style);

const datafake = {
    banner: IMGbn,
    date: 'April 27, 2022',
    author: 'admin',
    type: 'Travel tip',
    title: 'THE unique moment in Danang',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. 
    Sed feugiat, tellus vel tristique posuere, diam`,
    galerry: GalleryIMG,
    hash_tag: ['Culinary', 'Da Nang', 'Couple tour'],
    comments: [{
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
}

const BlogDetail = () => {
    const router = useRouter();
    const [loadcm, setloadcm] = useState(false);
    const [repid, setrepid] = useState()
    const [repname, setrepname] = useState()
    const BlogDetail = Getblog(router.query.id);
    const Blogcomment = GetComment(router.query.id, loadcm)


    if (BlogDetail.isLoading) {
        return <Loading />;
    }

    if (BlogDetail.error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className={cx('container')}>

            {BlogDetail.data && <BannerIMG img={IMGbn} title={BlogDetail.data.Object[0].title.toUpperCase()} bg='bg' type={datafake.type} color='black' date={datafake.date} by={datafake.author} number={datafake.comments.length} />}

            (<div className={cx('main')} >



                <div className={cx('main-top')}>
                    <div className={cx('author')}>
                        <Author />
                    </div>

                    <div className={cx('content')} dangerouslySetInnerHTML={{ __html: BlogDetail.data.Object[0].full_text }}></div>
                </div>

                <div className={cx('main-bot')}>

                    <Listtag data={BlogDetail.data.Object[0].hash_tag} />

                </div>

                <div className={cx('comment-container')}>
                    {Blogcomment.data && <Comments Commentss={Blogcomment.data.Object} setrepid={setrepid} setrepname={setrepname} />}
                    <WriteComment id={router.query.id} prid={repid} loadcm={loadcm} repname={repname} setrepid={setrepid} refet={setloadcm} />
                </div>
            </div>)

            <Blogrecomment />
        </div >
    )
}

export default BlogDetail