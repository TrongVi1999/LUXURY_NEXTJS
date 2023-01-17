import classNames from 'classnames/bind';

import style from './section.module.scss';

const cx = classNames.bind(style);

function Section({ className, backgroundImg, isShadowBackground, notPadding, gapBox, isWrap, children }) {
    const clases = cx('wrapper', {
        [className]: className,
        notPadding: notPadding,
        isWrap: isWrap,
    });

    return (
        <section
            className={clases}
            style={{
                gap: `${gapBox}rem`,
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'border-box',
            }}
        >
            {isShadowBackground && <div className={cx('shadow')}></div>}
            {children}
        </section>
    );
}

export default Section;
