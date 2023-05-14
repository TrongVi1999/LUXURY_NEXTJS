import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/public/images/bnn4.jpg'
import img2 from '@/public/images/bnn5.jpg'
import img3 from '@/public/images/bnn6.jpg'
import img4 from '@/public/images/bnn7.jpg'
import img5 from '@/public/images/bnn8.jpg'

const listdes = [
    {
        img: img1,
        title: 'VIETNAM',
        intro: `Welcome to Vietnam, a country rich in history, culture, and natural beauty. From the bustling streets of Hanoi to the peaceful rice paddies of Sapa, Vietnam offers travelers a truly unique experience. You can explore the stunning landscapes of Halong Bay, the Mekong Delta, or the beaches of Nha Trang. Immerse yourself in the local culture and try traditional Vietnamese cuisine like pho, banh mi, and fresh spring rolls. Visit historic sites such as the Imperial City of Hue or the Cu Chi Tunnels, a reminder of the country's tumultuous past. With friendly locals, vibrant cities, and breathtaking scenery, Vietnam is a must-visit destination for any traveler seeking adventure, culture, and natural beauty.`
    },
    {
        img: img2,
        title: 'THAILAND',
        intro: `Thailand, a land of stunning natural beauty, ancient temples, and vibrant street life. Known as the "Land of Smiles," Thailand offers travelers a warm welcome and a range of experiences that are sure to captivate your senses. Whether you want to explore the bustling city streets of Bangkok, relax on the pristine beaches of Phuket, or hike through the lush forests of Chiang Mai, Thailand has something for everyone. Discover the country's rich cultural heritage by visiting historic temples such as Wat Phra Kaew and Wat Arun, or sample the world-renowned cuisine, including delicious street food like pad Thai and mango sticky rice.`
    },
    {
        img: img3,
        title: 'LAOS',
        intro: `Laos, a country of stunning natural beauty, rich cultural heritage, and warm hospitality. Often referred to as the "Land of a Million Elephants," Laos offers travelers a peaceful escape from the hustle and bustle of modern life. Explore the charming streets of Luang Prabang, a UNESCO World Heritage Site known for its well-preserved colonial architecture and traditional Buddhist temples. Take a boat ride down the Mekong River, which flows through the heart of the country and provides a unique perspective on local life.`
    },
    {
        img: img4,
        title: 'MYANMAR',
        intro: `Laos, a country of stunning natural beauty, rich cultural heritage, and warm hospitality. Often referred to as the "Land of a Million Elephants," Laos offers travelers a peaceful escape from the hustle and bustle of modern life. Explore the charming streets of Luang Prabang, a UNESCO World Heritage Site known for its well-preserved colonial architecture and traditional Buddhist temples. Take a boat ride down the Mekong River, which flows through the heart of the country and provides a unique perspective on local life.`
    },
    {
        img: img5,
        title: 'CAMBODIA',
        intro: `Laos, a country of stunning natural beauty, rich cultural heritage, and warm hospitality. Often referred to as the "Land of a Million Elephants," Laos offers travelers a peaceful escape from the hustle and bustle of modern life. Explore the charming streets of Luang Prabang, a UNESCO World Heritage Site known for its well-preserved colonial architecture and traditional Buddhist temples. Take a boat ride down the Mekong River, which flows through the heart of the country and provides a unique perspective on local life.`
    }

]

const cx = classNames.bind(style);

const index = () => {
    return (
        <div className={cx('des-container')}>
            {/* <div className={cx('crumb')}>Home / Destination</div> */}
            <div className={cx('list-des')}>
                <div className={cx('col1')}>
                    <DesItem data={listdes[0]} hey='full' />
                </div>
                <div className={cx('col2')}>
                    <DesItem data={listdes[1]} hey='big' />
                    <DesItem data={listdes[2]} hey='small' />
                </div>
                <div className={cx('col3')}>
                    <DesItem data={listdes[3]} hey='normal' />
                    <DesItem data={listdes[4]} hey='normal' />
                </div>
            </div>
        </div>
    )
}

export default index

const DesItem = ({ data, hey }) => {
    return (
        <Link href='/destination/vn' className={cx('des-item', hey)}>
            <Image src={data.img} alt='destination' />
            <div className={cx('des-text')}>
                <h2>{data.title}</h2>
                <p>{data.intro}</p>
            </div>
        </Link>
    )
}

