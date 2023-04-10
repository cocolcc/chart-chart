import { Button, createStyles, Input, makeStyles, Theme } from "@material-ui/core";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";

interface QuestionInputPropsType {
    addQuestion: AddQuestion,
    className?: string
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


const QuestionInput: React.FC<QuestionInputPropsType> = ({ addQuestion, className }) => {
    const classes = useStyle();
    const [question, setQuestion] = useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuestion(e.target.value);
    }
    const handleSubmit = () => {
        if (question === "") {
            return;
        }
        setQuestion("");
        addQuestion(question);
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
                placeholder='Question ?'
                value={question}
                onChange={handleChange}
                onKeyUp={handleOnKeyUp}
            />
            <Button onClick={handleSubmit} className={classes.btn}>Send</Button>
        </div>
    )
}

export default QuestionInput;