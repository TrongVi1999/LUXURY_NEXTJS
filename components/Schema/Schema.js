import React from 'react';
import { Helmet } from 'react-helmet';

const MySchemaData = () => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Travel tour",
            "image": "https://vnxpedia.3i.com.vn/uploads/Images/phong-canh-thun-lung-bac-son-viet-nam-dep-nhu-tranh-ve_030119832%20(1)_a0137cbf.jpg",
            "description": "Travel tours Vietnam and Indochine",
            "offers": {
              "@type": "Offer",
              "url": "https://www.luxuryvietravel.com/destination/VietNam",
              "priceCurrency": "USD",
              "price": "500",
              "priceValidUntil": "2022-04-02",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Luxuryvietravel",
                "url": "https://www.luxuryvietravel.com/"
              }
            }
          }
        `}
            </script>
        </Helmet>
    );
};

export default MySchemaData;
