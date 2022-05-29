import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <p>1: How will you improve the performance of a React Application?</p>
                <p>Ans: Several clever performance optimization techniques are used in React internally to minimize the number of costly DOM operations required to update the UI. This generally leads to a faster user interface without specifically optimizing for performance for many cases, and there are ways where you can still speed up your React application. When we create a production build of the React app, the npm run build will create a build directory with a production build of the app.</p>
            </div>
            <div>
                <p>2: What are the different ways to manage a state in a React application?</p>
                <p>Managing the state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day. Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks, this method of state management has been drastically simplified.</p>
            </div>
            <div>
                <p>3: How does prototypical inheritance work?</p>
                <p>JavaScript is a prototype-based, Object-Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                    Sharing amid objects makes for the easy inheritance of structure (data fields), behavior (functions/methods), and state (data values).</p>
            </div>
        </div>
    );
};

export default Blogs;