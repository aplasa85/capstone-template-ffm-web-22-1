import styled from "styled-components";

function Products() {
  return (
    <div>
      <StyledTitle>Casa del Agave</StyledTitle>
      <h2>Hallo</h2>
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
