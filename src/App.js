import React from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

//pendientes:
//que solo se pueda guardar una por día

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrMood: [],
      dateDetail: '',
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

  componentDidMount(){
    const savedMood = JSON.parse(localStorage.getItem('dayBydayMood'));
    this.setState({
      arrMood: savedMood
    })
  }

  getDetailDate = (e) =>{
    const currentDate = e.currentTarget.dataset.date;
    this.setState({
      dateDetail: currentDate
    })
  }

  render() {
    const { arrMood, todayMood, currentDate } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Calendar
                arrMood = {arrMood}
                getDetailDate = {this.getDetailDate}
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
          <Route path="/mood/:date" render ={(routerProps)=>{
            return (
              <Detail
              routerProps = {routerProps}
              arrMood = {arrMood}
              />
            );
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
