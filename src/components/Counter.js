import { Component } from 'react'

import { counterAction } from '../store/counter';
import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const incrementHandler = () => {
    //dispatch({type:'increment'})
    dispatch(counterAction.increment());
  }
  const increaseHandler = () => {
    //dispatch({type:'increase', amount: 5})
    dispatch(counterAction.increase(5)) // = {type: some_unique_identifier, payload: 5}
  }
  const decrementHandler = () => {
    //dispatch({type:'decrement'})
    dispatch(counterAction.decrement());
  }
  const toggleCounterHandler = () => {
    //dispatch({type:'toggle'})
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//-----------CLASS BASE OPTION--------------//

// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: dispatch({type:'increment'}),
//     decrement: dispatch({type:'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
