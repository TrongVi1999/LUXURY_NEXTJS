import { useApppContext } from "@/pages/_app";

export const InsertLink = (data) => {
    if (!data) {
        return '';
    }

    let listLocal = useApppContext().listLocal;
    let listNamelocal = useApppContext().listNamelocal;
    let Newdata = data;

    listNamelocal.forEach((d, i) => {
        Newdata = Newdata.replace(new RegExp(d, "g"), `<a href=\"https://www.luxuryvietravel.com/destination/${Object.keys(listLocal).find(b => listLocal[b].includes(d))}destination=${d}\" title=\"destination - ${d}\">${d}</a>`);
    });

    return Newdata;
}

  //    Newdata=Newdata.replace(/d/g, '<a href=\"https://www.luxuryvietravel.com/destination/VietNamdestination=Hanoi\" title=\"destination - Ha Noi\">Ha Noi</a>')