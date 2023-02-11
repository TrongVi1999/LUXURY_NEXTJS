import { useEffect } from 'react';
import { useRouter } from "next/router";

const ScrollToTop = (props) => {
    const location = useRouter();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;