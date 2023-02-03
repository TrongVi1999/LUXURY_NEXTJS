import classNames from "classnames/bind";
import style from './profile.module.scss'

import ItemInput from "./item";
import { useState } from "react";
const cx = classNames.bind(style);

const fakedata = {
    name: 'Nora Tsunoda',
    Gender: 'fermale',
    Birthday: '21.06.1998',
    Address: '160 minh khia, ha noi',
    phone: '0983548866',
    email: 'NoraTsunoda@gmail.com',
    about: 'asdas',
}

function InfoUser() {
    const [isEdit, setIsEdit] = useState(-1)

    return (<div className={cx('wrapper')}>
        <h1 className={cx('title')}>profile infomation</h1>
        <ItemInput title={'name'} value={fakedata.name} disabled={isEdit === 0} id={0} setEdit={setIsEdit} />
        <ItemInput title={'gender'} value={fakedata.Gender} disabled={isEdit === 1} id={1} setEdit={setIsEdit} />
        <ItemInput title={'birthday'} value={fakedata.Birthday} disabled={isEdit === 2} id={2} setEdit={setIsEdit} />
        <ItemInput title={'address'} value={fakedata.Address} disabled={isEdit === 3} id={3} setEdit={setIsEdit} />
        <ItemInput title={'phone'} value={fakedata.phone} disabled={isEdit === 4} id={4} setEdit={setIsEdit} />
        <ItemInput title={'email'} value={fakedata.email} disabled={isEdit === 5} id={5} setEdit={setIsEdit} />
        <div className={cx('boxAboutInput')}>
            <h3 className={cx('titleItem')}>about:</h3>

            <textarea className={cx('input')} id="w3review" name="w3review" rows="4" cols="50" value={fakedata.about} />
        </div>
    </div>);
}

export default InfoUser;