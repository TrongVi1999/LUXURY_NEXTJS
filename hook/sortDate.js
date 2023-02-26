export const sortDate = (data) => {

    return data.sort((date1, date2) => date2.date_post - date1.date_post);

}
