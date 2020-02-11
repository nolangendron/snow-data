import React from 'react';
import styled from "@emotion/styled";

const CardStyle = styled("div")`
display: flex;
background-color: grey;
opacity: 0.8;
color: #FF69B4;
width: 330px;
height: 100%;
justify-content: center;
align-items: center;
:hover {
  cursor: pointer;
  opacity: 1;
}

h3 {
  text-align: center;
  font-size: 3em;
}
`
export const Card = ({ key, id, title, onClick }) => {
  return (
    <CardStyle>
      <h3 key={key} id={id} onClick={onClick}>{title}</h3>
    </CardStyle>
  )
}



