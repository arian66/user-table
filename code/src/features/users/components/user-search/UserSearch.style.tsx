import styled from 'styled-components';

export const SearchContainer = styled.div`
  & form {
    display: flex;
    width: 40%;
    min-width: 300px;
    padding: 1rem 0;
    align-items: center;
    margin-left: auto;
    & input {
      margin-right: 1rem;
    }
  }
`