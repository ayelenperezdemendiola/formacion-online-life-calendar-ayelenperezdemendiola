import React from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrMood: [],
      dateDetail: '',
      repeat: false,
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
   const filter = newArr.filter(item=> item.date === todayMood.date);
   if (filter.length > 1 ) {
     const index = newArr.findIndex (item => item.date === todayMood.date);
     this.setState({
      repeat: true
    })
     return (
       newArr.splice(index, 1)
     );
   } else {
     this.setState({
       arrMood : newArr
      })
      localStorage.setItem('dayBydayMood', JSON.stringify(newArr));
   }
  }

  componentDidMount(){
    const savedMood = JSON.parse(localStorage.getItem('dayBydayMood'));
    if(savedMood === null){
      console.log('¿qué tal ha ido tu día?')} 
      else {
      this.setState({
        arrMood: savedMood
      })
    }
  }

  getDetailDate = (e) =>{
    const currentDate = e.currentTarget.dataset.date;
    this.setState({
      dateDetail: currentDate
    })
  }

  render() {
    const { arrMood, todayMood, repeat } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Calendar
                arrMood = {arrMood}
                getDetailDate = {this.getDetailDate}
                repeat = {repeat}
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
