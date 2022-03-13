//九九乘法練習
import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  createMultipleQuestion,
  createAddQuestion,
  createSubstractQuestion,
  getRandom
} from "./helpers/question-creators";
const SQuestion = styled.div`
  font-size: 50px;
  font-family: Monaco;
`;
const SPage = styled.div`
  @media print {
    padding-top: 50px;
    page-break-after: always;
  }
  @media screen {
    border-bottom: 1px solid black;
  }
  padding: 0 10px;
`;



const Question = ({a, b, operator}) => {
  return (
    <SQuestion>{`${a} ${operator} ${b} = `}</SQuestion>
  );
};

const ExamPaper = ({examType}) => {
  const questionsPerPage = 10;
  const pageNumber = 100;
  
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
        return Question({...createAddQuestion()});
      case 'substract':
        return Question({ ...createSubstractQuestion() });
      case 'multiply':
        return Question({ ...createMultipleQuestion() });
      case 'mixed':
          return Question({ ...m.get(type)() });
      default:
        return Question({ ...createAddQuestion() });
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