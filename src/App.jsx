import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'
import Layout from './components/Layout'
import Sponsers from './components/Sponsers'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Mainpage></Mainpage>
        },
        {
          path:"/sponsers",
          element:<Sponsers></Sponsers>
        }
      ]
    }
  ]
  )


  return (
    <>
   <RouterProvider router={router}>

   </RouterProvider>
    </>
  )
}

export default App
