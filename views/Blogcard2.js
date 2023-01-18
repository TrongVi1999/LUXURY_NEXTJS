import style from './Blogcard2.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import blogcard2 from '../public/blogcard2.png'
import icon from '../public/icon.png'
import icon1 from '../public/icon/1.png'
import icon2 from '../public/icon/2.png'
import icon3 from '../public/icon/3.png'
import icon4 from '../public/icon/4.png'

const cx = classNames.bind(style);

const Blogcard2 = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('blog')}>
                <div className={cx('img')}>
                    <Image src={blogcard2} />
                </div>
                <div className={cx('icon')}>
                    <Image src={icon} />
                </div>
                <div className={cx('title')}>
                    <h2>The Unique Charm in Phong Nha</h2>
                </div>
                <hr className={cx('hr')} />
                <div className={cx('icon2')}>
                    <Image src={icon1} />  <span>By Admin</span>
                    <Image src={icon2} /> <span>Aplil 27,2019</span>
                    <Image src={icon3} /> <span>05</span>
                    <Image src={icon4} /> <span>Viet Nam</span>
                </div>
                <div className={cx('text')}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat dui at lacus aliquet, a consequat enim aliquet. Integer molestie sit amet sem et faucibus. Nunc ornare pharetra dui, vitae auctor orci fringilla eget. Pellentesque in placerat felis. Etiam mollis venenatis luctus. Morbi ac scelerisque maurisdunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc faucibus imperdiet vulputate.

                        Morbi volutpat leo iaculis elit vehicula, eu convallis magna finibus. Suspendisse tristique ullamcorper erat a elementum. Cras eget elit non nunc aliquam ullamcorper quis sed metus. Lorem ipsum dolor sit amet</p>
                </div>
                <div className={cx('readmore')}>
                    <button>READ MORE</button>
                </div>
            </div>
            <div className={cx('cate')}>
                Hoàng Văn Trường
            </div>
        </div>

    )
}

export default Blogcard2;