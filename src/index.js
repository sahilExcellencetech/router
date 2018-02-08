import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class Try extends React.Component{
  render(){
    return(
      <h1>Hello world</h1>
    );
  }
}

ReactDOM.render(<Try />, document.getElementById('root'));
