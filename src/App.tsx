import './App.css'
import CardComponent from './components/CardComponent'


const App = () => {

  return (
    <>
    <div className='playingCards faceImages'>
      <CardComponent rank='4' suit='hearts' />
    </div>
    </>
  )
}

export default App
