import classNames from 'classnames/bind';
import style from '@/styles/blogList.module.scss';
// import { CategoryFilter } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { Section, Pagination, Button } from '@/components';
import { banners } from '@/public/images';
import { BlogCard2, CategoryFilter } from '@/views';
import { categoryFillerAddress, tourTagsFilter, recentPostFake } from '@/public/dataRender';
import { useState, useEffect } from 'react';
import { GetAllblog, Getbloghot, Searchblog } from '../api/QuerryAPI';
import Loading from '@/components/Loading';
import Headpage from '@/components/Head/head';

const cx = classNames.bind(style)

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';



function BlogList() {
    const [showFilterMobile, setShowFilterMobile] = useState(false);
    const [Tag, settag] = useState('Blog');
    const [keyword, setkeyword] = useState('');
    const [page, setPage] = useState(1)
    const Databloghot = Getbloghot();
    const listBlog = GetAllblog(Tag, keyword, page);
    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;


    useEffect(() => {
        const showFilterMobilef = () => {
            if (showFilterMobile) {

                setShowFilterMobile(false)
            }
        }

        window.addEventListener('scroll', showFilterMobilef)

        return (() => {
            window.removeEventListener('scroll', showFilterMobilef)
        })
    }, [showFilterMobile])


    return (
        <div className={cx('wrapper')}>
            <Headpage />
            <BannerIMG className={cx('bannerBlogList')} img={banners.banner2} title='vnxpedia blog list' bg='bg' crumb={{ title: 'BLOG' }} />
            <div id='list'></div>

            <div className={cx('bodyContent')} gapBox={1}>
                <div className={cx('listBlog-main')}>
                    {listBlog.data &&
                        <div className={cx('listBlogBody')}>
                            <span className={cx('bodyPage')}>Showing {(page - 1) * 10 + 1} - {(page - 1) * 10 + listBlog.data.Object.length} of {listBlog.data.Title} products</span>
                            {listBlog.data.Object.map((d) =>
                                <BlogCard2 className={cx('bodyBlogItem')} data={d} />)
                            }
                            <Pagination totalPosts={listBlog.data.Title} postPerPage={10} setPage={setPage} pageIndex={page} />

                        </div>
                    }
                    {listBlog.isLoading && <Loading />}
                </div>

                {Databloghot.data &&
                    <CategoryFilter
                        isSearch
                        category={categoryFillerAddress}
                        recentPost={recentPostFake}
                        banner
                        tourTags={tourTagsFilter}
                        className={cx('boxFilter')}
                        showFilterMobile={showFilterMobile}
                        setvldestination={settag}
                        setvltag={settag}
                        setinput={setkeyword}
                        blog
                        hotblog={Databloghot.data.Object}
                    />
                }
            </div>
        </div>);
}

export default BlogList;