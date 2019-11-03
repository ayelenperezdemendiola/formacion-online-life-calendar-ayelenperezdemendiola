import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = (props) => {
    const { getDetailDate, arrMood, repeat } = props;
    return (
        <div className="mood__container">
            <Link className="link" to="/editor">
                <button type="button" className="btn to--editor">+</button>
            </Link>          
                {repeat ? <p>Ya has seleccionado un mood para este día</p> : '' }
            <ul className="mood__list">
                {arrMood.map((item, index) => {
                    return (
                        <Link className="link" to={`/mood/${item.date}`}>
                        <li className={ item.mood === 'happy' ? "happy--item item" : "sad--item item" } key={index} data-date={item.date} onClick={getDetailDate}>
                            <div className={ item.mood === 'happy' ? "happy--container" : "sad--container" }>{ item.mood === 'happy' ? ":)" : ":(" }</div>
                        </li>
                        </Link>
                    );
                })}
            </ul>    
        </div>
    );
}

export default Calendar;