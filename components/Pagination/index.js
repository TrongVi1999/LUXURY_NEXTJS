import classNames from "classnames/bind";

import style from './pagination.module.scss';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const cx = classNames.bind(style)

function Pagination({ totalPosts, postPerPage, setPage, pageIndex }) {

    let pages = []


    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (<div className={cx('wrapper')}>
        <Link href='#list' disabled={pageIndex === 1} className={cx('buttonIcon', pageIndex === 1 ? 'dis' : null)} onClick={() => setPage(prev => prev - 1)}>
            <MdKeyboardArrowLeft />
        </Link>

        {
            pages.map((index) => (
                <Link href='#list' key={index} className={cx('button', pageIndex === index ? 'active' : null)} onClick={() => setPage(index)}>{index}</Link>
            ))
        }

        <Link href='#list' disabled={pageIndex === pages.length} className={cx('buttonIcon', pageIndex === pages.length ? 'dis' : null)} onClick={() => setPage(prev => prev + 1)}>
            <MdKeyboardArrowRight />
        </Link>
    </div>);
}

export default Pagination;