class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      title: 'Visibility Toggle',
      info: 'Osama i tak Cie zapierdoli'
    }
    this.handleToggleVisible = this.handleToggleVisible.bind(this);
  }

  handleToggleVisible() {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisible}>{this.state.checked ? 'Hide info' : 'Show info'}</button>
        {this.state.checked && <p>{this.state.info}</p>}
      </div>
    );
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// console.log('App is working!');
// let checked = false;
//
// const app = {
//   title: 'Visibility Toggle',
//   info: 'Osama i tak Cie zapierdoli'
// }
//
// const showInfo = () => {
//   checked = !checked;
//   renderApp();
// };
//
// const appRoot = document.getElementById('app');
// const renderApp = () => {
//   const body = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={showInfo}>{checked ? "Hide info" : "Show info"}</button>
//       {checked && <p>{app.info}</p>}
//     </div>
//   );
//   ReactDOM.render(body, appRoot);
// };
//
// renderApp();






// class Toggle extends React.Component {
//   constructor() {
//     super();
//     this.state = {showDiv: false};
//
//   }
//   toggleVisibility() {
//     const status = !this.state.showDiv;
//     this.setState({showDiv: status}, () => console.log(this.state));
//   }
//   showHidden() {
//     if(this.state.showDiv){
//       return (
//         <p>SURPRISE</p>
//       );
//     }
//     console.log('WOOOW');
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleVisibility.bind(this)}>CLICK</button>
//         {this.showHidden()}
//       </div>
//     );
//   }
// }
