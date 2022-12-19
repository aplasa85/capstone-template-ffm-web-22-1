import styled from "styled-components";

function Products() {
  return (
    <div>
      <StyledTitle>Casa del Agave</StyledTitle>
      <h2>
        The product you are looking for is currently unavailable. We apologise
        for any inconvenience.
      </h2>
    </div>
  );
}

export default Products;

const StyledTitle = styled.h1`
  border: 1px solid black;
  width: 400px;
  height: 150px;
  padding: 55px;
  padding-left: 75px;
  margin-left: 32%;
  margin-top: 70px;
`;
