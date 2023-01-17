import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Countrycard from './Countrycard';
import IMG1 from '@/public/9.jpg';
import IMG2 from '@/public/10.jpg';
import IMG3 from '@/public/11.jpg';
import IMG4 from '@/public/12.jpg';
import IMG5 from '@/public/13.jpg';

const cx = classNames.bind(style);

const data = [
    {
        img: IMG1,
        title: 'Viet Nam',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG2,
        title: 'Thailand',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG3,
        title: 'Cambodia',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG4,
        title: 'Myanmar',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
    {
        img: IMG5,
        title: 'Laos',
        content:
            'Việt Nam – đất nước hình chữ S với những con người kiên cường, bất khuất vẫn đứng hiên ngang trước bao cuộc chiến tranh xâm lược. Với những cảnh sắc thiên nhiên tươi đẹp cùng nguồn tài nguyên thiên nhiên quý giá và dồi dào, chúng ta – những người con của đất Việt vẫn thường hay tự hào khi nhắc về Tổ Quốc, quê hương của mình.',
    },
];
const Country = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('grid1')}>
                <Countrycard data={data[0]} />
            </div>
            <div className={cx('grid2')}>
                <div className={cx('card')}>
                    <Countrycard data={data[1]} />
                </div>
                <div className={cx('card')}>
                    <Countrycard data={data[2]} />
                </div>
                <div className={cx('card')}>
                    <Countrycard data={data[3]} />
                </div>
                <div className={cx('card')}>
                    <Countrycard data={data[4]} />
                </div>
            </div>
        </div>
    );
};

export default Country;
