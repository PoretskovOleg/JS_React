'use strict';

export default class Component1 extends React.Component {
  constructor(props) {
    super(props);
    this.class = 'btn'
  }

  clickFunc() {
    console.log("You Cliked Me!!!")
  }

  render() {
    return (
      <div>
        <h1 className = 'Hello'>
          Hello World!!!!
        </h1>
        <button class = {this.class} onClick={this.clickFunc}> Click Me </button>
      </div>
    );
  }
};