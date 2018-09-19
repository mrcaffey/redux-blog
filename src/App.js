import React from 'react';
import Blogs from './Blogs';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

const App = () => ( 
 <div className="App">
 <Blog />
 </div>
 <Route exact path="/" component={Home} />
 <Route exact path="/blogs" component={Blogs} />
)

export default App