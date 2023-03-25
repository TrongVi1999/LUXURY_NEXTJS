import { iconInfos, avatars } from '@/public/images';
import { banners } from '@/public/images';

const infoHomeFake = [
    {
        icon: iconInfos.icon1,
        title: `Luxury & peace of mind services.`,
        content:
            `We provide absolute peace of mind with our top-notch service system, ensuring the highest level of excellence.`,
    },
    {
        icon: iconInfos.icon4,
        title: 'local experts',
        content:
            `We believe that to create a great product, it must be designed by those who have a deep understanding of the country, its people, and culture.`,
    },
    {
        icon: iconInfos.icon7,
        title: 'Brand reputation through credibility',
        content:
            `Our profits are built on the foundation of trust and reputation developed over many years.`,
    },
    {
        icon: iconInfos.icon3,
        title: 'Responsibility',
        content:
            `Our commitment to the community, environment, and sustainability is at the heart of everything we do.`,
    },
];

const categoryFillerAddress = {
    title: 'Destination',
    elements: [
        {
            name: 'Ha noi',
            amount: '24',
        },
        {
            name: 'Ha long',
            amount: '122',
        },
        {
            name: 'Da nang',
            amount: '09',
        },
        {
            name: 'Ninh Binh',
            amount: '12',
        },
        {
            name: 'Hue',
            amount: '98',
        },
        {
            name: 'Ho Chi Minh City',
            amount: '34',
        },
        {
            name: 'Sapa',
            amount: '23',
        },
        {
            name: 'Vung Tau',
            amount: '43',
        },
        {
            name: 'Phan Thiet',
            amount: '12',
        },
        {
            name: 'Nha Trang',
            amount: '11',
        },
        {
            name: 'Mai Chau',
            amount: '08',
        },
    ],
};

const tourTagsFilter = {
    title: 'tags',
    elements: ['Daily Tour', 'Halong', 'Vietnam', 'Mai chau', 'Da Nang', 'Phan Thiet', 'BestSeller', 'Top Selling'],
};

const priceFilter = {
    title: 'Price',
    elements: ['0 - 600', '601 - 900', '901 - 1500', '> 1500 '],
    value: [[0, 600], [601, 900], [901, 1500], [1501, 15000]]
};

const seasonFillter = {
    title: 'Season',
    elements: ['Newyear', 'Summer', 'holiday', 'Winter']
}

const groupSizeFillter = {
    title: 'Group Size',
    elements: ['solo', 'couple', 'family', 'company']
}

const recentPostFake = {
    title: 'recent post',
    elements: [
        {
            image: banners.banner4,
            titlePost: 'The Unique Charm in Phong Nha The Unique Charm in Phong Nha',
            time: 'Post on Set 27'
        },
        {
            image: banners.banner4,
            titlePost: 'The Unique Charm in Phong Nha',
            time: 'Post on Set 27'
        },
        {
            image: banners.banner4,
            titlePost: 'The Unique Charm in Phong Nha',
            time: 'Post on Set 27'
        }
    ]
}

export { categoryFillerAddress, tourTagsFilter, infoHomeFake, recentPostFake, seasonFillter, groupSizeFillter, priceFilter };
