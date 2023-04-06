import "./card-list.style.css";
import Card from "../card-component/card.component";

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map(monster => {
      const { name, email, id } = monster;
      return <Card monsterDetails={[name, email, id]} />;
    })}
  </div>
);

export default CardList;
