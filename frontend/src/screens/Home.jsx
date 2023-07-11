import React from 'react'
import Nav from '../Components/Nav/Nav'
import RestName from '../asserts/rest_name.png'
import Burger from '../asserts/Burger.png'
import Drink from '../asserts/Drinks.jpg'

const Home = () => {
  return (
    <div className='homeScreen'>
        <Nav />
        <div className='Restraunt'>
            <center><img src={RestName} alt="" srcset="" className='Restname' /></center> <br/>
            <center>
              <img src={Drink} alt="" srcset="" className='Burger' />
              <img src={Burger} alt="" srcset="" className='Burger' />
            </center>
        </div>
        <div className='category'>
            <h2>Starter</h2>
            <h2>Mojitos</h2>    
            <h2>Snacks</h2>
            <h2>Main Course</h2>
            <h2>Desserts</h2>
        </div>
        
    </div>
  )
}

export default Home