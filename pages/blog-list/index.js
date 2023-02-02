import classNames from 'classnames/bind';
import style from '@/styles/blogList.module.scss';
import { useState } from 'react';

// import { CategoryFilter } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';

import { Section, Pagination } from '@/components';
import { banners } from '@/public/images';
import { BlogCard2, CategoryFilter } from '@/views';
import { categoryFillerAddress, tourTagsFilter, recentPostFake } from '@/public/dataRender';


const cx = classNames.bind(style)

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function BlogList() {
    const [page, setPage] = useState(1)

    const lastIndex = page * 4;
    const firstIndex = lastIndex - 4;

    return (<div className={cx('wrapper')}>
        <BannerIMG className={cx('bannerBlogList')} img={banners.banner2} title='vnxpedia blog list' bg='bg' crumb={{ title: 'BLOG' }} />

        <Section className={cx('bodyContent')} gapBox={1}>
            <div className={cx('listBlogBody')}>
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />

                <Pagination totalPosts={datafa.length} postPerPage={4} setPage={setPage} pageIndex={page} />

            </div>
            <CategoryFilter
                isSearch
                category={categoryFillerAddress}
                recentPost={recentPostFake}
                archives
                banner
                tourTags={tourTagsFilter}
                className={cx('boxFilter')}
            />
        </Section>
    </div>);
}

export default BlogList;