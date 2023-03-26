import '@/styles/globals.scss';
import Layout from '../layout/Layout';
import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router';
import { createContext } from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { GetSocial } from './api/CallAPI';

const queryClient = new QueryClient();

const AppContext = createContext();



export default function App({ Component, pageProps }) {

    //Lấy trạng thái đăng nhập hiện tại 
    const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;
    const [reload, setreload] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }
    }, [URL]);

    //list Địa danh
    const [listLocal, setlistLocal] = useState();
    const [listNamelocal, setlistNamelocal] = useState();
    const CAllAPIList = async () => {
        const response = await GetSocial(6256);
        if (response.status == 200) {
            let Allarray = Object.values(JSON.parse(response.data.Object[0].intro_text));
            let Newarray = [];
            Allarray.map(d => { Newarray = [...Newarray, ...d] });
            //đây là list tất cả địa danh
            setlistNamelocal(Newarray);
            //đây là list cơ bản lúc đầu có cả quốc gia
            setlistLocal(JSON.parse(response.data.Object[0].intro_text));
        }

    }
    useEffect(() => {
        CAllAPIList();

    }, [])



    const { isFallback, events } = useRouter()

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', defaultLanguage: 'en' }, 'google_translate_element')
    }

    useEffect(() => {
        const id = 'google-translate-script'

        const addScript = () => {
            const s = document.createElement('script')
            s.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
            s.setAttribute('id', id)
            const q = document.getElementById(id)
            if (!q) {
                document.body.appendChild(s)
                window.googleTranslateElementInit = googleTranslateElementInit
            }
        }

        const removeScript = () => {
            const q = document.getElementById(id)
            if (q) q.remove()
            const w = document.getElementById('google_translate_element')
            if (w) w.innerHTML = ''
        }

        isFallback || addScript()

        events.on('routeChangeStart', removeScript)
        events.on('routeChangeComplete', addScript)

        return () => {
            events.off('routeChangeStart', removeScript)
            events.off('routeChangeComplete', addScript)
        }
    }, [])


    console.log('list', listLocal)



    return (
        <QueryClientProvider client={queryClient}>
            <AppContext.Provider value={{ currentUser, setCurrentUser, reload, setreload, listLocal, listNamelocal }} >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        </QueryClientProvider>

    );
}

export function useApppContext() {
    return useContext(AppContext);
}
