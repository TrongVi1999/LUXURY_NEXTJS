import classNames from "classnames/bind";
import { TiTick } from 'react-icons/ti';
import { Vortex } from 'react-loader-spinner';
import style from './Loading.module.scss';
import Logo from '@/public/images/icons/logo.png';
import Image from "next/image";


const cx = classNames.bind(style);

const Loading = () => {
    return (
        <div className={cx('container')}>
            <div>
                <Image src={Logo} width='130' height='130' alt='icon-luxurytravel' />
                {/* <Vortex
                    visible={true}
                    height="130"
                    width="130"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                /> */}
            </div>

            <span>Loading <span className={cx('dot')}>...</span></span>
            {/* <TiTick /> */}
        </div>
    )
}

export default Loading