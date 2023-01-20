import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import ChangeTextHTML from '@/hook/ChangetextHTML';

const cx = classNames.bind(style);

const Itinerary = ({ description, detail }) => {
    const [content, setcontent] = useState(['active', '', '']);
    console.log(detail[0].Title.split(':')[0]);

    return (
        <div className={cx('iti-container')}>
            <div className={cx('iti-menu')}>
                <p onClick={() => setcontent(['active', '', ''])} className={cx(content[0])}>ITINERARY</p>
                <p onClick={() => setcontent(['', 'active', ''])} className={cx(content[1])}>PRICE & POLICY</p>
                <p onClick={() => setcontent(['', '', 'active'])} className={cx(content[2])}>TERM & CONDITIONS</p>
            </div>
            <div className={cx('iti-main')}>
                <p className={cx('tour-description')}>
                    {ChangeTextHTML(description)}
                </p>
                <div className={cx('tour-detail')}>
                    <p className={cx('title-detail')}>
                        DETAIL ITINERARY
                    </p>
                    <div className={cx('list-detail')}>
                        <div className={cx('space')}></div>
                        {detail.map((d, i) =>
                            <div className={cx('item-day')} key={i}>
                                <div className={cx('number-day')}>{d.Title.split(':')[0]}</div>
                                <div className={cx('main-day')}>
                                    <p className={cx('title-day')}>{d.Title.split(':')[1]}</p>
                                    <p className={cx('text-day')} dangerouslySetInnerHTML={{
                                        __html: d.Description,
                                    }}></p>
                                    {d.Image && <img src={`https://vnxpedia.3i.com.vn${d.Image}`} alt="tour Image" />}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary