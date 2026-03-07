import React from 'react'
import "./styles/App.css"
import Header from './components/layout/Header/Header';
import Home from './sections/Home/Home';
import Courses from './sections/Courses/Courses';
import Reviews from './sections/Reviews/Reviews';
import JoinUs from './sections/JoinUs/JoinUs';
import Footer from './components/layout/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Courses />
      <Reviews />
      <JoinUs />
      <Footer />
    </>
  )
}