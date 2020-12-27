import React from "react";
import styled from "styled-components";

const Ranking = (props) => {
  let rank_list = props.rank;
  console.log(rank_list);
  return (
    <Container>
      <Outter>
        <p>
          <span>7명</span>의 사람들 중 당신은?
        </p>
        <hr />
        {rank_list.map((l, idx) => {
          return (
            <CardBox key={idx}>
              <h1>{l.rank}등</h1>
              <Card>
                <p>{l.name}</p>
                <p>{l.message}</p>
              </Card>
            </CardBox>
          );
        })}
      </Outter>
    </Container>
  );
};

const CardBox = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  padding: 20px 10px;
  border: 1px solid #b3d2e5;
  border-radius: 10px;
  box-sizing: border-box;
  & > h1 {
    width: 30%;
    text-align: center;
    border-right: 1px solid #abb8c3;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 10px;
  & > p {
    margin: 5px;
  }
`;

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
  /* justify-content: center; */
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  border: 1px solid #eee;
  padding: 0vh 16px;
  box-sizing: border-box;
  margin: 0px auto;
  & > p {
    text-align: center;
    font-size: 1.2em;
  }
  & > p > span {
    padding: 5px 10px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
  & hr {
    width: 100%;
    border: solid 1px #8ed1fc;
    margin: 0px;
  }
`;

export default Ranking;
