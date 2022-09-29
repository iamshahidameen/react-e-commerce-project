import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
const Stars = ({ stars, reviews }) => {
  console.log(stars, 'stars', reviews, 'reviews');
  return (
    <Wrapper>
      <div className="stars">
        {/* Stars Start */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
          {stars >= 5 ? (
            <BsStarFill />
          ) : stars <= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* End of Stars */}
      </div>
      <p className="reviews">({reviews} Customer Reviews)</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
