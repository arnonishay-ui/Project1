import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieCard from './components/MovieCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MovieCard title = "Inside Out" year ={2024} genre= "Animation" rating = {7.6}/>
    <MovieCard title = "Spider-Man: Across The Spider-Verse" year = {2023} genre = "animation" rating = {8.5}/>
    <MovieCard title = "Fight Club" year={1999} genre = "drama" rating ={8.8}/>
  </StrictMode>,
)
