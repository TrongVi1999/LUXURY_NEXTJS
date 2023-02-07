import React from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import Link from 'next/link';
import qs from "qs";
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa';
import style from './login.module.scss';
const cx = classNames.bind(style);
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../Toast';

const Login = ({ Click, setuser, close }) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const callApi = async (data) => {
        const response = await axios({
            method: "post",
            url: "https://vnxpedia.3i.com.vn/TravelAPI/LoginXpedia",
            data: qs.stringify({
                UserName: data.Username,
                Password: data.Pass,
            }),
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        });
        console.log(response);
        return response;
    };

    const handleLogin = async (data) => {
        try {
            const datas = await callApi(data);

            if (datas.data.Error === true) {
                toastError(`${datas.data.Title}`);
            }
            if (datas?.data?.Error === false) {
                toastSuccess('Login success!');
                localStorage.setItem("VNXUser", JSON.stringify(datas));
                setTimeout(() => {
                    setuser(`${datas.data?.Title}`)
                    close(false);
                }, 2000)
            }
        } catch (error) {
            toastError(`${error.message}`);
        }

    };


    return (
        <div className={cx('container')}>
            <form action="" onSubmit={handleSubmit(handleLogin)} >
                <label>USER NAME</label>
                <br />
                <input type="text" id='username'  {...register("Username", { required: true })} />
                {errors.Username &&
                    errors.Username.type === "required" && (
                        <span className={cx('error-message')}>
                            Username cannot be empty !
                            <br />
                        </span>

                    )}
                <br />
                <label>PASSWORD</label>
                <br />
                <input type="password" className={cx('input')} id='password'  {...register("Pass", { required: true })} />
                {errors.Pass && errors.Pass.type === "required" && (
                    <span className={cx('error-message')}>
                        Password cannot be empty !
                    </span>
                )}
                <br />

                <button type="submit">LOGIN</button>
                <a href=''>Forgot Password ?</a>

                <hr />
                <br />
                <span>Don&rsquo;t have account yet?</span>
                <br />
                <div className={cx('group')}>
                    <button onClick={() => Click(true)}>SIGN UP</button>
                    <button className={cx('fb')}><FaFacebook />LOGIN</button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div >


    )
}

export default Login