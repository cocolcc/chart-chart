import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ContextListItem from "./ContextListItem";

interface ContextListPropsType {
    questionList: Array<QuestionType>,
    className?: string
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    context: {
        textAlign: "left",
        marginBottom: 10
    },
}))

const ContextList: React.FC<ContextListPropsType> = ({ questionList, className }) => {
    const ContextList = questionList.map((question) => ({ text: question.text, index: question.index, role: "question" }));
    const classes = useStyle();
    return (
        <div className={className} id="bottom-scroll">
            {ContextList.map((context) => <ContextListItem className={classes.context} context={context} />)}
        </div>
    );
}

export default ContextList;