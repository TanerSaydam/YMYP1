export class QuizDetailModel{
    id: string = "";
    title: string = "";
    answerA: string  = "";
    answerB: string  = "";
    answerC: string  = "";
    answerD: string  = "";
    correctAnswer: CorrectAnswerType = "A";
    timeOut: number = 30;
    quizId: string = "";
    isUpdate: boolean = false;
    isLastQuestion: boolean = false;
}

export type CorrectAnswerType = "A" | "B" | "C" | "D"