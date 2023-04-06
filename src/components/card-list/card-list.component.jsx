import { Component } from "react";

import './card-list.style.css'
import Card from "../card-component/card.component";

class CardList extends Component {
  render() {
    console.log('render from cardList')
    const {monsters} = this.props;

    return (
      <div className='card-list'>
        {monsters.map(monster => {
            const { name, email, id} = monster;
            return <Card monsterDetails = {[name, email, id]} />
            })}
      </div>
    );
  }
}

export default CardList;
