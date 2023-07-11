import React from 'react'
import Nav from '../Components/Nav/Nav'
import Card from '../Components/Card/Card.jsx'
import RestName from '../asserts/rest_name.png'
import Burger from '../asserts/Burger.png'
import Drink from '../asserts/Drinks.jpg'

const Home = () => {
  
  const Menu =['Starter','Mojitos','Snacks','Main Course','Desserts']

  // useEffect(() => {
  //   // Menu = []
  //   // setMenu(Menu)
  //   console.log(Menu)
  // },[])
  
  console.log(Menu)
  

  return (
    <div className='homeScreen'>
        <Nav />
        <div className='Restraunt'>
            <center><img src={RestName} alt="Restraunt Name" className='Restname' /></center> <br/>
            <center>
              <img src={Drink} alt="drinks-vector"  className='Burger' />
              <img src={Burger} alt="burger-vector" className='Burger' />
            </center>
        </div>
        <div className='category'>
            <h2>Starter</h2>
            <h2>Mojitos</h2>    
            <h2>Snacks</h2>
            <h2>Main Course</h2>
            <h2>Desserts</h2>
        </div>
        <div className="mobilecard">
          {Menu.map((id)=> {
            return <Card item = {id}/>
          })}
        </div>
    </div>
  )
}

export default Home