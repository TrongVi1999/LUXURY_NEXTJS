import classNames from "classnames/bind";
import style from './styleTransFer.module.scss'
import Image from "next/image";
const cx = classNames.bind(style)

function BoxCar({ img, name, className, key }) {
    return (<div key={key} className={cx('wrapperBoxCar', { [className]: className })}>
        <div className={cx('boxImg')}>
            <Image className={cx('img')} src={img.default.src} alt="carImgErr" layout="fill" />
        </div>
        <h3 className={cx('nameCar')}>{name}</h3>
    </div>);
}

export default BoxCar;