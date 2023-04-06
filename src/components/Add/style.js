import styled from "styled-components";

export const Container = styled.div`
  background-color: #eaecf8;
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  z-index: 1;
`;

export const Form = styled.form`
    background-color: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    padding: 20px 0;
    border-radius: 10px;
`

Form.Input  = styled.input`
    width: 50%
`;

Form.Btn  = styled.button`
    margin: 15px 0;
    background-color: rgb(37, 35, 59);
    border: none;
    outline: none;
    padding: 7px 65px;
    :hover {
        background-color: rgb(26, 24, 47);
    }

    :active {
        background-color: rgb(26, 24, 47);
    }
`;