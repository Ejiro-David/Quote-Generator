

function App() {
  return (
    <div className="App flex justify-center  bg-blue-400 p-5 m-2">
      <div className="quote-box">
        <div className="words p-5">
          <h3 className="text p-4">The truth shall set you free</h3>
          <p className="author text-left p-4">-The Great Creator</p>
        </div>
        

        <button className=''>
          <a className="new-quote bg-blue-200 m-5 p-2" href="/">New Quote</a>
          <a className="tweet-quote bg-blue-200 m-5 p-2" href="/" target="_blank"> tweet it </a>
        </button>
        
      </div>
    </div>
  );
}

export default App;
