import { Button, createStyles, Input, makeStyles, Theme } from "@material-ui/core";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import axios from "axios";

interface ChatInputPropsType {
    addChat: AddChat,
    className?: string,
    setIsLoading: (isLoading: Boolean) => void
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    input: {
        marginRight: 10,
        marginLeft: 200,
        flexGrow: 1
    },
    btn: {
        marginRight: 200,
    }
}));


const ChatInput: React.FC<ChatInputPropsType> = ({ addChat, className, setIsLoading }) => {
    const classes = useStyle();
    const [chat, setChat] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setChat(e.target.value);
    }
    const handleSubmit = () => {
        if (chat === "") {
            return;
        }
        setChat("");
        addChat({role: "user", text: chat});

        //post open ai 
        const url: string = "https://api.openai.com/v1/chat/completions";
        const data = {
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": chat}]
        };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
        console.log(" process.env.OPENAI_API_KEY: " + process.env.REACT_APP_OPENAI_API_KEY);
        setIsLoading(true);
        axios.post(url, data, {headers}).then(response => {
            addChat({role: "bot", text: response.data.choices[0].message.content})
            setIsLoading(false);
        }).catch(e => {
            console.log(e);
            setIsLoading(false);
        });

    }

    const handleOnKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div className={className}>
            <Input
                className={classes.input}
                placeholder='Chat ?'
                value={chat}
                onChange={handleChange}
                onKeyUp={handleOnKeyUp}
            />
            <Button onClick={handleSubmit} className={classes.btn}>Send</Button>
        </div>
    )
}

export default ChatInput;