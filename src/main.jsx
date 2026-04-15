import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ShopSection from './components/ShopSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import Hero from './components/Hero.jsx'
import ContactSection from './components/ContactSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <ShopSection />
      },
      {
        path: 'about',
        element: <AboutSection />
      },
      {
        path: 'contact',
        element: <ContactSection />
      },
      {
        path: 'testimonial',
        element: <TestimonialSection />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)