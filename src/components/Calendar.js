import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
    const savedMood = JSON.parse(localStorage.getItem('dayBydayMood'));
    return (
        <div className="mood__container">
            <Link to="/editor">
                <button type="button" className="btn to--editor">+</button>
            </Link>          
            {savedMood === null ? '¿Qué tal a ido tu día?' : 
            <ul className="mood__list">
                {savedMood.map((item, index) => {
                    return (
                        <li className={ item.mood === 'happy' ? "happy--item" : "sad--item" } key={index}>
                            <div className={ item.mood === 'happy' ? "happy--container" : "sad--container" }>{ item.mood === 'happy' ? ":)" : ":(" }</div>
                            <p className="item--date">{item.date}</p>
                            <p className="happy--message">{item.message}</p>
                        </li>
                    );
                })}
            </ul>
            }
        </div>
    );
}

export default Calendar;