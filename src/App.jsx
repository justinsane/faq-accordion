import { useState, useRef } from 'react';
import './App.css';

const data = [
  {
    title: 'What is Frontend Mentor, and how will it help me?',
    text: `We provide front-end challenges that include professional web designs.
          These allow you to practice building websites in a realistic workflow.
          Taking these challenges will help you improve your skills, gain
          experience creating websites, and build up an incredible project
          portfolio. We also have a large community of developers, so it's a
          great way to meet other devs!'`,
  },
  {
    title: 'Is Frontend Mentor free?',
    text: `The majority of our challenges are free, yes. We do have some that 
    are premium and require a Pro subscription to access. It will say on each 
    challenge whether they are free or premium, so it's easy to tell the difference.`,
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    text: `Definitely! Please do feel free to use whatever you build in your portfolio. 
    Helping developers add professional-looking projects to their portfolio was one 
    of the reasons we created this platform!`,
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    text: `Definitely! Please do feel free to use whatever you build in your portfolio. 
    Helping developers add professional-looking projects to their portfolio was one 
    of the reasons we created this platform!`,
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    text: `The best (and quickest) way to get help on a challenge is in our Discord server. 
    There are thousands of other developers in there, so it's a great place to ask questions. 
    We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite 
    to our Discord server here.`,
  },
];

function App() {
  return (
    <div className='bg-white px-6 py-8 rounded-xl container shadow-2xl '>
      <div className='flex flex-row items-center mb-6'>
        <img src='icon-star.svg' alt='Star icon' className='w-8' />
        <h1 className='font-bold text-4xl pl-4'>FAQs</h1>
      </div>
      <Accordion data={data} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className='accordion '>
      {data.map((el, index) => (
        <AccordionItem title={el.title} text={el.text} key={index} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  function handleToggle() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle();
    } else if (event.key === 'ArrowDown') {
      const nextSibling = headerRef.current.parentElement.nextElementSibling;
      if (nextSibling) {
        nextSibling.querySelector('.accordion-header').focus();
      }
    } else if (event.key === 'ArrowUp') {
      const previousSibling =
        headerRef.current.parentElement.previousElementSibling;
      if (previousSibling) {
        previousSibling.querySelector('.accordion-header').focus();
      }
    }
  };
  return (
    <div className='accordion-item'>
      <div
        className='accordion-header'
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={headerRef}
        role='button'
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <p className='font-bold text-sm flex-1'>{title}</p>
        <img
          src={isOpen ? 'icon-minus.svg' : 'icon-plus.svg'}
          alt='Expand or Minimize Content Icon'
          className='w-6 ml-9 transition-transform duration-300'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </div>
      <div
        id={`accordion-content-${title}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
