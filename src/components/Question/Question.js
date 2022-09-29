import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>

            <div className='qustion-one'>
                <h1>Question: How does react works?</h1>
                <h4>Answer: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h4>
            </div>
            <div className='qustion-one'>
                <h1 >Question: Difference between props and state.</h1>
                <h4>Answer: By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed well refer to it as our effect, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
                </h4>
            </div>
            <div className='qustion-one'>
                <h1>Question: UseEffect's work except data loading.</h1>
                <h4>Answer: Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component referred to as Reacts render phase. Doing so will lead to confusing bugs and inconsistencies in the UI.  Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from Reacts purely functional world into the imperative world.</h4>
            </div>
        </div>
    );
};

export default Question;