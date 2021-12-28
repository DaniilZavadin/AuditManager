import React from 'react';
import { Link } from 'react-router-dom'
import Inspection from '../components/Inspection/Inspection';

const InspectionsList = () => {

    const getInspectionsData = () => {
        return (
            <div className="inspections-container">
                <Link to="/edit">+</Link>
                <Inspection name={'Kiev'} photo={'https://digital.ihg.com/is/image/ihg/intercontinental-kiev-5927192439-2x1?fit=fit,1&wid=2400&hei=1200&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0'} details={'Lorem ipsum dolor, sit amet consectetur Est temporibus nobis voluptatibus ad quo.'} />
                <Inspection name={'Lviv'} photo={'https://hotel-edem.lviv.ua/wp-content/uploads/2019/03/golovna.jpg'} details={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam iusto debitis sed.'} />
                <Inspection name={'Kharkiv'} photo={'https://upload.wikimedia.org/wikipedia/commons/2/2c/%D0%91%D1%83%D0%B4%D0%B8%D0%BD%D0%BE%D0%BA_%D0%B4%D0%B5%D1%80%D0%B6%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%96%2C_%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2_DJI_0057.jpg'} details={'Magnam iusto debitis sed, eveniet alias perspiciatis, est temporibus nobis voluptatibus ad quo.'} />
            </div >
        )
    }
    return (getInspectionsData());
}

export default InspectionsList;