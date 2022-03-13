import React, {useState} from 'react';
import Layout from './Layout';
import { Container, Form } from 'react-bootstrap';
import ExamGame from './ExamGame';
import styled from 'styled-components';

const SFormGroup = styled(Form.Group)`
  @media print {
    display: none;
  }
`;

const MathWeb = () => {
  const [examType, setExamType] = useState('mixed');
  function handleChange(e) {
    const type = e.currentTarget.value;
    setExamType(type);
  }
  return (
    <Layout>
      <Container>
        <SFormGroup className="mt-3">
          <Form.Label>請選擇題目類型</Form.Label>
          <Form.Select onChange={handleChange} value={examType}>
            <option value="mixed">混合加減乘法</option>
            <option value="add">加法</option>
            <option value="substract">減法</option>
            <option value="multiply">乘法</option>
          </Form.Select>
        </SFormGroup>
        <hr />
        <ExamGame examType={examType} />
      </Container>
    </Layout>
  );
};

export default MathWeb;