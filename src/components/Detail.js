import React from 'react';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const { routerProps, arrMood } = props;
    const { date } = routerProps.match.params;
    const currentMood = arrMood.find(item => item.date === date);
    return (
        <>
        <div className="detail__general--container">
            <Link to="/">Volver</Link>
            {currentMood ?
                <div className="detail__container">
                    <div className={currentMood.mood === 'happy' ? "happy--container container" : "sad--container container"}>{currentMood.mood === 'happy' ? ":)" : ":("}</div>
                    <p className="item--date">{currentMood.date}</p>
                        <p className="happy--message">{currentMood.message}</p>
                </div>
                :
                <p>Debes cliquear sobre una carita</p>
            }
        </div>
        </>
    );
}

export default Detail;