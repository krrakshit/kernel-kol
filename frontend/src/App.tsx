import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Landing } from './screens/Landing'
import './App.css'

function App() {
  return (
    <div className='h-screen bg-slate-950' >
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Landing />} />
      <Route path ="/login" element={<h1 className='text-3xl font-bold underline'>Login Page</h1>} />
    </Routes>
    </BrowserRouter>
    </div >
      
  )
}

export default App
