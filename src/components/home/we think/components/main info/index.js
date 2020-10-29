import React from 'react';
import Styles from './maininfo.module.scss';

const MainInfo = props => {
    return (
        <div className = {`${Styles.info}`}>
            <div className = {`${Styles.info__container}`}>
                <h3 className =  {`${Styles.info__heading}`}>We think <br /><span>big</span></h3>
                <p className = {`${Styles.info__title}`}>Web Design Company in Manchester</p>
                <p className = {`${Styles.info__description}`}>
                    At SPINX Digital, our team of innovators
                    and digital marketers in tech and design
                    bring skills above and beyond the ordinary
                    to every project. Our Los Angeles web design 
                    and development team is involved in professional 
                    B2B and B2C web design and development,
                    mobile applications,
                    digital strategy, user experience, advertising,
                    social media, content management systems, and 
                    email marketing initiatives.
                </p>
            </div>
        </div>
    )
}
export default MainInfo