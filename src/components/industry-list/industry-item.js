import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';


const StyledLink = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const FadedText = styled.span`
  color: #999999;
  font-size: 14px;
`;

const IndustryItem = (props) => {
  return (
    <StyledLink to={props.href}>
      <svg width="30" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.36 12.89C5.73 15.37 6.5 18 6.5 18s.86-2.373 2.33-5.11C10.095 10.54 12 7.9 12 6.5 12 3.46 9.538 1 6.5 1S1 3.462 1 6.5c0 1.523 1.98 3.887 3.36 6.39z"
          stroke="#000"
          strokeWidth=".5"
          fill={props.themeColor}
        />
      </svg>
      <span>{props.text}&nbsp;<FadedText>{props.meta}</FadedText></span>
    </StyledLink>
  );
};

IndustryItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  meta: PropTypes.string,
  themeColor: PropTypes.string.isRequired
};

export default IndustryItem;
