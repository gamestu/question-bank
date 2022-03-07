//九九乘法練習
import React from "react";
import styled from 'styled-components';
const Question = styled.div`
  font-size: 50px;
  font-family: Monaco;
`;
const SPage = styled.div`
  @media print {
    page-break-after: always;
  }
`;
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const createMultipleQuestion = (key) => {
  const a = getRandom(2, 9);
  const b = getRandom(2, 9);
  return (
    <Question className="mb-3" key={key}>{a} x {b} = </Question>
  );
}

export const createAddQuestion = (key) => {
  const a = getRandom(10, 19);
  const b = getRandom(1, 9);
  return (
    <Question className="mb-3" key={key}>{a} + {b} = </Question>
  );
}

const Multiplication = () => {
  const questionsPerPage = 10;
  const pageNumber = 20;
  
  function createQuestions() {
    const questionArray = Array(questionsPerPage).fill(1);
    const result = questionArray.map((item, index) => {
      const type = getRandom(1,2);
      if(type === 1){
        return createAddQuestion(index);
      }else{
        return createMultipleQuestion(index);
      }
    });
    return result;
  }
  function Page(props) {
    return (
      <SPage className="page">{props.children}</SPage>
    );
  }
  function createPages() {
    const pageArray = Array(pageNumber).fill(1);
    const result = pageArray.map((item, index) => {
      return (
        <Page key={index}>
          {createQuestions()}
        </Page>
      );
    });
    return result;
  }
  return (
    <div className="multiplication">
      {createPages()}
    </div>
  );
};

export default Multiplication;