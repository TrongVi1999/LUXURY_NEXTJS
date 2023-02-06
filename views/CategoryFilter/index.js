import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import style from './filter.module.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

import { banners } from '@/public/images';
import { Input } from '@/components';
import { AiOutlineSearch } from 'react-icons/ai';
import Buttom from '@/components/Button';
const cx = classNames.bind(style);

const months = [`January`, 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function CategoryFilter({ isSearch, category, price, day, tourTags, recentPost, archives, banner, showFilterMobile = false, className }) {
    const [activeCategory, setActiveCategory] = useState(-1);
    const [activeTour, setActiveTour] = useState(-1);
    const [activeArchive, setActiveArchive] = useState(-1);

    const [valuePrice, setValuePrice] = useState(50);
    const [valueDay, setValueDay] = useState(50);

    const [listMonthArchives, setListMonthArchives] = useState([]);

    // active show filter mobile
    const [showFillter, setShowFillter] = useState(0)

    console.log('fil', showFillter)
    // console.log(listMonthArchives)

    const convertTimeString = () => {
        const listMonths = [];
        var key = 0;
        var today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();

        do {
            if (month < 0) {

                listMonths.push({ month: months[month + 12], year: year - 1 })
            } else {
                listMonths.push({ month: months[month], year: year })
            }
            month--;
            key++;
        } while (key < 5);

        return listMonths;
    }

    useEffect(() => {
        const listmonth = convertTimeString()
        if (listmonth.length > 0) {
            setListMonthArchives(listmonth)
        }
    }, [])

    const handelShowfillter = (index) => {
        if (showFillter === index) {
            setShowFillter(0)
        } else {
            setShowFillter(index)
        }
    }

    useEffect(() => {
        const showFilterMobilef = () => {
            if (showFillter !== 0) {
                setShowFillter(0)
            }
        }

        window.addEventListener('scroll', showFilterMobilef)

        return (() => {
            window.removeEventListener('scroll', showFilterMobilef)
        })
    }, [showFillter])

    const handelActiveItemCate = (index) => {
        setActiveCategory(index)
        setShowFillter(0)
    }

    const handelActiveItemTourTags = (index) => {
        setActiveTour(index)
        setShowFillter(0)
    }

    const clases = cx('wrapper', {
        [className]: className,
        active: showFilterMobile,
    });


    return (
        <div className={clases}>
            <div className={cx('boxFillterMobile')}>
                <Buttom className={cx('btnFilter', showFillter === 1 ? 'activeBtn' : null)} onClick={() => handelShowfillter(1)}>category <MdOutlineKeyboardArrowDown className={cx('icon')} /></Buttom>
                <Buttom className={cx('btnFilter', showFillter === 2 ? 'activeBtn' : null)} onClick={() => handelShowfillter(2)}>fillter by price <MdOutlineKeyboardArrowDown className={cx('icon')} /></Buttom>
                <Buttom className={cx('btnFilter', showFillter === 3 ? 'activeBtn' : null)} onClick={() => handelShowfillter(3)}>fillter by day <MdOutlineKeyboardArrowDown className={cx('icon')} /></Buttom>
                <Buttom className={cx('btnFilter', showFillter === 4 ? 'activeBtn' : null)} onClick={() => handelShowfillter(4)}>tour tags <MdOutlineKeyboardArrowDown className={cx('icon')} /></Buttom>
            </div>

            {
                isSearch ? (<Input type='text' className={cx('inputSearch')} classNameInput={cx('searchFilterInput')} rightIcon={<AiOutlineSearch className={cx('icon')} />} placeholder="search" />) : null
            }

            {category ? (
                <div className={cx('boxFillterItem', 'boxCategory', showFillter === 1 ? 'active' : null)}>
                    <h2 className={cx('title')}>{category.title}</h2>
                    {category.elements?.map((element, index) => (
                        <div
                            className={cx('itemCategory', 'itemMobileShow', activeCategory === index ? 'active' : null)}
                            key={index}
                            onClick={() => handelActiveItemCate(index)}
                        >
                            <span className={cx('itemName')}>{element.name}</span>
                            <span className={cx('itemAmount')}>{element.amount}</span>
                        </div>
                    ))}
                </div>
            ) : null}
            {price ? (
                <div className={cx('boxFillterItem', showFillter === 2 ? 'active' : null)}>
                    <h2 className={cx('title')}>filter by price</h2>
                    <div className={cx('itemMobileShow')}>
                        <div className={cx('box')}>
                            <span className={cx('text')}>$150</span>
                            <span className={cx('text')}>{`$${Math.floor((valuePrice * 3000) / 100)}`}</span>
                        </div>
                        <div className={cx('boxRange')}>
                            <input
                                className={cx('rangeFilter')}
                                type="range"
                                value={valuePrice}
                                min="0"
                                max="100"
                                onChange={(e) => setValuePrice(e.target.value)}
                            ></input>
                            <progress className={cx('rangeFilterColor')} min="0" max="100" value={valuePrice}></progress>
                        </div>
                    </div>
                </div>
            ) : null}
            {day ? (
                <div className={cx('boxFillterItem', showFillter === 3 ? 'active' : null)}>
                    <h2 className={cx('title')}>filter by Day</h2>
                    <div className={cx('itemMobileShow')}>
                        <div className={cx('box')}>
                            <span className={cx('text')}>1 Day</span>
                            <span className={cx('text')}>{`${Math.floor((valueDay * 25) / 100)} Day`}</span>
                        </div>
                        <div className={cx('boxRange', 'itemMobileShow')}>
                            <input
                                className={cx('rangeFilter')}
                                type="range"
                                value={valueDay}
                                min="0"
                                max="100"
                                onChange={(e) => setValueDay(e.target.value)}
                            ></input>
                            <progress className={cx('rangeFilterColor')} min="0" max="100" value={valueDay}></progress>
                        </div>

                    </div>
                </div>
            ) : null}
            {tourTags ? (
                <div className={cx('boxFillterItem', showFillter === 4 ? 'active' : null)}>
                    <h2 className={cx('title')}>{tourTags.title}</h2>
                    <div className={cx('boxTourFil', 'itemMobileShow')}>
                        {tourTags.elements?.map((element, index) => (
                            <span
                                className={cx('itemTourFil', activeTour === index ? 'active' : null)}
                                key={index}
                                onClick={() => handelActiveItemTourTags(index)}
                            >
                                {element}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}

            {
                recentPost ? (<div className={cx('boxFillterItem', 'boxRecent')}>
                    <h2 className={cx('title')}>{recentPost.title}</h2>
                    {
                        recentPost.elements.map((item, index) => (
                            <Link key={index} href='/' className={cx('recentItem', 'itemMobileShow')}>
                                <div className={cx('imgBox')}>
                                    <Image src={item.image} alt="errorImgPostRecent" className={cx('img')} />
                                </div>
                                <div className={cx('recentInfo')}>
                                    <p className={cx('titleRecentPost')}>{item.titlePost}</p>
                                    <p className={cx('timeRecent')}>{item.time}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>) : null
            }

            {
                archives ? (<div className={cx('boxFillterItem', 'boxArchives')}>
                    <h2 className={cx('title')}>archives</h2>
                    {
                        listMonthArchives.map((time, index) => (
                            <div className={cx('archivesItem', 'itemMobileShow', activeArchive === index ? 'active' : null)} onClick={() => setActiveArchive(index)} key={index}>
                                <span>{time.month}</span>
                                <span>{time.year}</span>
                            </div>
                        ))
                    }
                </div>) : null
            }

            {
                banner ? (<a className={cx('boxFillterItem', 'boxBanner')}>
                    <Image src={banners.bannerBlogListFilter} alt="bannerError" className={cx('bannerImg')} />
                    <div className={cx('content')}>
                        <span className={cx('number')}>299</span>
                        <p className={cx('text')}>look hot with style</p>
                    </div>
                </a>) : null
            }
        </div>
    );
}

export default CategoryFilter;
