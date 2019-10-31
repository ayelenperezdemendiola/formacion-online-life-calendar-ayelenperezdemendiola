import React from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import { Route, Switch } from 'react-router-dom';

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
    console.log(currentDate)
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
    console.log(currentMood)
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
    console.log(currentMessage)
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
   console.log (newArr);
   this.setState({
     arrMood : newArr
   })
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route path="/editor" render={() => {
            return (
              <Editor
                getMood = {this.getMood}
                getDate = {this.getDate}
                getMessage = {this.getMessage}
                saveDayMood = {this.saveDayMood}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
