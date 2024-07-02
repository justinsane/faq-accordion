import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='bg-white px-6 py-8 rounded-2xl container shadow-lg'>
      <div className='flex flex-row items-center mb-6'>
        <img src='icon-star.svg' alt='Star icon' className='w-8' />
        <h1 className='font-bold text-4xl pl-4'>FAQs</h1>
      </div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className='accordion'>
      <AccordionItem />
      {/* Add more AccordionItem components here if needed */}
    </div>
  );
}

function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  return (
    <div className='accordion-item'>
      <div
        className='accordion-header'
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <p className='font-bold text-sm flex-1'>
          What is Frontend Mentor, and how will it help me?
        </p>
        <img
          src={isOpen ? 'icon-minus.svg' : 'icon-plus.svg'}
          alt='Expand or Minimize Content Icon'
          className='w-6 ml-2 transition-transform duration-300'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>
          We provide front-end challenges that include professional web designs.
          These allow you to practice building websites in a realistic workflow.
          Taking these challenges will help you improve your skills, gain
          experience creating websites, and build up an incredible project
          portfolio. We also have a large community of developers, so it's a
          great way to meet other devs!
        </p>
      </div>
    </div>
  );
}

export default App;
