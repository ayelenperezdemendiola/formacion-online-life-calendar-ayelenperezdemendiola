import React from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import { Route, Switch } from 'react-router-dom';

//pendientes:
// - que solo se pueda poner un mensaje si es un día feliz

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrMood: [],
      todayMood: {
        date: '',
        mood: '',
        message: ''
      }
    }
  }
  getDate = (e) => {
    const currentDate = e.currentTarget.value;
    this.setState( prevState => {
      return {
        todayMood: {
          ...prevState.todayMood,
          date: currentDate
        }
      }
    })
  }

  getMood = (e) => {
    const currentMood = e.currentTarget.value;
    this.setState(prevState => {
      return {
        todayMood: {
          ...prevState.todayMood,
          mood: currentMood
        }
      }
    })
  }


  getMessage = (e) => {
    const currentMessage = e.currentTarget.value;
    this.setState( prevState => {
      return {
        todayMood: {
          ...prevState.todayMood,
          message: currentMessage
        }
      }
    })
  }

  saveDayMood = () => {
   const { arrMood, todayMood } = this.state;
   const newArr = [...arrMood, todayMood];
   this.setState({
     arrMood : newArr
    })
    localStorage.setItem('dayBydayMood', JSON.stringify(newArr));
    // si lo hago con this.state.arrMood no me lo pinta...why?
  }

  render() {
    const { arrMood, todayMood } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Calendar
                arrMood = {arrMood}
                />
            );
          }} />
          <Route path="/editor" render={() => {
            return (
              <Editor
                getMood = {this.getMood}
                getDate = {this.getDate}
                getMessage = {this.getMessage}
                saveDayMood = {this.saveDayMood}
                todayMood = {todayMood}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
