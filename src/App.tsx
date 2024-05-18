import './App.css'
import CardComponent from './components/CardComponent'
import CardDeck from './lib/CardDeck'


const App = () => {
  const onClick = () => {
    const deck = new CardDeck();
  }

  return (
    <>
    <div className='playingCards faceImages'>
      <CardComponent rank='4' suit='hearts' />
      <button type='button' onClick={onClick}>blabla</button>
    </div>
    </>
  )
}

export default App
