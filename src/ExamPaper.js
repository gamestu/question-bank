//九九乘法練習
import React from "react";
import PropTypes from 'prop-types';
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

export const createSubstractQuestion = (key) => {
  const a = getRandom(11, 19);
  const b = getRandom(a - 10, 9);
  return (
    <Question className="mb-3" key={key}>{a} - {b} = </Question>
  );
}

const ExamPaper = ({examType}) => {
  const questionsPerPage = 10;
  const pageNumber = 20;
  
  function createQuestions() {
    const questionArray = Array(questionsPerPage).fill(examType);
    const result = questionArray.map((examType, index) => {
      const type = getRandom(1,3);
      const m = new Map();
      m.set(1, createAddQuestion);
      m.set(2, createSubstractQuestion);
      m.set(3, createMultipleQuestion);
      switch(examType){
      case 'add':
        return createAddQuestion(index);
      case 'substract':
        return createSubstractQuestion(index);
      case 'multiply':
        return createMultipleQuestion(index);
      case 'mixed':
        return m.get(type)(index);
      default:
        return createAddQuestion(index);
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

export default ExamPaper;

ExamPaper.propTypes = {
  examType: PropTypes.string
};