import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom'
import Layout from "./Layout.jsx"
import About from "./components/About/About.jsx"
import User from "./components/User/User.jsx"
import Github from "./components/Github/Github.jsx"
import {githubloaders} from "./components/Github/Github.jsx"

// const router = createBrowserRouter([
//   {
    
//       path:"/",
//       element:<Layout/>,
//       children:[
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"user/:userid",
//           element:<User/>
//         },
//         {
//           loader:{githubloaders},
//           path:"github",
//           element:<Github/>
//         }
//       ]
    
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
    <Route path='About' element={<About/>}/>
    <Route path='user/:userid' element={<User/>}/>
    <Route
    loader={githubloaders} 
    path='github' element={<Github/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
