import './App.scss'

function App() {

  return (
    <div className='card'>
      <div className='topSection'>
        <img src='src/assets/radiohead-album-cover.jpg' />
        <div className='text'>
          <h1>Radiohead</h1>
          <p>Everything in the right place</p>
          <p>(2000)</p>
        </div>
      </div>
      <div className='bottomSection'>
        <p>Rate this album</p>
        <p className='stars'>☆☆☆☆☆</p>
      </div>
    </div>
  )
}

export default App
