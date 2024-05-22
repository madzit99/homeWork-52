import { useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'
import Card from './lib/Card'
import CardDeck from './lib/CardDeck'
import PokerHand from './lib/PokerHand'


const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
  const [cardStatus, setCardStatus] = useState(false);

  const onClick = () => {
    const deck = new CardDeck();
    const playerCards = deck.getCards(5);
    console.log(playerCards);
    setCards(playerCards);
    setCardStatus(true);
  };

  let content;


  const combination = new PokerHand(cards);
  content = combination.getOutcome();

  return (
    <>
      <button type='button' onClick={onClick}>Раздать карты</button>
      <div className='playingCards faceImages'>

      <div className='playingCards faceImages'>
        {cards.map((card, index) => (
          <CardComponent key={index} rank={card.rank} suit={card.suit} />
        ))};
      </div>
      {cardStatus && <p>{content}</p>};
      </div>
      
    </>
  );
};

export default App;
