import classNames from 'classnames/bind';
import style from './TransDetail.module.scss';

// import style from '@/styles/Hoteldetail.module.scss';
import Loading from '@/components/Loading';

import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { ListTransfer } from '@/pages/api/QuerryAPI';
import { BoxCarTrans } from '..';
import { getType } from '@/hook/getModel';

const cx = classNames.bind(style);

const TransListDetail = ({ type }) => {
    const transferList = ListTransfer(type);

    return (
        <div className={cx('Siminal-Hotel')}>

            {transferList.data &&
                <div className={cx('list-car')}>
                    {transferList.data.Object.slice(0, 3).map(d =>
                        <BoxCarTrans data={d} to={`/transfer-detail/${d.id}`} />
                    )}

                </div>}

        </div>
    )
}

export default TransListDetail