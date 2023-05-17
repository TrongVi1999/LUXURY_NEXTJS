import React, { useState } from 'react';
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
import { GoPrimitiveDot } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';

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
            hotel: 'Silk Path Hotel Hanoi',
            Accommodations: 'Conveniently located in the heart of Hanoi’s charming Old Quarter, the Silk Path Hotel Hanoi is an excellent choice for discerning travelers seeking unrivaled value and a central location to explore the countless attractions and cultural experiences the city has to offer. The hotel’s 106 bespoke rooms and suites offer tastefully designed interiors featuring the latest technology and amenities with an attention to detail, showcasing opulent fabrics and hand-printed wallpapers. The property features five restaurants and bars to choose from, as well as a fitness center.'
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
            hotel: 'Silk Path Hotel Hanoi',
            Accommodations: 'Conveniently located in the heart of Hanoi’s charming Old Quarter, the Silk Path Hotel Hanoi is an excellent choice for discerning travelers seeking unrivaled value and a central location to explore the countless attractions and cultural experiences the city has to offer. The hotel’s 106 bespoke rooms and suites offer tastefully designed interiors featuring the latest technology and amenities with an attention to detail, showcasing opulent fabrics and hand-printed wallpapers. The property features five restaurants and bars to choose from, as well as a fitness center.'
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
            hotel: 'Orchid Classic Cruise',
            Accommodations: 'Orchid Cruise offers exclusive luxury 5 cruises off the beaten path of Halong Bay, to the less visited areas of Bai Tu Long Bay and Lan Ha Bay. Drawing design inspiration from the delicate, exotic and graceful orchid flower, Orchid Cruise is elegantly decorated with the presence of orchids. Priding themselves on the highest level of customer service with magnificent, relaxing and comfortable spaces, Orchid Cruise deserves to be recognized as one of the most luxurious 5-star junk lines in Halong Bay. Orchid Cruise houses 14 luxury cabins with an elite, professional crew that will provide guests the best service in Halong Bay.'
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
            hotel: 'La Siesta Hoi An Resort & Spa',
            Accommodations: 'At La Siesta Hoi An, guests will experience the cultural art of luxury hospitality in Hoi An. Staying at the resort is your chance to relax in a boutique retreat reflecting the essence of Hoi An ancient town’s characteristic style. La Siesta is next to green rice fields and winding village lanes, near the Thu Bon River and a short walk from Hoi An old town. A unique feature bordering the grounds is an ancient neighborhood communal house, dedicated to the 15th century Thanh Ha pottery village founders. Few hotels can boast direct access to ‘their own temple’. Resting within colorful tropical gardens, La Siesta Resort & Spa is split over two wings. The 70-roomed west wing is styled as an expansive, yet fashionably traditional, hotel. The east wing features old town characteristics across eight terraced townhouse villas accommodating 37 strikingly-period classic suites. Food lovers have a choice of traditional Vietnamese cuisine at Red Bean or international fusion at The Temple. And combined with a leading spa, two swimming pools and a garden villa fitness suite invite you to enjoy the best of all Hoi An worlds.'
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
            hotel: 'Pilgrimage Village',
            Accommodations: `The Pilgrimage Village offers guests the harmony of soothing natural environment and local culture, along with delicious meals, peaceful life of a quiet countryside retreat. The Pilgrimage Village embodies the subtle connection of traditional stylish and modern art concept. Each of the guest rooms are furnished with modern amenities, centered around the guests' experience, ensuring comfort and relaxation.`
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
    const [tab, setTab] = useState(0);
    const listtab = ['Itinerary', 'Accommodations', 'Notes']

    return (
        <div className={cx('detail')}>
            <div className={cx('top-detail')}>
                <div className={cx('top-text')}>
                    <h2>A travel experience like no other</h2>
                    <p>This sample itinerary was created by experts and is meant to inspire your next trip. It is ready to be customized to suit your interests, tastes and budget so you can connect with local cultures and experience authentic travel on your own terms and departing whenever you choose.</p>
                </div>
                <div className={cx('list-tab')}>
                    {listtab.map((d, i) =>
                        <p onClick={() => setTab(i)} key={i} className={cx(tab == i ? 'acttab' : '')}>{d}</p>
                    )}


                </div>
            </div>
            {tab == 2 ? <Notes /> :
                <div className={cx('bot-detail')}>
                    {data.detail.map((d, i) =>
                        tab == 0 ? <Adetail data={d} day={i} iti /> : <Adetail data={d} day={i} />
                    )}
                </div>
            }
        </div>
    )
}

const Adetail = ({ data, day, iti }) => {
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
            {iti ? <div className={cx('right-detail')}>
                <h5>{data.title}</h5>
                {data.text.map((d, i) =>
                    <p key={i} className={cx('aday')} >{d}</p>
                )}
                <div className={cx('hotel-infor')}>
                    <p className={cx('p1')}>Where you’ll be staying</p>
                    <p className={cx('p2')}>{data.hotel}</p>
                    <p className={cx('p3')}>Suite Cabin with Balcony</p>
                </div>
            </div> :
                <div className={cx('right-detail')}>
                    <h5>{data.hotel}</h5>
                    <p className={cx('acc-text')}>{data.Accommodations}</p>
                </div>
            }


        </div>
    )
}

const Notes = () => {

    const notes = {
        orders: [
            `Choose from a range of places to stay, from impeccable five-star hotels to equally outstanding boutique ones.`,
            `With no fixed dates or set schedules, you can explore on your terms.`,
            `Tailor your trip to include a wide variety of activities, from the must-see’s to the lesser-known, local experiences, and even the exclusive ones you may not know about.`,
            `Whether you’re celebrating one of life’s big moments or looking to fulfill a personal journey, we always work with you to ensure we’re creating a trip-of-a-lifetime.`
        ],
        include: [
            `A fully customized itinerary based on your interests and schedule`,
            `24/7 in-destination support from our local office`,
            `Local private guides or shared tours that take you through your itinerary highlights and experiences, your final itinerary will confirm the type of tour`,
            `All accommodation stays, tours and transfers for scheduled activities are covered, unless otherwise listed in the itinerary`,
            `A greeting at the airport or at your accommodation from one of our representatives – your expert will confirm your meet and greet location with you`,
            `A private driver for tours and transfers (in some countries our local private guides also act as your driver - your Destination Expert will discuss with you if applicable)`,
            `Breakfast each morning at your hotel, plus any meals indicated in the itinerary`,
            `One suitcase and one carry-on per person for trip transfers`
        ],
        exclude: [
            `Your international airfare – please do let your expert know if you’d like to receive pricing from our Air Team`,
            `Personal charges such as laundry, phone calls, SIM cards or room service`,
            `Travel insurance, which we offer and can be purchased after you’ve booked your tour`,
            `Early check-in or late check-out from hotels (unless otherwise specified)`,
            `Visas (unless noted)`,
            `Additional sightseeing, activities and experiences outside of your itinerary`,
            `Tips for services and experiences`,
            `Optional enhancements like room or flight upgrades, or local camera or video fees`,
            `Lunches, dinners and drinks (alcoholic and non-alcoholic), unless specified in the itinerary`,
            `Passport fees, immunization costs, and local departure taxes (when applicable)`,
            `Excess baggage charges, and where applicable, baggage not included in your fare`
        ]
    }
    return (
        <div className={cx('notes')}>
            <div className={cx('order')}>
                <h3 className={cx('title-note')}>
                    Made to order
                </h3>
                <div className={cx('list-law')}>
                    {notes.orders.map((d, i) =>
                        <p key={i}><GiCheckMark />{d}</p>
                    )}
                </div>

            </div>
            <div className={cx('order')}>
                <h3 className={cx('title-note')}>
                    What’s included
                </h3>
                <div className={cx('list-law')}>
                    {notes.include.map((d, i) =>
                        <p key={i}><GoPrimitiveDot />{d}</p>
                    )}
                </div>

            </div>
            <div className={cx('order')}>
                <h3 className={cx('title-note')}>
                    What’s not included
                </h3>
                <div className={cx('list-law')}>
                    {notes.exclude.map((d, i) =>
                        <p key={i}><GoPrimitiveDot />{d}</p>
                    )}
                </div>

            </div>
            <div className={cx('order')}>
                <h3 className={cx('title-note')}>
                    Protect your travel
                </h3>
                <p>We recommend travel protection. Between missed connections, lost or delayed luggage, or medical emergencies, you want some peace of mind that your travel investment is well protected.
                    <br /><br />
                    No matter who you buy from, please consider purchasing a travel protection plan before you travel. Still unsure? Consider these frequently asked questions.
                </p>


            </div>
        </div>
    )
}