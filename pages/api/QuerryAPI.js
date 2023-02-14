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
