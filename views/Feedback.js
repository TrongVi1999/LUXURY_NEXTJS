import Image from 'next/image';
import React from 'react';
import feedback from '../public/feedback.png';
import style from './feedback.module.scss';

const Feedback = () => {
    return (
        <div>
            <div className={cv('text')}>
                <span> &rdquo;</span>
                <p className={cv('text1')}>
                    Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Sed ullamcorper sapien lacus, eu posuere odio luctus non. Nulla lacinia, eros vel fermentum
                    consectetur, risus p
                </p>
                <h5 className={cv('text2')}>JOHN SMITH</h5>
            </div>
            <div className={cv('img')}>
                <Image src={feedback} />
            </div>
        </div>
    );
};

export default Feedback;
