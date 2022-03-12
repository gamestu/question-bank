import React, {useState} from 'react';
import ExamPaper from './ExamPaper';
import {
  Container,
  Form
} from 'react-bootstrap';
import styled from 'styled-components';

const SFormGroup = styled(Form.Group)`
  @media print {
    display: none;
  }
`;

const App = ()=>{
  const [examType, setExamType] = useState('mixed'); 
  function handleChange(e){
    const type = e.currentTarget.value;
    setExamType(type);
  }
  return (
    <div className="App">
      <Container>
        <SFormGroup className="mt-3">
          <Form.Label>選擇題目類型</Form.Label>
          <Form.Select onChange={handleChange} value={examType}>
            <option value="mixed">混合加減乘法</option>
            <option value="add">加法</option>
            <option value="substract">減法</option>
            <option value="multiply">乘法</option>
          </Form.Select>
        </SFormGroup>
        <hr/>
        <ExamPaper examType={examType}/>
      </Container>
    </div>
  );
};

export default App;
