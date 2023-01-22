import React from 'react'
import "./App.css";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from "./pages/Home/Home"
import Movies from './pages/MovieDetails/Movies'
import MovieList from './components/MovieList/MovieList'

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
        <Header/>
        <Routes>
    
            <Route index element={<Home/>}/>
            <Route path="movie/:id" element={<Movies />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
        
        </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App