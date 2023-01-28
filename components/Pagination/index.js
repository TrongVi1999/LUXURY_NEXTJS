import classNames from "classnames/bind";
import style from './pagination.module.scss';

const cx = classNames.bind(style)

function Pagination({ totalPosts, postPerPage, setPage, pageIndex }) {
    const pages = [];

    for (var i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }

    return (<div className={cx('wrapper')}>
        {
            pages.map(page => (
                <button key={page} onClick={() => setPage(page)} className={cx('button', page === pageIndex ? 'active' : null)}>{page}</button>
            ))
        }
    </div >);
}

export default Pagination;