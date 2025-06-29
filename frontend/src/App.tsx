import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<h1 className='text-3xl font-bold underline'>Hello world!</h1>} />
      <Route path ="/login" element={<h1 className='text-3xl font-bold underline'>Login Page</h1>} />
    </Routes>
    
    </BrowserRouter>
    </>
      
  )
}

export default App
