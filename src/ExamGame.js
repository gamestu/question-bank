//九九乘法練習
import React, {useState} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  createMultipleQuestion,
  createAddQuestion,
  createSubstractQuestion,
  getRandom
} from "./helpers/question-creators";
import { Form, Row, Col } from "react-bootstrap";
const SQuestion = styled.div`
  font-size: 50px;
  font-family: Monaco;
  color: ${props => props.isCorrect ? 'green': 'default'};
`;

const Question = ({a, b, operator, answer, index}) => {
  const [isCorrect, setIsCorrect] = useState(false);
  function checkAnswer(e){
    if(parseInt(e.currentTarget.value) === answer){
      setIsCorrect(true);
    }
  }
  return (
    <Row key={index}>
      <Form.Label className="text-end" column="lg" lg={4}>
        <SQuestion isCorrect={isCorrect}>
          {`${a} ${operator} ${b} = `}
        </SQuestion>
      </Form.Label>
      <Col className="d-flex align-items-center">
        <Form.Control onChange={checkAnswer} size="lg" type="text" placeholder="答案是..." />
      </Col>
    </Row>
  );
};

const ExamGame = ({examType}) => {
  const questionsPerPage = 10;
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
        return {...createAddQuestion(),index};
      case 'substract':
        return { ...createSubstractQuestion(),index };
      case 'multiply':
        return { ...createMultipleQuestion(),index };
      case 'mixed':
          return { ...m.get(type)(),index };
      default:
        return { ...createAddQuestion(),index };
      }
    });
    return result;
  }
  const questions = createQuestions();
  
  return (
    <div>
      {questions.map((q, index) => {
        return (
          <Question key={index} {...q}></Question>
        );
      })}
    </div>
  );
};

export default ExamGame;

ExamGame.propTypes = {
  examType: PropTypes.string
};