import React from 'react';
import classNames from 'classnames/bind';
import style from './styleTransFer.module.scss';
import Image from 'next/image';
import a1 from '@/public/icon/transfer1.png';
import a2 from '@/public/icon/transfer2.png';
import a3 from '@/public/icon/transfer3.png';
import { RxDotFilled } from 'react-icons/rx';
import { Title } from '@/components';
import Bn0 from '@/public/images/tfbn0.png';
import Bn1 from '@/public/images/tfbn2.jpg';
import { ListTransfer } from '@/pages/api/QuerryAPI';
import { BoxCarTrans } from '..';


const cx = classNames.bind(style);

export const Vehicles = ({ setbook }) => {
    const transferList = ListTransfer('VEHICLES');
    return (
        <div className={cx('containerContent')}>
            <h2>VEHICLES</h2>
            <p>At Luxury Vietravel, we don't just provide ordinary car rental services, we offer accompanying values to ensure our customers feel completely at ease, truly enjoy their experience, and most importantly, create a sense of prestige for our clients who have chosen our services.</p>

            <div className={cx('icon')}>
                <div>
                    <Image src={a1} alt='car' />
                    <h4>Professional Service</h4>
                </div>
                <div className={cx('seperate')}></div>
                <div>
                    <Image src={a2} alt='car' />
                    <h4>SuiablePrice</h4>
                </div>
                <div className={cx('seperate')}></div>
                <div className={cx('icon1')}>
                    <Image src={a3} alt='car' />
                    <h4>Safety</h4>
                </div>
            </div>

            <Image src={Bn0} alt='service VIP' className={cx('imgVIP')} />
            <h3>Our VIP pickup and drop-off services at border gates and airports:</h3>
            <p className={cx('text')}>The airport procedures in Vietnam have significantly improved in recent times, but waiting for baggage, going through visa checks, customs, etc., still takes up a lot of time, causing fatigue and stress, which is understandable. Furthermore, it creates a chaotic and unrefined atmosphere. You should give Luxury Vietravel the opportunity to provide you with convenience all the way once you arrive in Vietnam.</p>
            <h3>Private and packaged services from us:</h3>

            <div className={cx('listService')}>
                <Image src={Bn1} alt='service VIP' className={cx('imgPick')} />
                <ul className={cx('list-li')}>
                    <li><RxDotFilled /> Our staff will greet and present flowers to customers at the airport terminal.</li>
                    <li><RxDotFilled /> Use of Business Class waiting lounge.</li>
                    <li><RxDotFilled /> Served with cakes, tea, and fruits during waiting time while staff completes procedures.</li>
                    <li><RxDotFilled /> Our staff will handle all necessary procedures in just 5-15 minutes</li>
                    <li><RxDotFilled /> Customers do not need to present themselves to Customs and Security.</li>
                    <li><RxDotFilled /> Transportation with the latest car models to take customers to their hotels in the city.</li>
                </ul>
            </div>

            <button className={cx('btn')} onClick={() => setbook(true)}>BOOK NOW</button>
            <div className={cx('list-transfer')}>
                <Title text='Dịch vụ xe VIP cho khách Bussiness và khách du lịch' align='center' />
                <p>Lựa chọn các dòng xe sang trọng, đẳng cấp trong đội xe của Luxury Vietravel</p>
                <h3>SEDAN</h3>

                {transferList.data &&
                    <div className={cx('list-car')}>
                        {/* {
                            transferList.data.Object.map((d) => ( */}
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        {/* <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} /> */}
                        {/* ))
                        } */}
                    </div>}

                <h3>SUV</h3>
                {transferList.data &&
                    <div className={cx('list-car')}>
                        {/* {
                            transferList.data.Object.map((d) => ( */}
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        {/* <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} /> */}
                        {/* ))
                        } */}
                    </div>}
                <h3>VAN</h3>
                {transferList.data &&
                    <div className={cx('list-car')}>
                        {/* {
                            transferList.data.Object.map((d) => ( */}
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        {/* <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} /> */}
                        {/* ))
                        } */}
                    </div>}
                <h3>BUS</h3>
                {transferList.data &&
                    <div className={cx('list-car')}>
                        {/* {
                            transferList.data.Object.map((d) => ( */}
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        {/* <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} /> */}
                        {/* ))
                        } */}
                    </div>}
                <h3>COACH</h3>
                {transferList.data &&
                    <div className={cx('list-car')}>
                        {/* {
                            transferList.data.Object.map((d) => ( */}
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        <BoxCarTrans data={transferList.data.Object[0]} to={`/transfer-detail/${(transferList.data.Object[0]).id}`} />
                        {/* <BoxCarTrans data={d} key={d} to={`/transfer-detail/${d.id}`} /> */}
                        {/* ))
                        } */}
                    </div>}
            </div>

        </div>
    )
}

export const CruiseYacht = () => {
    return (
        < div className={cx('containerContent')}>
            <p>
                Vietnam is a coastal country, with beautiful coastlines stretching along the shape of the country, as well as magnificent and impressive Gulf regions. Luxury Vietravel wants to bring the experience of exploring these amazing natural landscapes on luxury cruises to tourists visiting Vietnam.
            </p>
        </div>
    )
}

export const Helicopters = () => {
    return (
        < div className={cx('containerContent')}>
            <p>Luxury Vietravel has partnered with reputable and high-end airlines to offer travel experiences aimed at bringing top-notch services to customers and saving time on transportation. Our flights are designed for tourism purposes and provide customers with a luxurious and comfortable journey. </p>
        </div>
    )
}

export const Luxtrain = () => {
    return (
        < div className={cx('containerContent')}>
            <p>Luxury Vietravel has partnered with reputable and high-end airlines to offer travel experiences aimed at bringing top-notch services to customers and saving time on transportation. Our flights are designed for tourism purposes and provide customers with a luxurious and comfortable journey. </p>
        </div>
    )
}
