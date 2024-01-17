import React,{useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
     setCartCount((cartCount) => cartCount + 1);
     // Additional logic for adding items to the cart if needed
   };
 
   const handleRemoveFromCart = () => {
     setCartCount((cartCount) => Math.max(cartCount - 1, 0));
     // Additional logic for removing items from the cart if needed
   };

  const products = [
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Fancy Product',
      price: '$40.00 - $80.00',
      viewOptionsLink: '#'
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Special Item',
      price: '$18.00',
      sale: true,
      rating: 5,
      addToCartLink: '#'
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Sale Item',
      price: '$25.00',
      sale: true,
      addToCartLink: '#'
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Popular Item',
      price: '$40.00',
      rating: 5,
      addToCartLink: '#'
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Another Product',
      price: '$120.00 - $280.00',
      viewOptionsLink: '#'
    },
    {
      imageSrc: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Another Sale Item',
      price: '$18.00',
      sale: true,
      addToCartLink: '#'
    },
    // Add more product entries as needed
  ];


  return (
    <>
      <Navbar cartCount={cartCount} />
      <Header />
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <Footer />

    </>
  )
}

export default App
