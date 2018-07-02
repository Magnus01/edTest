
import React from 'react';
import AuthorContainer from './AuthorContainer';
import {Link } from 'react-router-dom';

const BookContainer = (props) => (


  //Link to="createassignment2" className="author_book_container"    </Link>

    <div  className="author_book_container" onClick= { ()=> props.getSingleCourse(props.title.id) }  >
        {console.log(props, 'props in bookconatiner')}
        <div className={`book_container_in_author ${props.bookmovement}`}>



            <div className="left"></div>
            <div className="back2">
                <div className="bookcoverrotated"> <h8 >{props.title.title}</h8>
                </div></div>

            <div className="frontcover" onClick={ () => props.nextcss() }></div>
        </div>
        {props.bookmovement === "next" ?   <AuthorContainer
            id={props.title.id}
        /> : null}
</div>

);

export default BookContainer;
