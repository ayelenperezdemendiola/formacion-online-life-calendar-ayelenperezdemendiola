import React from 'react';
import './styles/App.css';
import Editor from './components/Editor';
import Calendar from './components/Calendar';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: '',
      date: '',
    }
  }

  getMood = (e) => {
    const currentMood = e.currentTarget.value;
    console.log(currentMood)
    this.setState({
      mood: currentMood
    })
  }

  getDate = (e) => {
    const currentDate = e.currentTarget.value;
    console.log (currentDate)
    this.setState({
      date: currentDate
    })
  }

  getMessage = (e) => {
    const currentMessage = e.currentTarget.value;
    console.log (currentMessage)
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={ Calendar } />
          <Route path="/editor" render={()=>{
            return (
              <Editor
                getMood = {this.getMood}
                getDate = {this.getDate}
                getMessage = {this.getMessage}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
