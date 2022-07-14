import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';

const Booklist = ({language, getData}) => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
      const result = getData?.(language).then((response) =>
        setBookData(response)
      );
    }, [language, getData]);
  
    console.log(bookData);

  return (
    <BookListContainer>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
        <BookInfo key={index}>
            <BookTitle>{x.volumeInfo.title}</BookTitle>
            <BookAuthors> {x.volumeInfo.authors}</BookAuthors>
            {x.volumeInfo.imageLinks?
                <BookImgContainer>
                    <BookImg src={x.volumeInfo.imageLinks.thumbnail} alt={x.volumeInfo.title} />
                </BookImgContainer>
            :<p>no images</p>}
        </BookInfo>
        ))
      )}
    </BookListContainer>
  )
}

export default Booklist

const BookListContainer = styled.div`
    display:flex;
    max-width:95% ;
    flex-wrap: wrap;
    text-align:center ;
`;

const BookInfo = styled.div`
    width:30%;
    background-color: whitesmoke;
    margin:10px 5px;


`;

const BookTitle= styled.p`
    font-size:16px;
    padding-left: 5px;

`;

const BookAuthors = styled.p`
    font-size:14px;
    padding-left: 5px;

`;

const BookImgContainer= styled.div`
    text-align:center ;

`;

const BookImg = styled.img`

`;