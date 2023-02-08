import React from 'react'
import classNames from 'classnames/bind';
import style from './faq.module.scss';

const cx = classNames.bind(style);

const Faq = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h4>Do I need a visa?</h4>
                <p>All Australian passport holders will require a visa to enter Vietnam. There are 3 ways to apply for Vietnam visa.
                    <br />
                    <br />
                    Option 1: Via local Vietnam embassy or consulate
                    <br />
                    <br />
                    Option 2: E-Visa through government website https://evisa.xuatnhapcanh.gov.vn
                    <br />
                    <br />
                    Option 3: A travel agent can apply on your behalf.
                    <br />
                    <br />
                    We recommend the 2nd option as this is the most convenient (Unless you require multiple entries and wish to stay for more than 30 days). The processing time is roughly about 3 days for E-Visa. Visa is valid for 30 days from the date you enter the country (A single entry only)</p>
            </div>
            <div className={cx('content')}>
                <h4>When is the best time to visit?</h4>
                <p>Weather in Vietnam is somewhat complex due to the shape and geography of the country. In general, between March and April is probably the best time to visit if you would like to cover north, Central and south. Each area weather can be distinct based on the month you wish to travel. For travelling north, weather is best during March to April and September to November. For south, the dry season between November and April is the best. If you would like to enjoy the beach weather, then it will depend where you want to visit.
                    <br />
                    <br />
                    Let our friendly consultants put your mind at ease and guide you through to design an itinerary that matches the requirements in line with weather any many other facts.</p>
            </div>
            <div className={cx('content')}>
                <h4>How long should you spend in Vietnam?</h4>
                <p>
                    This will depend what parts of the country you intend to cover. If you would like to visit north, central and south, we recommend between 17 to 20 days, so you can travel at a leisure pace. If you only intend to cover the north and central, between 10 to 12 days would be sufficient enough. All our tours are tailor made to suit your requirements hence we can build an itinerary considering your budget, places you wish to visit and length of your intended stay.</p>
            </div>
            <div className={cx('content')}>
                <h4>Is Vietnam a good country to travel with children?</h4>
                <p>Vietnam is without a doubt a great place to travel with children. It is a country that caters for the entire family to have a wonderful cultural experience. Ha Long Bay, Nihn Binh. Mai Chau, Hoi An are some great places where children will fall in love with. If you are wanting a relaxing time by the beach, there are plenty of places to choose from. When travelling with children, if you are limited with time, it’s best to cover a few key places of interest to avoid many domestic flights and long days of driving. Speak to our friendly consultants who can put your mind at ease and design a holiday for the entire family to enjoy.</p>
            </div>
            <div className={cx('content')}>
                <h4>What are the common airlines that flies to Vietnam from Australia?</h4>
                <p>Firstly, it is best to decide which key city you plan to fly into and fly out of Vietnam. Also, it will depend on which city you will fly from Australia.
                    <br />
                    <br />
                    Fly direct to Ho Chi Minh city
                    <br />
                    <br />
                    If you are wanting to catch a direct flight from Australia to Ho Chi Minh City, there are 2 options from Sydney and Melbourne. Both Jetstar and Vietnam airlines have direct flights from Sydney and Melbourne to Ho Chi Minh City.
                    <br />
                    <br />
                    Fly direct to Hanoi
                    <br />
                    <br />
                    There are no direct flights to Hanoi from Australia. You will need to transit either in Ho Chi Minh city OR in another overseas destination (e.g. Singapore, Bangkok etc).
                    <br />
                    <br />
                    Below are some good options to fly to Hanoi with a transit
                    <br />
                    <br />
                    Jetstar with a transit in Ho Chi Minh City, Vietnam Airlines with a transit in Ho Chi Minh City, Singapore Airlines with a transit in Singapore, Thai airways with a transit in Bangkok, Malaysian airlines with a transit in KL, Cathay Pacific with a transit in Hong Kong.
                    <br />
                    <br />
                    As per most of our itineraries on the website, you will arrive in Hanoi and departure from Ho Chi Minh City. We suggest Singapore Airlines as one of the best options to fly into Hanoi and fly out from Ho Chi Minh city with a transit in Singapore.
                    <br />
                    <br />
                    Depending on your itinerary and requirements, we will advise you of the best option/s for flights.
                    <br />
                    <br />
                    Hire of an air conditioned vehicle including fuel and the service of an English speaking private driver guide throughout the tour.
                </p>
            </div>
            <div className={cx('content')}>
                <h4>What is the electricity voltage?</h4>
                <p>Vietnam operates on power 110v/220v (2 different voltages are being used) and 50hz . Please check what voltages your appliance operates else you may need to get a voltage converter (If the appliance has INPUT: 100-240V, 50/60 Hz, this can be used without a voltage converter). There are 3 plug types.
                </p>
            </div>

        </div>
    )
}

export default Faq