import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Highlight from '@/views/Tourdetail/Highlight';


const ExportPdf = (data) => (
    <PDFDownloadLink document={<p> Text</p>
        // title={data.TourName} destination={data.Destination} long={data.DETAIL.length} highlight={data.Hightlight} click={setBook} 
    } fileName="example.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
);

export default ExportPdf;
