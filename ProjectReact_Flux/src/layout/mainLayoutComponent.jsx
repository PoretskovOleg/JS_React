'use strict';

import Menu from '../components/menu/menuComponent';
import Footer from '../components/footer/footerComponent';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.items = [
      {
        item: 'Главная',
        href: "/"
      },
      {
        item: 'Статьи',
        href: "/articles" 
      },
      {
        item: 'О нас',
        href: "/about" 
      },
      {
        item: 'Новости',
        href: "/news" 
      },
      {
        item: 'Регистрация',
        href: "/registration" 
      }
    ]
  }
  render() {
    return (
      <div>
        <Menu items = {this.items} />
          {this.props.children}
        <Footer />        
      </div>
    );
  }
};