import classNames from "classnames/bind";
import style from './miceView.module.scss'

import Image from "next/image";
const cx = classNames.bind(style)

function BoxImageMice({ title, des, img, size, minWidth }) {
    return (<div className={cx('boxImageMice')} style={{ width: size, minWidth: minWidth }}>
        <div className={cx('boxImg')}>
            <Image src={img} alt='boxImageError' className={cx('img')} />
        </div>
        <div className={cx('boxDes')}>
            <h3 className={cx('title', des ? 'titleDes' : null)}>{title}</h3>
            {
                des &&
                <p className={cx('desBoxImg')}>{des}</p>
            }
        </div>
    </div>);
}

export default BoxImageMice;