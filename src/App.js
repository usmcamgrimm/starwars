import Header from './components/Header'
import Character from './components/Character'

function App() {
  return(
    <div className="bg-[url('./images/star-lines.jpg')] w-full h-screen bg-cover bg-center">
      <div className="container">
        <Header />
        <Character />
      </div>
    </div>
  )
}

export default App
