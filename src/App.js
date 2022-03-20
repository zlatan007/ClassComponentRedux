import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { connect, Provider } from 'react-redux';
import store from './Store/store';
import { addvalue,subvalue, mulvalue } from './Store/action/action';

// const App = (props) => {
//   const { value } = props;
//   return (
//     <>
//       <button onClick={addvalue}>-</button>
//         {value}
//       <button>+</button>
//       App
//     </>
//   )
// }

class App extends Component {
  render() {
    
    const { value, addvalue,subvalue,mulvalue } = this.props;
    return (
      <>
        <button onClick={() => subvalue(5)}>-</button>
          {value}
        <button onClick={() => addvalue(5)}>+</button>
        <button onClick={() => mulvalue(2)}>*</button>
       App
     </>
    )
  }
}


const mapStateToProps = state => ({
  value: state.add.value,
});

const mapDispatchToProps = {
  addvalue,
  subvalue,
  mulvalue,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)  