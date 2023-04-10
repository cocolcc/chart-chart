import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import ContextList from './component/ContextList';
import QuestionInput from './component/QuestionInput';

const useStyle = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: "center",
  },
  questionInput: {
    display: "flex",
    position: "fixed",
    bottom: 0,
    zIndex: 9999999,
    backgroundColor: "white",
    paddingBottom: 20,
    paddingTop: 10,
    width: "100%",
  },
  contextList: {
    width: "100%",
    position: "absolute",
    top: 100,
    left: 200,
    paddingBottom: 80
  }
}));

const App: React.FC = () => {
  const classes = useStyle();
  let testList: Array<QuestionType> = [];
  // for (let i = 0; i < 100; i ++) {
  //   testList = [... testList, {text: "index " + i, index: i}]
  // }
  const [questionList, setQuestionList] = useState<Array<QuestionType>>([]);
  // const [answerList, setAnswerList] = useState<Array<AnswerType>>([]);

  const addQuestion = (question: string) => {
    setQuestionList([...questionList, { index: questionList.length, text: question }]);
  }

  return (
    <div className={classes.root}>
      <h1>chart chart</h1>
      <ContextList className={classes.contextList} questionList={questionList} />
      <QuestionInput className={classes.questionInput} addQuestion={addQuestion}/>
    </div>
  );
}

export default App;
