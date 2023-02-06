import ChangeTextHTML from '@/hook/ChangetextHTML';
import a1 from '@/public/a1.png';
import a2 from '@/public/a2.png';
import a3 from '@/public/a3.png';
import a4 from '@/public/a4.png';
import { banners } from '@/public/images';
import style from '@/styles/Hoteldetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import Imglist from '@/views/Tourdetail/Imglist';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoPrimitiveDot } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import Booking from '@/views/LuxuryTrans/Contact';
import { useState, useEffect } from 'react';
import { GetHotel } from '../api/CallAPI';
import { useRouter } from 'next/router';



const cx = classNames.bind(style);

const Index = () => {
    const [book, setbook] = useState(false);
    const [Data, setdata] = useState();
    const router = useRouter();
    const data = {
        img: a1,
        title: 'HA LONG BAY DAY CRUISE - PARADISE EXPLORER',
        price: 200000000,
    }
    const CallAPI = async () => {
        const response = await GetHotel(router.query.id);
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }
    useEffect(() => {
        CallAPI();
    }, [router.query.id]);
    console.log(Data);

    return (
        <div>
            {Data && Data.length > 0 && <div>
                <BannerIMG className={cx('bannerHotelDetial')} img={banners.hoteldetail} title='amoanoi resort' bg='bg' />
                {book ? <Booking click={setbook} /> : <div className={cx('container')}>
                    <Imglist data={[`https://vnxpedia.3i.com.vn${Data[0].gallery}`, a2, a3, a4]} issv={false} />



                    <div className={cx('des')}>
                        <h2>Khu nghỉ dưỡng AMANOI Ninh Thuận</h2>
                        <div className={cx('star')}>

                            <p className={cx('icon-star')}><span><AiFillStar />4.8</span>&#40; 28.091 Đánh giá &#41; |600 Đã được đặt</p>
                            <p className={cx('address')}><CiLocationOn /> Làng Vĩnh Hy, Xã Vĩnh Hải, Huyện Ninh Hải, Ninh Thuận, Việt Nam</p>
                            <p>Amanoi là tên gọi khởi nguồn từ sự kết hợp khéo léo của 	&quot;aman	&quot; - nghĩa là 	&quot;bình yên	&quot; theo tiếng Sanskrit và 	&quot;nơi	&quot; - ý chỉ 	&quot;chỗ lưu trú	&quot; trong tiếng Việt. Đến với Amanoi Ninh Thuận, điều các thượng khách nhận được không phải là dịch vụ nghỉ dưỡng thông thường mà là sự phục vụ đẳng cấp từ cơ sở vật chất đến tất cả tâm huyết của đội ngũ nhân viên - những người được đào tạo chuyên nghiệp để mang đến cho thượng khách cảm giác được trân trọng trên từng bước chân. Nằm trong lòng vườn quốc gia Núi Chúa, với vị thế đắc địa vừa có hồ vừa có biển, khu nghỉ dưỡng cung cấp rất nhiều hoạt động thể thao kết hợp với thiên nhiên như yoga trong lành giữa lòng sông, chèo thuyền kayak, lặn biển,... đặc biệt chỉ có tại Amanoi, cung đường trekking tự nhiên theo cấp độ sẽ làm thỏa mãn các thượng khách muốn chinh phục giới hạn.

                                Cầu hôn tại Amanoi cũng là một ý tưởng tuyệt vời - với một mức giá không thể tốt hơn tại iVIVU - thượng khách hoàn toàn có thể mang đến cho người bạn đời một kỉ niệm không thể nào quên.
                                Hãy đến Amanoi Ninh Thuận một lần trong đời để tận hưởng trải nghiệm kỳ nghỉ vượt xa hơn cả mong đợi !</p>

                            <button onClick={() => setbook(true)}>BOOK NOW <span className={cx('hr-left')}></span> <BsCheckLg /></button>
                        </div>
                    </div>

                    <div className={cx('main-hotel')} dangerouslySetInnerHTML={{ __html: Data[0].full_text }}></div>


                    {/* <div className={cx('util')}>
                        <h2>Tiện ích của Khu nghỉ dưỡng Amanoi Ninh Thuận</h2>
                        <ul>
                            <li><GoPrimitiveDot />Đưa đón sân bay</li>
                            <li><GoPrimitiveDot />Biệt thự (Villa)</li>
                            <li><GoPrimitiveDot />Spa/Beauty Salon/Massage</li>
                            <li><GoPrimitiveDot />Phòng gia đình</li>
                            <li><GoPrimitiveDot />Hồ bơi ngoài trời</li>
                            <li><GoPrimitiveDot />Bãi đậu xe ô tô tại khách sạn</li>
                            <li><GoPrimitiveDot />Phục vụ phòng</li>
                            <li><GoPrimitiveDot />Mở cửa 24/7</li>
                            <li><GoPrimitiveDot />Phòng tập thể dục</li>
                            <li><GoPrimitiveDot />Dịch vụ giặt ủi</li>
                            <li><GoPrimitiveDot />Bãi biển riêng</li>
                            <li><GoPrimitiveDot />Sân vườn</li>
                            <li><GoPrimitiveDot />Phục vụ phòng - 24 giờ</li>
                            <li><GoPrimitiveDot />Dịch vụ dọn phòng</li>
                            <li><GoPrimitiveDot />Wifi / Internet</li>
                            <li><GoPrimitiveDot />Dịch vụ giữ hành lý</li>
                            <li><GoPrimitiveDot />Nhà hàng, Khu ăn uống</li>
                            <li><GoPrimitiveDot />Phòng họp/Dịch vụ hội nghị</li>
                            <li><GoPrimitiveDot />Hồ bơi</li>
                            <li><GoPrimitiveDot />Sân tennis</li>
                            <li><GoPrimitiveDot />Đưa đón sân bay theo lịch trình</li>
                            <li><GoPrimitiveDot />Hoạt động thể thao dưới nước</li>
                        </ul>
                    </div>

                    <div className={cx('info')}>
                        <h2>Tiện ích của Khu nghỉ dưỡng Amanoi Ninh Thuận</h2>
                        <p><span>Khu Nghỉ Dưỡng Amanoi Ninh Thuận</span> được thiết kế bởi Jean-Michel Gathy, tọa lạc trên những ngọn đồi mướt xanh của Vườn Quốc gia Núi Chúa trên Vịnh Vĩnh Hy tuyệt đẹp, cách sân bay Cam Ranh 60km.
                            <br />
                            <br />
                            Khu nghỉ dưỡng được bình chọn là 1 trong 33 khách sạn mới tốt nhất bởi tạp chí Condé Nast Traveler. Cung đường từ sân bay đi đến Amanoi, Quý khách như được trải nghiệm một cuộc phiêu lưu giữa cảnh sắc thiên nhiên tuyệt đẹp, không gian mở bình yên và thoáng đãng lạ kỳ.
                            <br />
                            <br />
                            Khu nghỉ dưỡng có 9 căn Pavilion, 18 căn villa, 2 căn spa house, và 6 căn residence hướng ra hồ bơi, núi hoặc vịnh Vĩnh Hy xanh mát.
                            <br />
                            <br />
                            Nhà hàng chính tại khu nghỉ dưỡng là một không gian bình yên thoáng đãng hướng ra vịnh hướng Bắc. Cliff Pool - hồ bơi vô cực ấn tượng trên đỉnh núi với diện tích 140m². Câu lạc bộ Bãi biển với nhiều môn thể thao dưới nước như lặn biển, bơi thuyền kayak, thuyền buồm… Đây sẽ là nơi bắt đầu cho chuyến phiêu lưu khám phá điều kỳ diệu ẩn trong những rặng san hô, thế giới cá biển đầy màu sắc và những dải đá nhô ra từ các vách núi hùng vĩ.</p>
                    </div>
                    <div className={cx('policy')}>
                        <h2>Chính sách của khu nghỉ dưỡng Amanoi Ninh Thuận</h2>
                        <table>
                            <tr>
                                <th><p>Thời gian khách nhận phòng</p></th>
                                <td>15:00</td>
                            </tr>

                            <tr>
                                <th>Thời gian khách trả phòng</th>
                                <td>12:00</td>
                            </tr>
                            <tr>
                                <th className={cx('th')}><p>Di chuyển</p> </th>
                                <td>Quý khách có thể di chuyển bằng máy bay đến sân bay Cam Ranh hoặc di chuyển bằng tàu hỏa đến Ga Tháp Chàm
                                    <br />
                                    <br />
                                    1. Máy bay: hiện đang có 3 hãng hàng không khai thác gồm Vietnam Airlines, Jetstar và VietJetAir. Thời gian bay khoảng: 1 giờ 45 phút khởi hành từ Hà Nội, 1 giờ 25 phút từ Đà Nẵng và 60 phút từ Hố Chí Minh.
                                    <br />
                                    <br />
                                    Từ sân bay Cam Ranh đến Amanoi mất khoảng 70 phút di chuyển bằng taxi
                                    <br />
                                    <br />
                                    2. Tàu hỏa: Khởi hành từ thành phố Hồ Chí Minh mất khoảng 6 giờ di chuyển và từ Hà Nội mất khoảng 4 giờ di chuyển
                                    <br />
                                    <br />
                                    Từ Ga Tháp Chàm đến Amanoi mất khoảng 60 phút di chuyển bằng taxi</td>
                            </tr>
                            <tr>
                                <th>Lịch trình đón tiễn sân bay</th>
                                <td>Miễn phí đón tiễn sân bay bằng xe riêng 4 chỗ hoặc 7 chỗ theo lịch trình của khách
                                </td>
                            </tr>
                            <tr>
                                <th>Hướng dẫn nhận phòng</th>
                                <td> Quý khách vui lòng xuất trình giấy tờ tùy thân trùng tên với người đại diện trong Phiếu xác nhận đặt phòng của VNXpedia để thủ tục nhận phòng được nhanh chóng.
                                    - Khách sạn sẽ yêu cầu khoản tiền đặt cọc &#40;nếu có&#41; tại thời điểm nhận phòng, khuyến khích sử dụng tiền mặt hoặc thẻ tín dụng &#40;Credit card&#41;.</td>
                            </tr>

                            <tr>
                                <th>Hoạt động giải trí</th>
                                <td>1. Vườn quốc gia Núi Chúa có diện tích khoảng 29.900ha bao gồm phần đất liền và phần biển, có nhiều hệ động thực vật phòng phú và đa dạng. Tại đây, Quý khách có thể chinh phục đỉnh Núi Chúa với độ cao khoảng 1.000m. Khám phá vẻ đẹp kỳ ảo của Hang Rái - nơi được ví là &quot;thác trên biển&quot; duy nhất ở Việt Nam. Đi tàu đáy kính hoặc lặn biển ngấm san hô. Ngoài ra, Quý khách có thể tham quan suối Lồ Ô, Hồ treo, thôn Cầu Gãy hay bãi Thịt &#40;nơi rùa biển đẻ trứng&#41;....
                                    <br />
                                    <br />
                                    2. Amanoi có câu lạc bộ Biển với nhiều môn thể thao dưới nước được trang bị nhiều dụng cụ chuyên nghiệp như lướt sóng, lướt ván, trèo thuyền kayak, thuyền buồm trên mặt biển xanh mát của vịnh Vĩnh Hy
                                    <br />
                                    <br />
                                    3. Tham quan di tích lịch sử: Tháp Po Klong Garai - Tháp Chàm - cách Amanoi khoảng 60 phút di chuyển bằng taxi.</td>
                            </tr>

                            <tr>
                                <th>Chính sách phụ thu</th>
                                <td>1. Giai đoạn từ nay - 31/12/2022:
                                    <br />
                                    <br />
                                    - Trẻ em từ 0-5 tuổi: Miễn phí sử dụng chung giường cùng bố mẹ
                                    - Trẻ em từ 6-11 tuổi: Phụ thu 500.000VNĐ/Trẻ/Đêm bao gồm ăn sáng, không kê giường phụ
                                    - Trẻ em từ 12 tuổi trở lên: Phụ thu 5.700.000VNĐ/Khách/Đêm bao gồm ăn sáng và giường phụ
                                    <br />
                                    <br />
                                    * Giai đoạn từ 01/01-22/12/2023:
                                    <br />
                                    <br />
                                    - Trẻ em từ 0-5 tuổi: Miễn phí sử dụng chung giường cùng bố mẹ
                                    - Trẻ em từ 6-11 tuổi: Phụ thu 500.000VNĐ/Trẻ/Đêm bao gồm ăn sáng, không kê giường phụ
                                    - Trẻ em từ 12 tuổi trở lên: Phụ thu 5.800.000VNĐ/Khách/Đêm bao gồm ăn sáng và giường phụ
                                    <br />
                                    <br />
                                    2. Phụ thu chương trình &quot;Thay lời cảm ơn&quot;:
                                    <br />
                                    <br />
                                    - Trẻ em từ 0-5 tuổi: Miễn phí sử dụng chung giường cùng bố mẹ
                                    - Trẻ em từ 6-11 tuổi: Phụ thu 2.900.000VNĐ/Trẻ/Đêm bao gồm trọn gói (không gồm spa), không kê giường phụ
                                    - Trẻ em từ 12 tuổi trở lên: Phụ thu 6.950.000VNĐ/Khách/Đêm bao gồm trọn gói và giường phụ</td>
                            </tr>


                        </table> */}
                    <h2>Siminal Hotels</h2>
                    <div className={cx('Siminal-Hotel')}>

                        <Link href={``} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        (1000 rate) | 1000 book
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>$ {data.price}</span>

                                </p>
                            </div>
                        </Link>
                        <Link href={``} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>	&#36; {data.price}</span>

                                </p>
                            </div>
                        </Link>
                        <Link href={``} className={cx('card')}>
                            <div className={cx('card-img')}>
                                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
                            </div>
                            <div className={cx('infor')}>
                                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                                <p className={cx('rate')}>
                                    <span className={cx('rating')}>
                                        <AiFillStar /> 4.8
                                    </span>
                                    <span className={cx('ratecount')}>
                                        (1000 rate) | 1000 book
                                    </span>
                                </p>
                                <p className={cx('price')}>
                                    <span className={cx('price1')}>$ {data.price}</span>

                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                    // </div>
                }
            </div>}
        </div>
    )
}

export default Index