import styled from "styled-components";

export default null;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #20639b, #3caea3);
  height: 100vh;
  margin: 0px;
  width: 100%;
  overflow: auto;
  padding: 30px;
`;

export const HeaderElement = styled.h1`
  font-size: 30px;
  color: #ffff;
`;

export const GiftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0000;
  background-color: #fff;
`;

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90vh;
`;

export const QuestionHeader = styled.h1`
  font-size: 20px;
  color: #ffff;
`;

export const GifImageElement = styled.img`
  width: 100px;
`;

export const TextAreaPlace = styled.textarea`
  width: 90%;
  height: 30vh;
  @media screen and (max-width: 568px) {
    width: 50%;
  }
`;

export const ResultText = styled.p`
  font-size: 20px;
`;

export const SubnmitButton = styled.button`
  width: 90px;
  color: #ffff;
  border: none;
  padding: 20px;
  border-radius: 20px;
  background-color: #ff0000;
  margin: 10px;
`;
