import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios';
import qs from 'qs';
import { useState } from 'react';
import { toastError, toastSuccess } from '@/components/Toast';


//super filter
export const Superfilter = (Country, Destination, Tourtype, Fromcost, Endcost, Tagtour, Season, Group) => {
    return useQuery(
        ['searchTour', Country, Destination, Tourtype, Fromcost, Endcost, Tagtour, Season, Group],
        async () => {
            const response = await axios.post('https://vnxpedia.3i.com.vn/TravelAPI/SearchTourAdvance', qs.stringify({
                country: (Country ? Country.split('dest')[0] : ''),
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
            console.log(response.data);
            return response.data.Object.filter(d => d.TourType != 'TYPE_MICE');
        }
    );
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
    },
        {
            enabled: false,
        }
    );


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
        return response.data.Object;
    },
        { enabled: false }
    );
};

//search blog keyword
export const Searchblog = (key) => {
    return useQuery(['searchblog', key], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/SearchListPost?searchkey=${key}`);
        return response.data.Object;
    },
        { enabled: false }
    );
};

//đăng kí nhận email 
export const Subcrise = (email) => {
    return useQuery(['subcrisemail', email], async () => {
        const response = await axios.post(`http://vnxpedia.3i.com.vn/TravelAPI/InsertSubcrible?Email=${email}`);
        return response.data;
    });
};

//lấy list hotel
export const ListHotel = (tag) => {
    return useQuery(['listhotel', tag], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/LuxuryHotel`);
        return response.data;
    });
};

//lấy list transfer
export const ListTransfer = (type, value) => {
    return useQuery(['listtransfer', type, value], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/LuxuryTransfer`);

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
export const GetComment = (id, load) => {
    return useQuery(['listcomment', id, load], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/ListComment?postid=${id}`);
        return response.data;
    });
};

//Login
export const Login = (username, password) => {
    return useQuery(['login', username, password], async () => {
        const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/LoginXpedia`,
            qs.stringify({
                UserName: username,
                Password: password,
            })
        );
        return response.data.Object;
    },
        { enabled: false })
}
//edit booking default Id, Country, StartDate, FullName, Adult, Children, Children1, Children2, Hotel, Email, Phone, Note, CheckIn, Status
// export const EditBookingDefault = (data) => {
//     return useQuery(['editbooking', data],
//         async () => {
//             const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking`, qs.stringify(data
//             ),
//                 {
//                     headers: {
//                         'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//                     },
//                 }
//             );
//             console.log('data', data);
//             console.log('resonse', response)
//             return response.data;
//         }

//     );
// };
export function EditBookingDefault(data) {
    return useMutation(
        async () => {
            const response = await axios.post(
                `https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking`,
                qs.stringify(data),
                {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                }
            );
            console.log("data", data);
            console.log("response", response);
            return response.data;
        }
    );
}

//edit booking MICE
export const EditBookingMice = (Id, Country, EventName, Lenght, Company, StartDate, FullName, Adult, Perpose, Destination, Require, Email, Phone, Note, Subcrible, Status) => {
    return useQuery(['editbooking'],
        async () => {
            const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking`, qs.stringify({
                Id,
                Country: (Country ? Country : ''),
                EventName: (EventName ? EventName : ''),
                StartDate: (StartDate ? StartDate : ''),
                Lenght: (Lenght ? Lenght : ''),
                Company: (Company ? Company : ''),
                FullName: (FullName ? FullName : ''),
                Adult: (Adult ? Adult : ''),
                Perpose: (Perpose ? Perpose : ''),
                Destination: (Destination ? Destination : ''),
                Require: (Require ? Require : ''),
                Email: (Email ? Email : ''),
                Phone: (Phone ? Phone : ''),
                Note: (Note ? Note : ''),
                Subcrible: (Subcrible ? Subcrible : ''),
                Status: (Status ? Status : ''),
            }));
            return response.data;
        },
        {
            enabled: false,
        }
    );
};

//edit booking transfer
export const EditBookingTransfer = (Id, Country, StartDate, FullName, Adult, Babycarseat, Children, Status, Email, Phone, Note, DropOff, PickUp) => {
    return useQuery(['editbooking'],
        async () => {
            const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking`, qs.stringify({
                Id,
                Country: (Country ? Country : ''),
                Adult: (Adult ? Adult : ''),
                FullName: (FullName ? FullName : ''),
                StartDate: (StartDate ? StartDate : ''),
                DropOff: (DropOff ? DropOff : ''),
                PickUp: (PickUp ? PickUp : ''),
                Email: (Email ? Email : ''),
                Phone: (Phone ? Phone : ''),
                Note: (Note ? Note : ''),
                Babycarseat: (Babycarseat ? Babycarseat : ''),
                Children: (Children ? Children : ''),
                Status: (Status ? Status : ''),
            }));
            return response.data;
        },
        {
            enabled: false,
        }
    );
};

//edit booking hotel
export const EditBookingHotel = (Id, Country, FullName, Adult, Email, Phone, Note, CheckIn, CheckOut) => {
    return useQuery(['editbooking'],
        async () => {
            const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking`, qs.stringify({
                Id,
                Country: (Country ? Country : ''),
                Adult: (Adult ? Adult : ''),
                FullName: (FullName ? FullName : ''),
                Email: (Email ? Email : ''),
                Phone: (Phone ? Phone : ''),
                Note: (Note ? Note : ''),
                CheckIn: (CheckIn ? CheckIn : ''),
                CheckOut: (CheckOut ? CheckOut : ''),
                TypeRoom: (TypeRoom ? TypeRoom : ''),
                Status: (Status ? Status : ''),
            }));
            return response.data;
        },
        {
            enabled: false,
        }
    );
};


//edit user infor

export const EditUserInfor = (Newinfor) => {
    return useQuery(['edituserinfor'],
        async () => {
            const response = await axios.post(`https://vnxpedia.3i.com.vn/TravelAPI/UpdateInfo`, qs.stringify
                (Newinfor),
            );
            if (response.data.Error === true) {
                toastError('Error!');
            } else {
                toastSuccess('Successfully changed information.');
                localStorage.setItem('VNXUser', JSON.stringify({ ...data, FullName: Newinfor.GivenName, Gender: Newinfor.Gender, BirthDay: Newinfor.Reason, About: Newinfor.Description, Address: Newinfor.Note, PhoneNumber: Newinfor.PhoneNumber, Email: Newinfor.Email }));
                setuser({ ...data, FullName: Newinfor.GivenName, Gender: Newinfor.Gender, BirthDay: Newinfor.Reason, About: Newinfor.Description, Address: Newinfor.Note, PhoneNumber: Newinfor.PhoneNumber, Email: Newinfor.Email });
            }
            return response.data;
        },
        {
            enabled: false,
        }
    );
};
