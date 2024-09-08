import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import KitchenPage from './stores/pages/KitchenPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchPage from './stores/pages/WatchPage'
import MensPage from './stores/pages/MensPage'
import WomanPage from './stores/pages/WomanPage'
import BooksPage from './stores/pages/BooksPage'
import FurniturePage from './stores/pages/FurniturePage'
import FridgePage from './stores/pages/FridgePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './stores/singles/MobileSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import UserCart from './stores/UserCart'
import WatchSingle from './stores/singles/WatchSingle'
import MensSingle from './stores/singles/MensSingle'
import WomanSingle from './stores/singles/WomanSingle'
import BooksSingle from './stores/singles/BooksSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import SpeakersSingle from './stores/singles/SpeakersSingle'
import TvSingle from './stores/singles/TvSingle'
const App=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/abc' element={<Kitchen/>}/>
              <Route path='/kitchen' element={<KitchenPage/>}/>
            <Route path='/mobiles' element={<MobilePage/>}/>
                <Route path='/ac' element={<AcPage/>}/>
             <Route path='/computers' element={<ComputerPage/>}/>
               <Route path='/watch' element={<WatchPage/>}/>
               <Route path='/mens' element={<MensPage/>}/>
               <Route path='/woman' element={<WomanPage/>}/>
                <Route path='/books' element={<BooksPage/>}/>
                <Route path='/furniture' element={<FurniturePage/>}/>
                <Route path='/fridge' element={<FridgePage/>}/>
                <Route path='/speakers' element={<SpeakersPage/>}/>
                <Route path='/tv' element={<TvPage/>}/>
                <Route path='/mobiles/:id' element={<MobileSingle/>}/>   {/*for dynamic routing*/}
                <Route path='/cart' element={<UserCart/>}/>
                <Route path='/computers/:id' element={<ComputerSingle/>}/>
                <Route path='/watch/:id' element={<WatchSingle/>}/>
                <Route path='/mens/:id' element={<MensSingle/>}/>
                <Route path='/woman/:id' element={<WomanSingle/>}/>
                <Route path='/books/:id' element={<BooksSingle/>}/>
                <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
                <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
                <Route path='/fridge/:id' element={<FridgeSingle/>}/>
                <Route path='/speakers/:id' element={<SpeakersSingle/>}/>
                <Route path='/tv/:id' element={<TvSingle/>}/>
            </Routes>
           
        </div>
    )
}
export default App