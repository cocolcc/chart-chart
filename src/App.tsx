import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import ContextList from './component/ContextList';
import ChatInput from './component/ChatInput';

const useStyle = makeStyles((theme: Theme) => createStyles({
  root: {
    textAlign: "center",
  },
  chatInput: {
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
  let testList: Array<ChatType> = [];
  // for (let i = 0; i < 100; i ++) {
  //   testList = [... testList, {text: "index " + i, index: i}]
  // }
  const [chatList, setChatList] = useState<Array<ChatType>>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const addChat:AddChat = (chat: ChatType) => {
    setChatList((pre) => [...pre, chat]);
  }

  return (
    <div className={classes.root}>
      <h1>chart chart</h1>
      <ContextList className={classes.contextList} chatList={chatList} isLoading={isLoading}/>
      <ChatInput className={classes.chatInput} addChat={addChat} setIsLoading={setIsLoading}/>
    </div>
  );
}

export default App;
