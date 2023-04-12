import React from "react";

interface ContextListItemPropsType {
    chat: ChatType,
    className?: string
}

const ContextListItem: React.FC<ContextListItemPropsType> = ({ chat, className }) => {
    return (
        <div className={className}>Q: {chat.text}</div>
    );
}

export default ContextListItem;