import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Countrycard from './Countrycard';
import IMG4 from '@/public/images/myanmar.png';
import IMG5 from '@/public/images/laos.png';
import IMG3 from '@/public/images/combodia.png';
import IMG1 from '@/public/images/vietnam.png';
import IMG2 from '@/public/images/thailan.png';
import { CallAllcountry, AllCountry } from '@/pages/api/CallAPI';


const cx = classNames.bind(style);

const data = [
    {
        img: IMG1,
        link: '/destination/VietNam',
        title: 'Viet Nam',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG2,
        link: '/destination/ThaiLand',
        title: 'Thailand',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG3,
        link: '/destination/Cambodia',
        title: 'Cambodia',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG4,
        link: '/destination/Myanmar',
        title: 'Myanmar',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG5,
        link: '/destination/Laos',
        title: 'Laos',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
];

const Country = () => {
    const [Data, setdata] = useState();
    const CallAPI = async () => {
        const response = await AllCountry();
        if (response.status == 200) {
            setdata(response.data);
        }
    }
    useEffect(() => {
        // CallAllcountry(setdata);
        CallAPI();
    }, []);
    console.log(Data);
    return (
        <div >
            {Data && <div className={cx('container')}>
                <div className={cx('grid1')}>
                    <Countrycard data={Data[0]} />
                </div>
                <div className={cx('grid2')}>
                    <div className={cx('card')}>
                        <Countrycard data={Data[1]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={Data[2]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={Data[3]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={Data[4]} />
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Country;
