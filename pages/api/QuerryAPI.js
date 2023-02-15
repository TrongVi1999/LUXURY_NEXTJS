import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import qs from 'qs';



export const Superfilter = (Country, Destination, Tourtype, Fromcost, Endcost, Tagtour, Season, Group) => {
    const { data, isLoading, error } = useQuery(
        'searchTour',
        async () => {
            const response = await axios.post('https://vnxpedia.3i.com.vn/TravelAPI/SearchTourAdvance', qs.stringify({
                country: (Country ? Country : ''),
                destination: (Destination ? Destination : ''),
                tourtype: (Tourtype ? Tourtype : ''),
                TagTour1: (Season ? Season : ''),
                TagTour2: (Group ? Group : ''),
                fromcost: (Fromcost ? Fromcost : 0),
                endcost: (Endcost ? Endcost : 15000),
                TagTour: (Tagtour ? Tagtour : ''),
            }), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            });
            return response.data;
        }
    );
    return { data, isLoading, error };
};

//Lấy 1 blog
export const Getblog = (id) => {
    return useQuery(['getblog', id], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListPostWithId?Id=${id}`);
        return response.data;
    });
};

//lấy tất cả tour
export const Alltour = () => {
    return useQuery(['getblog'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable`);
        return response.data;
    });
};

//lấy 1 tour
export const Gettour = (tourcode) => {
    return useQuery(['gettour', tourcode], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=${tourcode}`);
        return response.data;
    });
};

//Tourhot
export const GetTourhot = () => {
    return useQuery(['tourhot'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/Hottour`);
        return response.data;
    });
};

//tourtype
export const Tourtype = (tourtype) => {
    return useQuery(['tourtype', tourtype], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourtype=${tourtype}`);
        return response.data;
    });
};

//list country
export const GetAllCountry = () => {
    return useQuery(['allcountry'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=en_US`);
        return response.data;
    });
};

//list blog
export const GetAllblog = (tag, page) => {
    return useQuery(['bloglist', tag, page], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListPost?hastag=${tag}&CurrentPage=${page}`);
        return response.data;
    });
};

//Lấy 1 bài content
export const GetSocial = (id) => {
    return useQuery(['getsocial', id], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListPostSocial?id=${id}`);
        return response.data;
    });
};

//Lấy tour theo location
export const GetTourLocation = (location) => {
    return useQuery(['gettourlocation', location], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/AllTourDestination?destination=${location}`);
        return response.data;
    });
};

//thêm comment
export const InsertComment = (id, reply, username, comment) => {
    return useQuery(['insertcomment', id, reply, username, comment], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/InsertCommentOnPost?PostId=${id}&ParentId=${reply}&UserName=${username}&Comment=${comment}`);
        return response.data;
    });
};

//lấy blog hot
export const Getbloghot = () => {
    return useQuery(['bloghot'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListPostPriority?hastag=Blog`);
        return response.data;
    });
};

//search tour keyword
export const Searchtour = (key) => {
    return useQuery(['searchtour', key], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/SearchTour?TourKey=${key}`);
        return response.data;
    });
};

//search blog keyword
export const Searchblog = (key) => {
    return useQuery(['searchblog'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/SearchListPost?searchkey=${key}&CurrentPage=1`);
        return response.data;
    });
};

//đăng kí nhận email 
export const Subcrise = (email) => {
    return useQuery(['subcrisemail', email], async () => {
        const response = await axios.post(`http://vnxpedia.3i.com.vn/TravelAPI/InsertSubcrible?Email=${email}`);
        return response.data;
    });
};

//lấy list hotel
export const ListHotel = () => {
    return useQuery(['listhotel'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/LuxuryHotel`);
        return response.data;
    });
};

//lấy list transfer
export const ListTransfer = (type, value) => {
    return useQuery(['listtransfer', type, value], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/LuxuryTransfer?type=${type}&value=${value}`);
        return response.data;
    });
};

//Lấy 1 hotel/transfer
export const GetLuxservice = (id) => {
    return useQuery(['gethotel/transfer', id], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/PostLuxury?Id=${id}`);
        return response.data;
    });
};

//Lấy list des
export const GetAllDes = () => {
    return useQuery(['getalldes'], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/GetAllDestination`);
        return response.data;
    });
};

//list comment
export const GetComment = (id) => {
    return useQuery(['listcomment', id], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListComment?postid=${id}`);
        return response.data;
    });
};

// //
// export const Tourhot = () => {
//     return useQuery(['tourhot'], async () => {
//         const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/Hottour`);
//         return response.data;
//     });
// };

// //
// export const Tourhot = () => {
//     return useQuery(['tourhot'], async () => {
//         const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/Hottour`);
//         return response.data;
//     });
// };

