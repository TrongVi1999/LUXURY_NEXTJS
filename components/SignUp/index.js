import classNames from 'classnames/bind';

import style from './signup.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

const cx = classNames.bind(style);

const Signup = ({ Click }) => {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('sign-up')}>
                <div className={cx('icon')} onClick={() => Click(false)}>
                    <IoMdArrowRoundBack />
                </div>
                <form className={cx('form-signup')} id="form-1">

                    <h3 className={cx('heading')}>Create new Account</h3>
                    <p className={cx('desc')}>Hi My Friends</p>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>User name</label>

                        <input type="text" placeholder='example: Nguyen A' />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Full name</label>

                        <input type="text" placeholder='example: Nguyen A' />
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Email</label>

                        <input type="email" placeholder='example: NguyenA@gmail.com' />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Phone</label>

                        <input type="text" placeholder='example: 0123456789' />
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Password</label>

                        <input type="password" placeholder='example : Password' />
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Password Again</label>

                        <input type="password" placeholder='example : Re-entered Password' />
                    </div>


                    <div className={cx('form-group')}>
                        < label for="gender" className={cx('label-form')}>
                            Sex
                        </label >
                        <div className={cx('form-sex')}>
                            < div className={
                                cx('sex')}>
                                <label className={
                                    cx('sex-m')} for="">
                                    Male
                                </label>
                                <input
                                    name="gender"
                                    type="radio"
                                    value="Male"
                                    className={cx('form-control')}
                                // {...register('Gender', { required: true })}
                                />
                            </div >
                            <div className={cx('sex')}>
                                < label className={
                                    cx('sex-m')} for=''>
                                    Female
                                </label >
                                <input
                                    name="gender"
                                    type="radio"
                                    value="Female"
                                    className={cx('form-control')}
                                // {...register('Gender', { required: true })}
                                />
                            </div >
                        </div >
                        {/* {errors.Gender && errors.Gender.type === 'required' && (
                            <span className={cx('error-message">Gender cannot be empty !</span>
                        )} */}
                    </div >
                    {/* <SignUpGG /> */}
                    < button className={
                        cx('form-submit')} type="submit">
                        Sign Up
                    </button>
                    <div className={cx('link-nav')}>
                        <Link href="/Login" className={
                            cx('go-home')}>
                            Had a Account? Login now
                        </Link >
                        <Link href="/" className={cx('go-home')} onClick={() => Click(false)}>
                            Go to home page
                        </Link >
                    </div >
                </form >
            </div >

        </div >
    )
}

export default Signup