import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  color: white;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Enter movie name",
})`
  width: 80%;
  outline: none;
  border: 1px solid #0063e5;
  padding: 10px;
  color: white;
  background-color: transparent;
  border-radius: 8px;
  margin-bottom: 2rem;
`;
