'use strict';

export default class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.nameDeveloper = "Poretskov Oleg" 
  }

  printDate() {
    let date = new Date();
    let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
    let month = date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
    let year = date.getFullYear();
    let nowDate = `Сегодня ${day} - ${month} - ${year}`;
    alert(nowDate);
  }

  render() {
    return (
      <div onClick = {this.printDate}>
        <h2>Второй компонент!</h2>
        <span>
          Разработчик - {this.nameDeveloper}
        </span>
      </div>
    );
  }
};