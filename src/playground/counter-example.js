class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    try {
      const count = JSON.parse(localStorage.getItem('count'));
      if (!isNaN(count)){
        this.setState(() => ({count}));
      }
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    // let count = this.state.count;
    // count++;
    // this.setState({count});

    //other way to do it - NEWER, better to use it
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    }, () => console.log('ADDED!' + this.state.count));
  }
  handleMinusOne() {
    let count = this.state.count;
    count--;
    this.setState({count});
  }
  handleReset() {
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


//PREV VERSION without states
// let count = 0
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// }
//
// renderCounterApp();

//FIRST VERSION
// console.log("App is running!");
//
// //JSX - JavaScript
//
// const app = {
//   title: 'GoodDevs',
//   subtitle: 'Undiscovered',
//   options: ['One', 'Two']
// }
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {/* {app.subtitle ? <p>{app.subtitle}</p> : null } */}
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options: '+ app.options : 'No options'}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );
//
// const user = {
//   name: 'Andrew',
//   age: '26',
//   location: 'Philadelphia'
// }
//
// function getLocation(location){
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// // var supra = (
// //   <div>
// //     <p>uygjhfghjf</p>
// //   </div>
// // );
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
//
// const appRoot = document.getElementById('app');
// //var appRootTwo = document.getElementById('id');
//
//
// ReactDOM.render(template, appRoot);
// //ReactDOM.render(templateTwo, appRootTwo);
