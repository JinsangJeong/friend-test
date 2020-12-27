import React from "react";
import styled from "styled-components";
import img from "./Keanu_Reeves_remove.png";
import TinderCard from "react-tinder-card";

const Quiz = (props) => {
  const [num, setNum] = React.useState(0);

  const onSwipe = (direction) => {
    setNum(num + 1);
    console.log("You swiped: " + direction);
  };

  if (num > 5) {
    return (
      <Question style={{ textAlign: "center" }}>
        <h1>퀴즈 문제 끝!</h1>
        <Button
          onClick={() => {
            props.history.push("/score");
          }}
        >
          점수보기
        </Button>
      </Question>
    );
  }

  return (
    <QuizContainter>
      <p>
        <span>{num + 1} 문제</span>
      </p>

      {props.list.map((l, idx) => {
        if (num === idx) {
          return (
            <Question key={idx}>
              {props.name}
              {l.question}
            </Question>
          );
        }
      })}

      <AnswerZone>
        <Answer>O</Answer>
        <Answer>X</Answer>
      </AnswerZone>

      {props.list.map((l, idx) => {
        if (idx === num) {
          return (
            <DragItem key={idx}>
              <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={onSwipe}
                onCardRightScreen={onSwipe}
                preventSwipe={["up", "down"]}
              >
                <img src={img} alt="" />
              </TinderCard>
            </DragItem>
          );
        }
      })}
    </QuizContainter>
  );
};

const QuizContainter = styled.div`
  text-align: center;
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`;

const Question = styled.h1`
  margin: 20px 0px;
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  font-weight: 600;
  color: #dadafc77;
`;

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 60%;
    max-width: 200px;
    border-radius: 20px;
    background-color: #ffd6aa;
  }
`;
const Button = styled.button`
  padding: 8px 24px;
  margin: 10px auto;
  background-color: #dadafc;
  border-radius: 20px;
  border: 1px solid #dadafc;
  width: 80%;
  box-sizing: border-box;
`;
export default Quiz;
