import classNames from 'classnames/bind';
import style from './bannerSlide.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import Link from 'next/link';
import Banner from './Banner';
import { MdOutlinePlace } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import { GetSocial } from '@/pages/api/CallAPI';

const cx = classNames.bind(style);

function BannerSlide({ titleBanner, textTop, textBottom, imgBanner, notSearch, className, classNameTitle }) {



    const [ip1, setip1] = useState('');
    const [list1, setlist1] = useState([]);
    const [show1, setshow1] = useState(true);
    const [List2, setlist2] = useState();
    const [list0, setlist0] = useState();
    const [pickCountry, setpickCountry] = useState('');

    //CallAPI lấy list địa danh
    const CallList = async () => {
        const response = await GetSocial(6256);
        if (response.status == 200) {
            let Allarray = Object.values(JSON.parse(response.data.Object[0].intro_text));
            let Newarray = [];
            Allarray.map(d => { Newarray = [...Newarray, ...d] });
            //đây là list tất cả địa danh
            setlist2(Newarray);
            //đây là list cơ bản lúc đầu có cả quốc gia
            setlist0(JSON.parse(response.data.Object[0].intro_text));
        }
    }
    //hàm xử lí kết quả input
    const handleSearch = (d) => {
        setshow1(false);
        setip1(d);
        setlist1([]);
        setpickCountry(Object.keys(list0).find(b => list0[b].includes(d)))
    }
    function findKeyWithX(obj, x) {
        Object.values(obj).map((d, i) => { d.includes(x) && setpickCountry(Object.keys(i)) })
        // if (obj[key].includes(x)) {
        //     return 'fdf';
        // }         

    }
    useEffect(() => {
        CallList();
        { show1 && List2 && ip1 != '' ? setlist1(List2.filter(d => d.toLowerCase().replace(' ', '').includes(ip1.toLowerCase().replace(' ', '')))) : setlist1([]) }


    }, [ip1]);
    console.log('list0', list0)
    console.log('Con', pickCountry)

    return (
        <div className={cx('bannerAll')}>
            <Swiper
                modules={[EffectFade, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={cx('wrapper', { [className]: className })}
            >
                {imgBanner?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Banner className={cx('bannerMain')} image={img} />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className={cx('sheaderBox')}>
                {
                    textTop && <p className={cx('text')}>{textTop}</p>
                }
                {titleBanner && <h1 className={cx('titleHome')}>{titleBanner}</h1>}
                {
                    textBottom && <p className={cx('textBottom')}>{textBottom}</p>
                }
                {
                    notSearch ||
                    <div className={cx('boxSearch')}>
                        <div className={cx('boxSearch-item')}>
                            <MdOutlinePlace />
                            <div className={cx('boxSearch-ip')}>
                                <input type='text' className={cx('input')} placeholder='Place' onChange={(e) => {
                                    setshow1(true)
                                    setip1(e.target.value)
                                }} value={ip1}></input>
                                {show1 && list1 &&
                                    <div className={cx('list1')}>
                                        {list1.map(d =>
                                            <p onClick={() => { handleSearch(d) }}>{d}</p>)}
                                    </div>
                                }
                            </div>


                        </div>

                        <Link href={`/destination/${pickCountry}destination=${ip1}`} className={cx('btn-search')} >Search Tour </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default BannerSlide;
