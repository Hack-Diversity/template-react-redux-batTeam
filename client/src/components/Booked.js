
import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';


const Booked = ({children}) => {
    return (
        <section className="books">
            <h2>Find the Latest Collections Here</h2>
            <Link className="btn" to="./AddBooks">Add Books</Link>
            {children}
        </section>
    )
}

export default Booked
