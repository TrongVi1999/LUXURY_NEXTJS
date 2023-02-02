import classNames from "classnames/bind";

import style from './pagination.module.scss';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const cx = classNames.bind(style)

function Pagination({ totalPosts, postPerPage, setPage, pageIndex }) {

    let pages = []


    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (<div className={cx('wrapper')}>
        <button disabled={pageIndex === 1} className={cx('buttonIcon', pageIndex === 1 ? 'dis' : null)} onClick={() => setPage(prev => prev - 1)}>
            <MdKeyboardArrowLeft />
        </button>

        {
            pages.map((index) => (
                <button key={index} className={cx('button', pageIndex === index ? 'active' : null)} onClick={() => setPage(index)}>{index}</button>
            ))
        }

        <button disabled={pageIndex === pages.length} className={cx('buttonIcon', pageIndex === pages.length ? 'dis' : null)} onClick={() => setPage(prev => prev + 1)}>
            <MdKeyboardArrowRight />
        </button>
    </div>);
}

export default Pagination;