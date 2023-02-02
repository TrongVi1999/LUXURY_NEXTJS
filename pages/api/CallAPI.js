import React from 'react';
import axios from 'axios';


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
export const AllCountry = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=en_US',
        type: 'json',
    });

//lấy tất cả blog : 
export const Allblog = () =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/ListPost?language=en_US&hastag=Blog`,
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


