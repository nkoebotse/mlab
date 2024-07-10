import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/layout';
import EmployeeId from './Components/EmployeeId';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
  <Navbar/>
  <EmployeeId/>
  

  </BrowserRouter> )
}
 
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

