import ReactDOM from 'react-dom'
import React from 'react';
import "./app.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="saludo" >Hello Marzio</div>
    );
  }
}
