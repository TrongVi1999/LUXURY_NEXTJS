import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/public/images/bnn4.jpg'
import img2 from '@/public/images/bnn5.jpg'
import img3 from '@/public/images/bnn6.jpg'
import img4 from '@/public/images/bnn7.jpg'
import img5 from '@/public/images/bnn8.jpg'
import img6 from '@/public/images/logo-tour.webp';
import { GoPrimitiveDot } from 'react-icons/go'

const cx = classNames.bind(style);

const tour = {
    title: 'Vietnam Highlights: Pearl of Indochina',
    day: 10,
    price: 3000,
    local: 'Hanoi, Halong Bay, Danang, Hoi An, Hue, Ho Chi Minh City',
    highlight: [
        'Embark on an overnight Halong Bay cruise on a traditional junk boat.',
        'Private guided tours of Hanoi and Ho Chi Minh City including Cu Chi Tunnels.',
        'Explore the imperial ruins and Perfume River of Hue.',
        'Featuring expertly selected hotels.'
    ],
    detail: [
        {
            img: img1,
            title: 'The Adventure Begins',
            local: 'HANOI',
            text: [
                'Welcome to Vietnam! Please note: Your travel documents contain a Visa-on-Arrival letter (unless otherwise arranged). Please ensure to pack this in your carry-on luggage. Your Visa-on-Arrival letter must be presented to Customs upon entry into the country. ',
                `Upon arrival to Hanoi's Noi Bai International Airport you will be welcomed by a hostess holding a sign with your name on it. This hostess will guide you through fast-track security services and, after you obtain a stamp for your Visa and have collected your luggage, will lead the way to your awaiting guide and vehicle.`,
                `You will be privately transferred between your accommodations and Hanoi Airport by a professional driver and an English-speaking guide.`
            ],
            hotel: 'Silk Path Hotel Hanoi'
        },
        {
            img: img2,
            title: 'See the Signature Sights in Style',
            local: 'HANOI',
            text: [
                'Welcome to Vietnam! Please note: Your travel documents contain a Visa-on-Arrival letter (unless otherwise arranged). Please ensure to pack this in your carry-on luggage. Your Visa-on-Arrival letter must be presented to Customs upon entry into the country. ',
                `Upon arrival to Hanoi's Noi Bai International Airport you will be welcomed by a hostess holding a sign with your name on it. This hostess will guide you through fast-track security services and, after you obtain a stamp for your Visa and have collected your luggage, will lead the way to your awaiting guide and vehicle.`,
                `You will be privately transferred between your accommodations and Hanoi Airport by a professional driver and an English-speaking guide.`,
                `Hanoi enjoys a rich Imperial history dating back over a millennium, and a surprising diversity of local ethnic groups weave the fabric of the city’s rich tapestry. Start your day on the outskirts of the city with your private driver and English-speaking guide by visiting the Museum of Ethnology. The museum provides an insightful glimpse into the country’s lengthy history, with more than 15,000 photos and 10,000 objects and artifacts depicting a historical perspective of the lives, activities, customs, and habits of the 54 recognized ethnic groups of Vietnam. Drive back into central Hanoi to the Temple of Literature, built in 1070 and dedicated to Confucius. From here, continue to Bun Cha Huong Lien, the famous local spot where President Barack Obama dined with Anthony Bourdain.`
            ],
            hotel: 'Silk Path Hotel Hanoi'
        },
        {
            img: img3,
            title: 'All Aboard!',
            local: 'HANOI TO HALONG BAY',
            text: [
                'Welcome to Vietnam! Please note: Your travel documents contain a Visa-on-Arrival letter (unless otherwise arranged). Please ensure to pack this in your carry-on luggage. Your Visa-on-Arrival letter must be presented to Customs upon entry into the country. ',
                `Upon arrival to Hanoi's Noi Bai International Airport you will be welcomed by a hostess holding a sign with your name on it. This hostess will guide you through fast-track security services and, after you obtain a stamp for your Visa and have collected your luggage, will lead the way to your awaiting guide and vehicle.`,
                `You will be privately transferred between your accommodations and Hanoi Airport by a professional driver and an English-speaking guide.`,
                `Hanoi enjoys a rich Imperial history dating back over a millennium, and a surprising diversity of local ethnic groups weave the fabric of the city’s rich tapestry. Start your day on the outskirts of the city with your private driver and English-speaking guide by visiting the Museum of Ethnology. The museum provides an insightful glimpse into the country’s lengthy history, with more than 15,000 photos and 10,000 objects and artifacts depicting a historical perspective of the lives, activities, customs, and habits of the 54 recognized ethnic groups of Vietnam. Drive back into central Hanoi to the Temple of Literature, built in 1070 and dedicated to Confucius. From here, continue to Bun Cha Huong Lien, the famous local spot where President Barack Obama dined with Anthony Bourdain.`
            ],
            hotel: 'Orchid Classic Cruise'
        },
        {
            img: img4,
            title: 'See the Signature Sights in Style',
            local: 'HANOI',
            text: [
                'Welcome to Vietnam! Please note: Your travel documents contain a Visa-on-Arrival letter (unless otherwise arranged). Please ensure to pack this in your carry-on luggage. Your Visa-on-Arrival letter must be presented to Customs upon entry into the country. ',
                `Upon arrival to Hanoi's Noi Bai International Airport you will be welcomed by a hostess holding a sign with your name on it. This hostess will guide you through fast-track security services and, after you obtain a stamp for your Visa and have collected your luggage, will lead the way to your awaiting guide and vehicle.`,
                `You will be privately transferred between your accommodations and Hanoi Airport by a professional driver and an English-speaking guide.`,
                `Hanoi enjoys a rich Imperial history dating back over a millennium, and a surprising diversity of local ethnic groups weave the fabric of the city’s rich tapestry. Start your day on the outskirts of the city with your private driver and English-speaking guide by visiting the Museum of Ethnology. The museum provides an insightful glimpse into the country’s lengthy history, with more than 15,000 photos and 10,000 objects and artifacts depicting a historical perspective of the lives, activities, customs, and habits of the 54 recognized ethnic groups of Vietnam. Drive back into central Hanoi to the Temple of Literature, built in 1070 and dedicated to Confucius. From here, continue to Bun Cha Huong Lien, the famous local spot where President Barack Obama dined with Anthony Bourdain.`
            ],
            hotel: 'Silk Path Hotel Hanoi'
        },
        {
            img: img5,
            title: 'See the Signature Sights in Style',
            local: 'HANOI',
            text: [
                'Welcome to Vietnam! Please note: Your travel documents contain a Visa-on-Arrival letter (unless otherwise arranged). Please ensure to pack this in your carry-on luggage. Your Visa-on-Arrival letter must be presented to Customs upon entry into the country. ',
                `Upon arrival to Hanoi's Noi Bai International Airport you will be welcomed by a hostess holding a sign with your name on it. This hostess will guide you through fast-track security services and, after you obtain a stamp for your Visa and have collected your luggage, will lead the way to your awaiting guide and vehicle.`,
                `You will be privately transferred between your accommodations and Hanoi Airport by a professional driver and an English-speaking guide.`,
                `Hanoi enjoys a rich Imperial history dating back over a millennium, and a surprising diversity of local ethnic groups weave the fabric of the city’s rich tapestry. Start your day on the outskirts of the city with your private driver and English-speaking guide by visiting the Museum of Ethnology. The museum provides an insightful glimpse into the country’s lengthy history, with more than 15,000 photos and 10,000 objects and artifacts depicting a historical perspective of the lives, activities, customs, and habits of the 54 recognized ethnic groups of Vietnam. Drive back into central Hanoi to the Temple of Literature, built in 1070 and dedicated to Confucius. From here, continue to Bun Cha Huong Lien, the famous local spot where President Barack Obama dined with Anthony Bourdain.`
            ],
            hotel: 'Silk Path Hotel Hanoi'
        },
    ]
}

const index = () => {
    return (
        <div className={cx('container')}>
            <Crumb />
            <BannerTour />
            <Introduce data={tour} />
            <Detail data={tour} />
        </div>
    )
}

export default index

const Crumb = () => {
    return (
        <div className={cx('crumb')}>
            <h2>Vietnam</h2>
            <div className={cx('list-a')}>
                <Link href='/'>Home </Link>/
                <Link href='/'>Tour </Link>/
                <Link href='/'>Asia </Link>/
                <Link href='/'>Vietnam</Link>
            </div>
        </div>
    )
}

const BannerTour = () => {
    return (
        <div className={cx('banner')}>
            <Image src={img1} alt='picture' className={cx('img1')} />
            <Image src={img2} alt='picture' className={cx('img2')} />
            <div className={cx('img34')}>
                <Image src={img3} alt='picture' className={cx('img3')} />
                <Image src={img4} alt='picture' className={cx('img4')} />
            </div>

        </div>
    )
}

const Introduce = ({ data }) => {
    return (
        <div className={cx('introduce')}>
            <div className={cx('day-price')}>
                <p className={cx('day')}><span>{data.day}</span> days</p>
                <div className={cx('hr3')} />
                <p className={cx('price')}>
                    Starting from <span>${data.price}</span>per person*
                </p>
            </div>
            <div className={cx('description')}>
                <h1>{data.title}</h1>
                <p>{data.local}</p>
                <div className={cx('list-highlight')}>
                    {data.highlight.map((d, i) =>
                        <p key={i}><GoPrimitiveDot /> {d}</p>
                    )}
                </div>
                <span><i>Please note: USD per person, double occupancy. Custom designed personal tour. Prices subject to change.</i></span>
            </div>
            <div className={cx('tem')}>
                <Image src={img6} alt='picture' />
            </div>
        </div>
    )
}

const Detail = ({ data }) => {
    return (
        <div className={cx('detail')}>
            <div className={cx('top-detail')}>
                <div className={cx('top-text')}>
                    <h2>A travel experience like no other</h2>
                    <p>This sample itinerary was created by experts and is meant to inspire your next trip. It is ready to be customized to suit your interests, tastes and budget so you can connect with local cultures and experience authentic travel on your own terms and departing whenever you choose.</p>
                </div>
                <div className={cx('list-tab')}>
                    <p>Itinerary</p>
                    <p>Accommodations</p>
                    <p>Notes</p>

                </div>
            </div>
            <div className={cx('bot-detail')}>
                {data.detail.map((d, i) =>
                    <Adetail data={d} day={i} />
                )}
            </div>
        </div>
    )
}

const Adetail = ({ data, day }) => {
    return (
        <div className={cx('adetail')} key={day}>
            <div className={cx('left-detail')}>
                <div>
                    <h6>DAY {day + 1}</h6>
                    <GoPrimitiveDot />
                </div>
            </div>
            <div className={cx('img-detail')}>
                <div>
                    <h5>{data.local}</h5>
                    <Image src={data.img} alt='tour-image' />
                </div>
            </div>
            <div className={cx('right-detail')}>
                <h5>{data.title}</h5>
                {data.text.map((d, i) =>
                    <p key={i} className={cx('aday')} >{d}</p>
                )}
                <div className={cx('hotel-infor')}>
                    <p className={cx('p1')}>Where you’ll be staying</p>
                    <p className={cx('p2')}>{data.hotel}</p>
                    <p className={cx('p3')}>Suite Cabin with Balcony</p>
                </div>
            </div>


        </div>
    )
}