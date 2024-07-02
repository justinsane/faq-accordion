import './App.css';

function App() {
  return (
    <div className='bg-white px-6 py-8 rounded-2xl container max-w-lg shadow-lg '>
      <div className='flex flex-row'>
        <img src='icon-star.svg' alt='Star icon' className='w-8' />
        <h1 className='font-bold text-4xl pl-4'>FAQs</h1>
      </div>
      <div className='flex flex-row py-8 items-center'>
        <p className='font-bold text-sm'>
          What is Frontend Mentor, and how will it help me?
        </p>
        <img src='icon-plus.svg' alt='Expand Content Icon' className='w-6' />
      </div>
    </div>
  );
}

export default App;
