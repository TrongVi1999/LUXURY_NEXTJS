import Logo from '@/asset/iconlogo.png';
import Head from 'next/head';

const Headpage = ({ title, descrip, canonical }) => {
    return (
        <Head>
            <title>{title ? title : 'Luxury Tours - Incentive Tailor-made Trips'}</title>
            <meta name="description" content={descrip ? descrip : `Vietnam Luxury Tours I Wellness Vietnam I Adventure Travel & Incentive Tailor-made Trips`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" sizes="20x20" href={Logo.src} />
            {canonical && <link rel="canonical" href="https://www.luxuryvietravel.com/tour-detail/VNCLASSIC04" />}
        </Head>
    )
}

export default Headpage