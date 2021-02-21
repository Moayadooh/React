import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SliderDemo from './Slider';
import TablePagination from './Table';
import Modal from './Modal';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SliderDemo /> */}
    {/* <TablePagination /> */}
    <Modal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
