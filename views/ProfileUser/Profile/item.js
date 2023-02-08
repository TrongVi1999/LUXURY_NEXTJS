import { useState } from "react";
import classNames from "classnames/bind";
import style from './profile.module.scss'

import { TfiPencilAlt } from "react-icons/tfi";

const cx = classNames.bind(style)

function ItemInput({ id, value, title, placeholder, disabled = false, setEdit, onChange, ...props }) {

    const [valueInput, setValueInput] = useState(value)

    return (<div className={cx('wrapperItem')}>
        <h3 className={cx('titleItem')}>{title}:</h3>
        <div className={cx('boxInput')}>
            <TfiPencilAlt className={cx('icon')} onClick={() => setEdit(id)} />
            <input className={cx('input')} placeholder={placeholder} value={valueInput} disabled={disabled} onChange={(e) => setValueInput(e.target.value)} {...props} />
        </div>
    </div>);
}

export default ItemInput;