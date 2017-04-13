'use strict';

import {Link} from 'react-router';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1> Данная страница находится в разработке </h1>
        <p> Перейти на <Link to="/"> Главную страницу </Link> </p>
      </div>
    );
  }
};