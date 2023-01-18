import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './filter.module.scss';

const cx = classNames.bind(style);

function CategoryFilter({ category, price, day, tourTags, className }) {
    const [activeCategory, setActiveCategory] = useState(-1);
    const [activeTour, setActiveTour] = useState(-1);

    const [valuePrice, setValuePrice] = useState(50);
    const [valueDay, setValueDay] = useState(50);

    const clases = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={clases}>
            {category ? (
                <div className={cx('boxCategory')}>
                    <h2 className={cx('title')}>{category.title}</h2>
                    {category.elements?.map((element, index) => (
                        <div
                            className={cx('itemCategory', activeCategory === index ? 'active' : null)}
                            key={index}
                            onClick={() => setActiveCategory(index)}
                        >
                            <span className={cx('itemName')}>{element.name}</span>
                            <span className={cx('itemAmount')}>{element.amount}</span>
                        </div>
                    ))}
                </div>
            ) : null}
            {price ? (
                <div className={cx('boxPrice-Day')}>
                    <h2 className={cx('title')}>filter by price</h2>
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
            ) : null}
            {day ? (
                <div className={cx('boxPrice-Day')}>
                    <h2 className={cx('title')}>filter by Day</h2>
                    <div className={cx('box')}>
                        <span className={cx('text')}>1 Day</span>
                        <span className={cx('text')}>{`${Math.floor((valueDay * 25) / 100)} Day`}</span>
                    </div>
                    <div className={cx('boxRange')}>
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
            ) : null}
            {tourTags ? (
                <div className={cx('boxTourTags')}>
                    <h2 className={cx('title')}>{tourTags.title}</h2>
                    <div className={cx('boxTourFil')}>
                        {tourTags.elements?.map((element, index) => (
                            <span
                                className={cx('itemTourFil', activeTour === index ? 'active' : null)}
                                key={index}
                                onClick={() => setActiveTour(index)}
                            >
                                {element}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default CategoryFilter;
