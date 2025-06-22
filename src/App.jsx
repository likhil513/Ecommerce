import './App.css'
import Header from './components/Header'
import { Routes,Route, Router} from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
