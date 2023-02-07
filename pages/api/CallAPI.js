import React from 'react';
import axios from 'axios';
import qs from 'qs';

//lấy tất cả tour
export const Alltour = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable',
        type: 'json',
    });

//lấy 1 tour
export const Gettour = (tourcode) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=${tourcode}`,
        type: 'json',
    });

//lấy tour hot
export const Tourhot = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/Hottour',
        type: 'json',
    });

//lấy các tour theo type    
export const Tourtype = (tourtype) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourtype=${tourtype}`,
        type: 'json',
    });

//lấy danh sách country
export const CallAllcountry = async (setdata) => {
    const response = await axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=en_US',
        type: 'json',
    });
    if (response.status == 200) {
        setdata(response.data.Object);
    }
}

export const AllCountry = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=en_US',
        type: 'json',
    });

//lấy tất cả blog : 
export const Allblog = (page) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/ListPost?hastag=Blog&CurrentPage=${page}`,
        type: 'json',
    });

//Lấy 1 blog"
export const Getblog = (id) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/ListPostWithId?Id=${id}`,
        type: 'json',
    });


//Lấy tour theo location"
export const Gettourdestination = (location) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/AllTourDestination?destination=${location}`,
        type: 'json',
    });

//Lấy tour theo country
export const Gettourcountry = (country) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/AllTourRegion?region=${country}`,
        type: 'json',
    });

//rate tour
export const Ratetour = (tourcode, rate, ip) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/InsertRatingTour?TourCode=${tourcode}&Rate=${rate}&Ip=${ip}`,
        type: 'json',
    });

//comment blog
export const Commentblog = (id, reply, username, comment) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/InsertCommentOnPost?PostId=${id}&ParentId=${reply}&UserName=${username}&Comment=${comment}`,
        type: 'json',
    });


//blog nổi bật
export const Bloghot = () =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/ListPostPriority?hastag=Blog`,
        type: 'json',
    });

//search tour
// export const Searchtour = async(key,setdata) =>{
//    const response =await axios({
//         method: 'post',
//         url: `https://vnxpedia.3i.com.vn/TravelAPI/SearchTour?TourKey=${key}`,
//         type: 'json',
//     });
//      if(response.data.status==200){
//         setdata(response.data.Object);
//      }
// }
export const Searchtour = (key) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/SearchTour?TourKey=${key}`,
        type: 'json',
    });

//search blog
export const Searchblog = (key) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/SearchListPost?searchkey=${key}&CurrentPage=1`,
        type: 'json',
    });

//đăng kí nhận email 
export const Subcrise = (email) =>
    axios({
        method: 'post',
        url: `http://vnxpedia.3i.com.vn/TravelAPI/InsertSubcrible?Email=${email}`,
        type: 'json',
    });

//super filter
// https://vnxpedia.3i.com.vn/TravelAPI/SearchTourAdvance?TagTour=vietnam&tourtype=TYPE_BEACH  &fromcost=100&endcost=1200&country=laos&destination=Mekong Delta
export const Superfilter = (Country, Destination, Tourtype, Fromcost, Endcost, Tagtour) =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/SearchTourAdvance',
        data: qs.stringify({
            country: (Country ? Country : ''),
            destination: (Destination ? Destination : ''),
            tourtype: (Tourtype ? Tourtype : ''),
            // season: (Season ? Season : ''),
            // group: (Group ? Group : ''),
            fromcost: (Fromcost ? Fromcost : 0),
            endcost: (Endcost ? Endcost : 15000),
            TagTour: (Tagtour ? Tagtour : ''),
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    });

//lấy list hotel https://vnxpedia.3i.com.vn/TravelAPI/LuxuryHotel
export const ListHotel = () =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/LuxuryHotel`,
        type: 'json',
    });

//Lấy 1 hotel
export const GetHotel = (id) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/PostLuxury?Id=${id}`,
        type: 'json',
    });
