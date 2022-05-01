import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Character from '../character/character'
import '@fontsource/inter'
import '@fontsource/nova-square'
import './app.css'

function App() {
  return(
    <div className="vackground container">
      <Header />
      <Character />
    </div>
  )
}

export default App
