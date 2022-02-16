import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  background-color: #f2f2f2;

  &.header div {
    font-weight: bold;
  }

  + div {
    margin-top: .5rem;
  }
`;

export const Col = styled.div`
  width: 25%;
  padding: .5rem;
`;
