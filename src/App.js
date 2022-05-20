import { useState } from "react";


function App() {

  const [words, setWords] = useState('The Truth Shall Set You Free');
  const [author, setAuthor] = useState('TheGreat Creator');

  



  const handleClick = () => {

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => {
        if(!res.ok){
          throw Error("data ain't right")
        }return res.json();
        
      })
      
      .then((data) => {
        let quotes = data['quotes'];
        let randomNo = Math.floor(Math.random() * quotes.length);
        setWords(quotes[randomNo]['quote']);
        setAuthor(quotes[randomNo]['author']);

      })




    return ( 
      setWords()
    );
  }
 


  return (
    <div className="App flex justify-center  bg-blue-400 p-5 m-2">
      <div id="quote-box">
        <div className="words p-5">
          <h3 className="p-4" id='text'>{words}</h3>
          <p className="text-left p-4" id="author">{author}</p>
        </div>
        

        <div className=''>
          <button id="new-quote" className="bg-blue-200 m-5 p-2" onClick={handleClick}>New Quote</button>
          <a id="tweet-quote" className="bg-blue-200 m-5 p-2" href={`https://twitter.com/intent/tweet?text=${words}%20%20--${author} &hashtags=quotes`} target="_blank" rel='noreferrer'> tweet it </a>
        </div>
        
      </div>
    </div>
  );
}


//fix failing tests and work design
export default App;
