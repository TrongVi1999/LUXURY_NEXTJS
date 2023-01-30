import { iconInfos, avatars } from '@/public/images';
import { banners } from '@/public/images';

const infoHomeFake = [
    {
        icon: iconInfos.icon1,
        title: `excellent <br/>services`,
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon4,
        title: 'local experts',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon7,
        title: 'local price',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon3,
        title: 'authentic <br/>& tailor-made tours',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
];

const categoryFillerAddress = {
    title: 'category',
    elements: [
        {
            name: 'Hanoi',
            amount: '24',
        },
        {
            name: 'Halong',
            amount: '122',
        },
        {
            name: 'Danang',
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
            name: 'Moc Chau',
            amount: '08',
        },
    ],
};

const tourTagsFilter = {
    title: 'tour tags',
    elements: ['Daily Tour', 'Ha Long', 'Ninh Binh', 'Luxury', 'Da Nang', 'Phan Thiet', 'Best Seller', 'Top Selling'],
};

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

export { categoryFillerAddress, tourTagsFilter, infoHomeFake, recentPostFake };
