import classNames from 'classnames/bind';
import Input from '../Input';
import style from './login.module.scss';

const cx = classNames.bind(style);

const Login = () => {
    return (
        <div className={cx('container')}>
            <form action="" method="post">
                <label>USER NAME</label>
                <br />
                <input type="text" />
                <br />
                <label>PASSWORD</label>
                <br />
                <input type="password" className={cx('input')} />
                <br />
                <a href=''>Forgot Password ?</a>
                <br />
                <button type="submit">LOGIN</button>
            </form>
        </div>


    )
}

export default Login