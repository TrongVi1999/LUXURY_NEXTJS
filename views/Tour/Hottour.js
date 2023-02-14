import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { Section } from '@/components';
import { Title } from '@/components';
import IMG from '@/public/images/tour1.jpg';
import Tourcard1 from '../Tourcard/Tourcard1';
import { GetTourhot } from '@/pages/api/QuerryAPI';

const cx = classNames.bind(style);


const Hottour = () => {

    const { data, isLoading, error } = GetTourhot();
    // const [Data, setdata] = useState();
    // const CallHottour = async () => {
    //     const response = await Tourhot();
    //     if (response.status == 200) {
    //         setdata(response.data.Object.slice(0, 6));
    //     }
    // }
    // useEffect(() => {
    //     CallHottour();
    // }, []);
    // console.log(Data)
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div className={cx('container')}>
            <Title text="TOUR HIGHLIGHT" align='center' />


            <div className={cx('tour-list')}>
                {data.Object.slice(0, 6).map(d => (

                    <Tourcard1 data={d} />
                ))}

            </div>

        </div>
    );
};

export default Hottour;
