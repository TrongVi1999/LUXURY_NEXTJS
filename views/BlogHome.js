import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/bloghome.module.scss';
import { Title } from '@/components';
import Blogcard1 from './Blogcard1';
import IMG from '@/public/8.jpg';
import { Bloghot } from '@/pages/api/CallAPI';



const cx = classNames.bind(style);
// const Data = {
//     img: IMG,
//     title: 'Hạ Long - Kì quan thiên nhiên',
//     content:
//         "Ha Long Bay, in the Gulf of Tonkin, includes some 1,600 islands and islets, forming a spectacular seascape of limestone pillars. Because of their precipitous nature, most of the islands are uninhabited and unaffected by a human presence. The site's outstanding scenic beauty is complemented by its great biological interest.",
// };

const BlogHome = () => {
    const [Data, setdata] = useState();
    const CallAPI = async () => {
        const response = await Bloghot();
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }
    useEffect(() => {
        CallAPI();
    }, [])
    return (
        <div className={cx('container')}>
            <Title text="Blog Share" />
            {Data &&
                <div className={cx('grid-blog')}>
                    <div className={cx('grid1')}>
                        <div className={cx('card1')}>
                            <Blogcard1 Data={Data[0]} />
                        </div>
                        <div className={cx('card2')}>
                            <Blogcard1 Data={Data[1]} />
                        </div>
                    </div>
                    <div className={cx('grid2')}>
                        <div className={cx('card3')}>
                            <Blogcard1 Data={Data[2]} />
                        </div>
                        <div className={cx('card3')}>
                            <Blogcard1 Data={Data[3]} />
                        </div>
                        <div className={cx('card3')}>
                            <Blogcard1 Data={Data[4]} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default BlogHome;
