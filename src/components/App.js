// import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import { useState, useEffect } from 'react'
import '../styles/Layout.css';



function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]) 
  return (<><Banner /><Cart cart={cart} updateCart={updateCart} />< ShoppingList cart={cart} updateCart={updateCart}/><Footer/></>)
}


export default App;
