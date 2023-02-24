import avt2 from '@/public/avt4.jpg';
import avt4 from '@/public/avt6.jpg';
import avt5 from '@/public/avt7.jpg';
export const getAuthor = (id) => {
    const listAuth = [
        {
            img: avt5,
            name: 'HANNA NGUYEN (MS.)',
            position: 'Marketing Manager',
            introduce: 'Hana Nguyen is the Marketing Manager of LuxuryVietravel, a leading travel company in Southeast Asia'
        },
        {
            img: avt4,
            name: 'CATHERINE MALANDRINO (MS.)',
            position: 'Operation Manager',
            introduce: 'Catherine Malandrino is a truly remarkable member of the LuxuryVietravel team'
        },
        {
            img: avt2,
            name: 'ANTONIO ROBERT (MR.)',
            position: 'Product Manager',
            introduce: 'Antonio Robert has a deep love for Vietnam and has devoted a significant amount of time to researching and developing unique and captivating travel products for LuxuryVietravel'
        },

    ]
    if (id % 5 == 0) {
        return listAuth[0];
    } else if (id % 2 == 0) {
        return listAuth[1];
    } else {
        return listAuth[2];
    }
}