import classNames from 'classnames/bind';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { IoMdArrowRoundBack } from 'react-icons/io';
import style from './signup.module.scss';

import axios from 'axios';
import qs from 'qs';
import { toast } from "react-toastify";

const cx = classNames.bind(style);

const Signup = ({ Click }) => {
    const callApi = async (data) => {
        const response = await axios({
            method: 'post',
            url: 'https://vnxpedia.3i.com.vn/TravelAPI/InsertAccount',
            data: qs.stringify({
                UserName: data.UserName,
                Password: data.Password,
                GivenName: data.GivenName,
                Email: data.Email,
                PhoneNumber: data.PhoneNumber,
                Gender: data.Gender,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },

        });
        console.log(response);
        (response.data.Error === false) ? alert('Đăng Kí Thành Công!') : alert('Đăng Kí Không Thành Công!');
        return response;


    };
    const toastSuccess = (text) => {
        return toast.success(`${text}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const toastError = (text) => {
        return toast.error(`${text}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const toastWarning = (text) => {
        return toast.warning(`${text}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        try {
            const datas = callApi(data);

            if (datas.data.Error === true) {
                toastError(`${datas.data.Title}`);
            }
            if (datas?.data?.Error === false) {
                toastSuccess(`${datas.data?.Title}`);
                setTimeout(() => <Link href={'/'} />, 2000);
            }
        } catch (error) {
            toastError(`${error.message}`);
        }
        console.log(data);
    };

    return (
        <div className={cx('wrapper')}>

            <div className={cx('sign-up')}>
                <div className={cx('icon')} onClick={() => Click(false)}>
                    <IoMdArrowRoundBack />
                </div>
                <form className={cx('form-signup')} onSubmit={handleSubmit(onSubmit)} id="form-1">

                    <h3 className={cx('heading')}>Create new Account</h3>
                    <p className={cx('desc')}>Hi My Friends</p>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>User name</label>

                        <input id="username"
                            name="username"
                            type="text"
                            placeholder="example: Nguyen A"
                            {...register('UserName', { required: true })} />
                        {errors.UserName && errors.UserName.type === 'required' && (
                            <span className={cx('error-message')}>Username cannot be empty !</span>
                        )}
                        <span className="form-message"></span>
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Full name</label>

                        <input type="text" id="fullname"
                            name="fullname"
                            placeholder="example: Nguyen A"
                            {...register('GivenName', { required: true })} />
                        {errors.GivenName && errors.GivenName.type === 'required' && (
                            <span className={cx('error-message')}>Fullname cannot be empty !</span>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Email</label>

                        <input id="mail"
                            name="mail"
                            type="text"
                            placeholder="example: NguyenA@gmail.com"
                            {...register('Email', {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                },
                            })} />
                        {errors.Email && errors.Email.type === 'required' && (
                            <span className={cx('error-message')}>Email cannot be empty !</span>
                        )}
                        {errors.Email && errors.Email.type === 'pattern' && (
                            <span className={cx('error-message')}>Invalid email</span>
                        )}
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Phone</label>

                        <input id="phone"
                            name="phone"
                            type="phone"
                            placeholder="example: 0123456789"
                            {...register('PhoneNumber', {
                                required: true,
                                maxLength: 15,
                                minLength: 9,
                                valueAsNumber: false,
                            })} />
                        {errors.PhoneNumber && errors.PhoneNumber.type === 'required' && (
                            <span className={cx('error-message')}>Phone number cannot be empty !</span>
                        )}
                        {errors.PhoneNumber && errors.PhoneNumber.type === 'maxLength' && (
                            <span className={cx('error-message')}>Invalid phone number</span>
                        )}
                        {errors.PhoneNumber && errors.PhoneNumber.type === 'minLength' && (
                            <span className={cx('error-message')}>Invalid phone number</span>
                        )}
                    </div>
                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Password</label>

                        <input id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="on"
                            {...register('Password', {
                                required: true,
                                minLength: 6,
                                maxLength: 30,
                            })} />
                        {errors.Password && errors.Password.type === 'required' && (
                            <span className={cx('error-message')}>Password cannot be empty !</span>
                        )}
                        {errors.Password && errors.Password.type === 'minLength' && (
                            <span className={cx('error-message')}>Weak password</span>
                        )}
                        {errors.Password && errors.Password.type === 'maxLength' && (
                            <span className={cx('error-message')}>Password up to 30 characters</span>
                        )}
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label-form')}>Password Again</label>

                        <input id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="Re-entered password"
                            autoComplete="on"
                            {...register('Passwordagain', {
                                required: true,
                                validate: (val) => {
                                    if (watch('Password') != val) {
                                        return 'Your passwords do no match';
                                    }
                                },
                            })} />
                        {errors.Passwordagain && errors.Passwordagain.type === 'required' && (
                            <span className={cx('error-message')}>Password again is required</span>
                        )}
                        {errors.Passwordagain && errors.Passwordagain.type === 'validate' && (
                            <span className={cx('error-message')}>re-entered password does not match</span>
                        )}
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
                                    {...register('Gender', { required: true })}
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
                                    {...register('Gender', { required: true })}
                                />
                            </div >
                        </div >
                        {errors.Gender && errors.Gender.type === 'required' && (
                            <span className={cx('error-message')}>Gender cannot be empty !</span>
                        )}
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