import React, { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import { GetSocial } from '@/pages/api/QuerryAPI';
import ReactToPrint from 'react-to-print';
import { GrDocumentPdf } from 'react-icons/gr';
import Image from 'next/image';
import Imglist from './Imglist';
import Highlight from './Highlight';

const cx = classNames.bind(style);

const Itinerary = ({ data, click, btn }) => {
    const [content, setcontent] = useState(['active', '', '']);
    const componentRef = useRef(null);
    const [Data, setData] = useState(5262);

    const dataContent = GetSocial(Data);



    return (
        <div className={cx('iti-container')}>
            <div className={cx('iti-menu')}>
                <p onClick={() => setcontent(['active', '', ''])} className={cx(content[0])}>ITINERARY</p>
                {btn && <p onClick={() => { setcontent(['', 'active', '']); setData(5262) }} className={cx(content[1])}>PRICE & POLICY</p>}
                {btn && <p onClick={() => { setcontent(['', '', 'active']); setData(6320) }} className={cx(content[2])}>TERM & CONDITIONS</p>}
            </div>
            {content[0] == 'active' &&
                <div className={cx('iti-main')}>
                    <p className={cx('tour-description')}>
                        {ChangeTextHTML(data.TourDescription)}
                    </p>
                    <div className={cx('tour-detail')}>
                        <p className={cx('title-detail')}>
                            DETAIL ITINERARY
                        </p>
                        <div className={cx('list-detail')}>
                            <div className={cx('space')}></div>
                            {data.DETAIL.map((d, i) =>
                                <div className={cx('item-day')} key={i}>
                                    <div className={cx('number-day')}>{d.Title.split(':')[0]}</div>
                                    <div className={cx('main-day')}>
                                        <p className={cx('title-day')}>{d.Title.split(':')[1]}</p>
                                        <p className={cx('text-day')} dangerouslySetInnerHTML={{
                                            __html: (d.Description).replace(/Hanoi/g, '<a href=\"https://www.luxuryvietravel.com/destination/VietNamdestination=Hanoi\" title=\"destination - Ha Noi\">Ha Noi</a>'),
                                        }}></p>
                                        {d.Image && <Image src={`https://vnxpedia.3i.com.vn${d.Image}`} alt="tour Image" width='1000' height='1000' />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {btn && <p>If you want to design your own tour for your trip to be unique, dont hesitate to share it with us!</p>}
                    {btn &&
                        <div className={cx('print')}>
                            <div>
                                <button className={cx('btn-design')} onClick={() => click(1)}>DESIGN YOUR TOUR</button>
                            </div>
                            <div>
                                <button className={cx('btn-design')} onClick={() => click(2)}>SHARE WITH FRIEND</button>
                            </div>

                            <ReactToPrint
                                trigger={() => <button className={cx('btn-design')}><GrDocumentPdf /> PRINT TO PDF</button>}
                                content={() => componentRef.current}
                            />
                        </div>
                    }
                </div>
            }
            {content[0] !== 'active' && dataContent.data &&
                <div className={cx('iti-main-social')} dangerouslySetInnerHTML={{ __html: dataContent.data.Object[0].full_text }}>

                </div>
            }

            {/* Form pdf */}
            <div className={cx('pdf')}>
                <div className={cx('main-infor1')} ref={el => (componentRef.current = el)}>
                    <div className={cx('crumb-cost')}>
                        <h3> {data.TourName} </h3>
                        <div className={cx('cost')}>
                            <sup>From</sup>
                            <p>${data.PRICE[0].price}</p>
                            <span>/PAX</span>
                        </div>
                    </div>

                    <Imglist data={[`https://vnxpedia.3i.com.vn${data.HightlightImg}`, `https://vnxpedia.3i.com.vn${data.HightlightImg1}`, `https://vnxpedia.3i.com.vn${data.HightlightImg2}`, `https://vnxpedia.3i.com.vn${data.HightlightImg3}`]} />
                    <Highlight title={data.TourName} destination={data.Destination} long={data.DETAIL.length} highlight={data.Hightlight} cla='name1' cla2='highlight2' />
                    <div className={cx('iti-menu')}>
                        <p onClick={() => setcontent(['active', '', ''])} className={cx(content[0])}>ITINERARY</p>

                    </div>

                    <div className={cx('iti-main')}>
                        <p className={cx('tour-description')}>
                            {ChangeTextHTML(data.TourDescription)}
                        </p>
                        <div className={cx('tour-detail')}>
                            <p className={cx('title-detail')}>
                                DETAIL ITINERARY
                            </p>
                            <div className={cx('list-detail')}>
                                <div className={cx('space')}></div>
                                {data.DETAIL.map((d, i) =>
                                    <div className={cx('item-day')} key={i}>
                                        <div className={cx('number-day')}>{d.Title.split(':')[0]}</div>
                                        <div className={cx('main-day')}>
                                            <p className={cx('title-day')}>{d.Title.split(':')[1]}</p>
                                            <p className={cx('text-day')} dangerouslySetInnerHTML={{
                                                __html: d.Description,
                                            }}></p>
                                            {d.Image && <Image src={`https://vnxpedia.3i.com.vn${d.Image}`} alt="tour Image" width='1000' height='1000' />}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Itinerary