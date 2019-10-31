import React from 'react';

const Editor = (props) => {
    const { getMood, getDate, getMessage, saveDayMood } = props;
    return (
        <form action="/monthly--mood" className="app__form" method="get">
            <div className="form__container">
                <label className="form__field--date" htmlFor="date">Fecha</label>
                <input type="date" className="form__input--date" id="date" min="2019/10/31" max="2030/10/31" onChange={getDate}/>
            </div>
            <div className="form__container">
                <fieldset>
                    <legend>Estado</legend>
                    <label className="form__mood" htmlFor="happy">{`:)`}
                        <input
                            id="happy"
                            type="radio"
                            value="happy"
                            name="mood"
                            onChange={getMood}
                        />
                    </label>
                    <label className="form__mood" htmlFor="sad">{`:(`}
                        <input
                            id="sad"
                            type="radio"
                            value="sad"
                            name="mood"
                            onChange={getMood}
                        />
                    </label>
                </fieldset>
            </div>
            <div className="form__container">
                <label className="form__description" htmlFor="description">Mensaje</label>
                <input type="text" className="form__field--description" id="description" placeholder="¿Por qué es un buen día?" onChange={getMessage}/>
            </div>
            <button className="btn save" type="button" onClick={saveDayMood}>Guardar</button>
            <button className="btn cancel" type="button">Cancelar</button>
        </form>
    );
}

export default Editor;