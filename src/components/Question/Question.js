import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda aliquid maxime at neque non a minima qui laborum dicta quidem dolor possimus voluptatum itaque harum, voluptatem porro reprehenderit officiis.</h1>

            <div>
                <h1>Question: How does react works?</h1>
                <h4>Answer: React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</h4>
            </div>
            <div>
                <h1>Question: Difference between props and state.</h1>
                <h4>Answer: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</h4>
            </div>
        </div>
    );
};

export default Question;