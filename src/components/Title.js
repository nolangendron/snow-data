import React from 'react'
import styled from "@emotion/styled";

const Container = styled("div")`
  grid-area: title;

.title {
  margin: 0;
  padding: 0;
  text-align: right;
}

h1 {
  justify-content: flex-end;
  font-size: 3.3em;
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