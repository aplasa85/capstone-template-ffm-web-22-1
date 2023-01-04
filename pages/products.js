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
  border: 0.0625rem solid black;
  width: 25rem;
  height: 9.375rem;
  padding: 3.4375rem;
  padding-left: 4.6875rem;
  margin-left: 32%;
  margin-top: 4.375rem;
`;
