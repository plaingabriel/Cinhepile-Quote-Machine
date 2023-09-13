import { useState } from 'react';
import P from './quotes'

// JSX function
export function QuoteBox() {
    // Generate random index
    const randomIndex = () => {
        return Math.floor(Math.random() * P.length);
    }
    // Set initial state
    const [index, setIndex] = useState(randomIndex());
    // Set new state
    const handleClick = () => {
        let flag = false;
        do {
            const newIndex = randomIndex();
            if (index != newIndex) {
                setIndex(newIndex);
                flag === true;
            }
        } while (!flag);
        return 0;
    }
    // Target the quote from the import array
    let quote = P[index];
    // HTML
    return(
        <div className=
        'container-fluid vh-100 d-flex justify-content-center align-items-center' 
        style={{
            backgroundImage: `url(${quote.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <div id="quote-box" className="py-4 px-5 rounded border border-dark text-center">
                <div id="text" className='p-2 row justify-content-center'>
                    <p className="fst-italic fs-2 text-dark lh-base">"{quote.quote}"</p>
                </div>
                <div id="author" className='p-2 row justify-content-end'>                
                    <p className="fs-5 col-6">- {quote.author}</p>
                </div>
                <div id="click-zone" className="p-2 row justify-content-between">

                    <a href="twitter.com/intent/tweet" target="_blank" className="col-1 fs-1">
                        <i class="fa-brands fa-square-twitter text-dark"></i>
                    </a>

                    <button id="new-quote" className="btn btn-dark col-3" onClick={handleClick} >New quote</button>
                </div>
            </div>
        </div>
    );
};