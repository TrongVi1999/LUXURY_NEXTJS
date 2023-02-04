import axios from 'axios';
import classNames from 'classnames/bind';
import Link from 'next/link';
// import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa';
import { toast } from "react-toastify";
import style from './login.module.scss';
const cx = classNames.bind(style);

const Login = ({ Click, setuser, close }) => {
    // const navigate = useNavigate();
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
        (response.data.Error === false) ? alert('Đăng Nhập Thành Công!') : alert('Đăng Nhập Không Thành Công!');


        if (response.data.Error === true) {
            toastError("Error!");
        } else {
            toastSuccess("Login success.");
            localStorage.setItem("VNXUser", JSON.stringify(response.data));
            setuser(response.data);
            close(false);
        }
    };

    const handleLogin = (data) => {
        callApi(data);
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
        </div >


    )
}

export default Login