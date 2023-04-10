import React from "react";

interface ContextListItemPropsType {
    context: ContextType,
    className?: string
}

const ContextListItem: React.FC<ContextListItemPropsType> = ({ context, className }) => {
    return (
        <div className={className}>Q: {context.text}</div>
    );
}

export default ContextListItem;