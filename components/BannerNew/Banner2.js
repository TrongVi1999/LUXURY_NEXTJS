import classNames from 'classnames/bind';
import style from './style.module.scss';
import Link from 'next/link';
import bnimg from '@/public/images/bnn0.jpg';
import Image from 'next/image';

const cx = classNames.bind(style);


const Banner2 = () => {
    return (
        <div className={cx('banner2')}>
            <div className={cx('banner2-img')}>
                <Image src={bnimg} alt='banner' />
                <h2>Wellcome to <br /> Vietnam</h2>
            </div>
            <p>
                Discover the staggering beauty of this majestic country with a tailor-made Vietnam tour! From the calm to the chaotic and the ancient to the innovative, Vietnam is a veritable melting pot of unique experiences. Whether you’re hoping to take in ancient temples, vibrant cities or sublime natural beauty, a tailor-made Vietnam tour will provide it all. From travellers on a budget to once-in-a-lifetime adventure seekers with cash to splash, a Discova Tour can be designed to suit.
            </p>

        </div>
    )
}

export default Banner2