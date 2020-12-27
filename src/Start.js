import React from "react";
import img from "./Keanu_Reeves_remove.png";
import styled from "styled-components";

const Start = (props) => {
  return (
    <Container>
      <Outter>
        <img src={img} alt="" />
        <h1>
          나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?
        </h1>
        <TextBox type="text" placeholder="내 이름" />
        <Button
          onClick={() => {
            props.history.push("/quiz");
          }}
        >
          시작하기
        </Button>
      </Outter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
`;

const Outter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  border: 1px solid #eee;
  padding: 0vh 32px;
  box-sizing: border-box;
  margin: 0px auto;
  & h1 {
    text-align: center;
    font-size: 1.5em;
    line-height: 1.4;
  }
  & img {
    width: 80%;
    margin: 16px;
    border-radius: 10px;
  }
  & h1 > span {
    padding: 5px 10px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`;

const TextBox = styled.input`
  padding: 15px;
  margin: 10px 0px 24px 0px;
  border: 1px solid #dadafc;
  border-radius: 30px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 8px 24px;
  background-color: #dadafc;
  border: 1px solid #dadafc;
  border-radius: 30px;
`;

export default Start;
