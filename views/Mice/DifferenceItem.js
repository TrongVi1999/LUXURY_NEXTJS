import classNames from "classnames/bind";
import style from './miceView.module.scss'

import Image from "next/image";
const cx = classNames.bind(style)

function DiffItem({ img, title, des, isLeft }) {
    const clases = cx('DiffItemBody', {
        DiffItemBodyLeft: isLeft
    })

    return (<div className={clases}>
        <div className={cx('desBody')}>
            <h2 className={cx('title')}>{title}</h2>
            <p className={cx('des')}>{des}</p>
        </div>
        <div className={cx('boxImg')}>
            <Image src={img} alt='DiffImg' className={cx('img')} />
        </div>
    </div>);
}

export default DiffItem