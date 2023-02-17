export const GetlistImg = (data) => {
    const Newlist = data.split('|');
    const EndList = Newlist.map(d => `https://vnxpedia.3i.com.vn` + d)
    return EndList
}