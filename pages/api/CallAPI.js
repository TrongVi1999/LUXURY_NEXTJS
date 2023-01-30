import React from 'react';
import axios from 'axios';

export const Alltour = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable',
        type: 'json',
    });

export const Gettour = (tourcode) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=${tourcode}`,
        type: 'json',
    });

export const Hottour = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/Hottour',
        type: 'json',
    });

export const Tourtype = (tourtype) =>
    axios({
        method: 'post',
        url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourtype=${tourtype}`,
        type: 'json',
    });

export const AllCountry = () =>
    axios({
        method: 'post',
        url: 'https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=en_US',
        type: 'json',
    });



