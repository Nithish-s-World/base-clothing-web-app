// In the IndexRoutes.js file
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../Index/Index';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';

const IndexRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/categories' element={<Categories/>} />
            <Route path='/contact-us' element={<Contact/>} />
         </Routes>
      </BrowserRouter>
   );
};

export default IndexRoutes;
