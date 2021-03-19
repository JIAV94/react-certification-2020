import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  background-color: tomato;
  top: 50%;
`;

export const Button = styled.button`
  margin-left: 15px;
  margin-right: 15px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const SearchInput = styled.input`
  font-size: 17px;
  padding: 5px;
  margin: 10px;
  background: indianred;
  border: none;
  border-radius: 0.5px;
  ::placeholder {
    color: white;
  }
  color: white;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
