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
    title: 'tour tags',
    elements: ['Daily Tour', 'Halong', 'Vietnam', 'Mai chau', 'Da Nang', 'Phan Thiet', 'BestSeller', 'Top Selling'],
};

const priceFilter = {
    title: 'price',
    elements: ['0 - 600', '601 - 900', '901 - 1500', '> 1500 '],
    value: [[0, 600], [601, 900], [901, 1500], [1501, 15000]]
};

const seasonFillter = {
    title: 'Fillter by Season',
    elements: ['Newyear', 'Summer', 'holiday', 'Winter']
}

const groupSizeFillter = {
    title: 'GroupSize',
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
