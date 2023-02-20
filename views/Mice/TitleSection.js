import classNames from "classnames/bind";
import style from './miceView.module.scss'

const cx = classNames.bind(style)

function TitleSection({ title, des }) {
    return (<div className={cx('titleBody')}>
        <h2 className={cx('title')}>{title}</h2>
        <p className={cx('des')}>{des}</p>
    </div>);
}

export default TitleSection;