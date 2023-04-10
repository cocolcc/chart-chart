type QuestionType = {
    index: number,
    text: string
}

type AnswerType = {
    index: number,
    text: string
}

type RoleType = keyof CONTEXT_ROLE;

type ContextType = {
    index: number,
    role: string
    text: string
}

type AddQuestion = (question: string) => void;