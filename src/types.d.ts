type ChatType = {
    role: string,
    text: string
}

type AddChat = (chat: ChatType) => void;