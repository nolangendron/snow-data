import React from 'react'
import styled from "@emotion/styled";

const Container = styled("div")`
  grid-area: main;

.title {
  /* padding: 50px; */
  text-align: right;
}

h1 {
  justify-content: flex-end;
  font-size: 4em;
line-height: 1.25em;
  color: #fff;
}
`
export const Title = () => {
  return (
    <Container>
      <div className="title">
        <h1>BC South Coast</h1>
        <h1>Backcountry </h1>
        <h1>Weather</h1>
      </div>
    </Container>
  )
}