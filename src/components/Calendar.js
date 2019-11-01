import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = (props) => {
    const { getDetailDate, arrMood} = props;
    return (
        <div className="mood__container">
            <Link to="/editor">
                <button type="button" className="btn to--editor">+</button>
            </Link>          
            {arrMood === null ? '¿Qué tal a ido tu día?' : 
            <ul className="mood__list">
                {arrMood.map((item, index) => {
                    return (
                        <Link to={`/mood/${item.date}`}>
                        <li className={ item.mood === 'happy' ? "happy--item" : "sad--item" } key={index} data-date={item.date} onClick={getDetailDate}>
                            <div className={ item.mood === 'happy' ? "happy--container" : "sad--container" }>{ item.mood === 'happy' ? ":)" : ":(" }</div>
                            <p className="item--date">{item.date}</p>
                            <p className="happy--message">{item.message}</p>
                        </li>
                        </Link>
                    );
                })}
            </ul>
            }
        </div>
    );
}

export default Calendar;