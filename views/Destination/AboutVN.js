
import classNames from 'classnames/bind';
import style from './style.module.scss';
import HighImg from '@/public/images/Layer64.png';
import HighImg1 from '@/public/images/Layer65.png';
import Image from 'next/image';


const cx = classNames.bind(style);

const index = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('formHighlight')}>

        <div className={cx('highlight')}>
          <Image src={HighImg} className={cx('image')}></Image>
          <h3>About VietNam</h3>
          <p>Vietnam is home to an abundance of beautiful landscapes, amazing historical monuments and cultural diversity.</p>
          <p> Hanoi, the capital of Vietnam is filled with a fusion of traditional and European architecture and atmosphere. It offers numerous colonial buildings and museums and is a perfect place to explore on foot or on a cyclo. Hanoi is also known for its charming streets, the bustling local markets and the iconic herds of scooters.</p>
          <p> Ho Chi Minh city, also called Saigon, is renowned for its French architecture, the skyscrapers and the temples that co-exist harmoniously side by side. It is also the hub for vibrant nightlife and mouth-watering cuisine.</p>
          <p>Hoi An offer it’s visitors an experience of old school charm and captures a snapshot of Vietnam that has stood still in time for centuries. The trading port dating from the 15th century reflects a unique heritage style in its buildings and streets.</p>
        </div>
      </div>
      <div className={cx('InforTour')}>
        <p>Holiday to Vietnam is not complete without experiencing the scenic and the UNESCO heritage listed Ha Long Bay. An overnight cruise is an ideal way to explore the serenity and beauty, as you take home wonderful memories.</p>
        <p>If time permits, pay a visit to many other beautiful parts of Vietnam such as Sapa, Ninh Binh, Mai Chau, Hue and Mekong Delta. If you want to enjoy a beach stay, there are plenty of places to unwind along the vast coastal line. Da Nang, Nha Trang, Con Dao and Phu Quoc – just a few to consider.</p>
        <p>When it comes to food, Vietnam is certainly a place to tantalise your taste buds. The cuisine is renowned for being diverse, healthy, and delicious. The French colonisation has also left its mark on many dishes including the banh mi and the coffee.</p>
        <p> Whatever you wish to experience, this long “S” shaped country has it all covered. Visit this picturesque nation and awaken all of your senses.</p>
        <Image src={HighImg1} className={cx('image1')}></Image>
      </div>
    </div>
  )
}

export default index