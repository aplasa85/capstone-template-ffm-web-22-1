import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 5px;
  margin: 25px 400px;

  border: 1px solid black;
  width: 450px;
  height: 450px;
  color: black;

  Link {
    text-decoration: none;
  }
`;

export default StyledCard;
