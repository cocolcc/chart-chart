import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ContextListItem from "./ContextListItem";

interface ContextListPropsType {
    chatList: Array<ChatType>,
    className?: string,
    isLoading: Boolean
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    context: {
        textAlign: "left",
        marginBottom: 10
    },
}))

const ContextList: React.FC<ContextListPropsType> = ({ chatList, className, isLoading }) => {
    const classes = useStyle();
    return (
        <div className={className} id="bottom-scroll">
            {chatList.map((chat, index) => <ContextListItem key={index} className={classes.context} chat={chat} />)}
            {isLoading ? <div>Loading...</div> : null}
        </div>
    );
}

export default ContextList;