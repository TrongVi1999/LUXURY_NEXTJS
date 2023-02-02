import classNames from 'classnames/bind';
import Input from '../Input';
import style from './login.module.scss';
import { FaFacebook } from 'react-icons/fa';
const cx = classNames.bind(style);

const Login = ({ Click }) => {

    return (
        <div className={cx('container')}>
            <form action="" method="post" onClick={(e) => e.preventDefault()}>
                <label>USER NAME</label>
                <br />
                <input type="text" />
                <br />
                <label>PASSWORD</label>
                <br />
                <input type="password" className={cx('input')} />
                <br />

                <button type="submit">LOGIN</button>
                <a href=''>Forgot Password ?</a>

                <hr />
                <br />
                <span>Don&rsquo;t have account yet?</span>
                <br />
                <div className={cx('group')}>
                    <button type="submit" onClick={() => Click(true)}>SIGN UP</button>
                    <button type="submit" className={cx('fb')}><FaFacebook />LOGIN</button>
                </div>
            </form>
        </div>


    )
}

export default Login