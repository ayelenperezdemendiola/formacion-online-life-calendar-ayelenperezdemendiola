import React from 'react';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const { routerProps, arrMood } = props;
    const { date } = routerProps.match.params;
    console.log(date);
    console.log(arrMood);
    const currentMood = arrMood.find(item => item.date === date);
    console.log(currentMood);
    return (
        <>
            <Link to="/">Volver</Link>
            {currentMood ?
                <li className={currentMood.mood === 'happy' ? "happy--item" : "sad--item"} key={currentMood.date}>
                    <div className={currentMood.mood === 'happy' ? "happy--container" : "sad--container"}>{currentMood.mood === 'happy' ? ":)" : ":("}</div>
                    <p className="item--date">{currentMood.date}</p>
                    {currentMood.mood === 'happy' ?
                        <p className="happy--message">{currentMood.message}</p>
                        :
                        ''
                    }
                </li>
                :
                <p>Debes cliquear sobre una carita</p>
            }
        </>
    );
}

export default Detail;