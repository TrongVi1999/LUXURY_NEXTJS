import classNames from 'classnames/bind';
import style from '@/styles/blogList.module.scss';

// import { CategoryFilter } from '@/views';
import BannerIMG from '@/views/BannerSlide/BannerIMG';

import { Section } from '@/components';
import { banners } from '@/public/images';
import { BlogCard2, CategoryFilter } from '@/views';
import { categoryFillerAddress, tourTagsFilter, recentPostFake } from '@/public/dataRender';


const cx = classNames.bind(style)

// import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

function BlogList() {
    return (<div className={cx('wrapper')}>
        <BannerIMG className={cx('bannerBlogList')} img={banners.banner2} title='OUR FOCUS ON SUSTAINABILITY' bg='bg' />

        <Section className={cx('bodyContent')} gapBox={1}>
            <div className={cx('listBlogBody')}>
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />
                <BlogCard2 className={cx('bodyBlogItem')} />

            </div>
            <CategoryFilter
                isSearch
                // price
                // day
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