import classNames from 'classnames/bind';
import style from '@/styles/blogList.module.scss';
// import { CategoryFilter } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import { Section, Pagination, Button } from '@/components';
import { banners } from '@/public/images';
import { BlogCard2, CategoryFilter } from '@/views';
import { categoryFillerAddress, tourTagsFilter, recentPostFake } from '@/public/dataRender';
import { Allblog, Bloghot } from '../api/CallAPI';
import { useState, useEffect } from 'react';
import { GetAllblog, Getbloghot, Searchblog } from '../api/QuerryAPI';
import Loading from '@/components/Loading';


const cx = classNames.bind(style)

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function BlogList() {
    const [showFilterMobile, setShowFilterMobile] = useState(false);
    const [Tag, settag] = useState('Blog');
    const [keyword, setkeyword] = useState('');
    const [count, setcount] = useState(0);
    const [page, setPage] = useState(1)
    const Databloghot = Getbloghot();
    const Datalistblog = GetAllblog(Tag, page);
    const Datarender = Datalistblog.data
    const Datasearch = Searchblog(keyword);
    const [actsearch, setactsearch] = useState(false);

    const [Data, setdata] = useState();

    // const CallSearch = async () => {
    //     const response = await (Searchblog(keyword));
    //     if (response.status == 200) {
    //         setdata(response.data);
    //         setcount(response.data.Object.length)
    //     }
    //     console.log('k', keyword)
    // }
    const handleSearch = () => {
        { keyword == '' ? setactsearch(false) : setactsearch(true) }

    }



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

    if (Datalistblog.isLoading) return <Loading />
    return (
        <div className={cx('wrapper')}>
            <BannerIMG className={cx('bannerBlogList')} img={banners.banner2} title='vnxpedia blog list' bg='bg' crumb={{ title: 'BLOG' }} />
            {/* btn Show filterMenu Mobile */}
            {/* <Button className={cx('btnFill')} onClick={() => setShowFilterMobile(!showFilterMobile)}>Filter By</Button> */}
            <div id='list'></div>

            <div className={cx('bodyContent')} gapBox={1}>
                {actsearch && <div className={cx('listBlogBody')}>
                    {/* <span className={cx('bodyPage')}>Showing {(page - 1) * 10 + 1} - {(page - 1) * 10 + 'Datasearch.data.Object.length'} of {'Datasearch.data.Object.length'} products</span> */}
                    {Datasearch.data.Object.slice(firstIndex, lastIndex).map((d) =>
                        <BlogCard2 className={cx('bodyBlogItem')} data={d} />)
                    }
                    <Pagination totalPosts={Datasearch.data.Object.length} postPerPage={10} setPage={setPage} pageIndex={page} />

                </div>

                }
                {Datarender && !actsearch &&
                    <div className={cx('listBlogBody')}>
                        <span className={cx('bodyPage')}>Showing {(page - 1) * 10 + 1} - {(page - 1) * 10 + Datarender.Object.length} of {Datarender.Title} products</span>
                        {Datarender.Object.map((d) =>
                            <BlogCard2 className={cx('bodyBlogItem')} data={d} />)
                        }
                        <Pagination totalPosts={Datarender.Title} postPerPage={10} setPage={setPage} pageIndex={page} />

                    </div>
                }
                {Databloghot.data &&
                    <CategoryFilter
                        isSearch
                        category={categoryFillerAddress}
                        recentPost={recentPostFake}
                        // archives
                        banner
                        tourTags={tourTagsFilter}
                        className={cx('boxFilter')}
                        showFilterMobile={showFilterMobile}
                        setvldestination={settag}
                        setvltag={settag}
                        setinput={setkeyword}
                        searchinput={handleSearch}
                        blog
                        hotblog={Databloghot.data.Object}
                    />
                }
            </div>
        </div>);
}

export default BlogList;