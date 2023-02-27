export type HomeNavigation = {
  home: undefined;
  startTest: {
    questions: QuestionT[];
  };
  result: {
    group: string;
  };
};

export type QuestionT = {
  id: string;
  question: string;
  choices: ChoiceT[];
};

export type ChoiceT = {
  id: string;
  group: string;
  yourChoice: string;
};

export type ResultT = {
  title: string;
  description: string;
};

export type SelectedChoiceT = {
  questionId: string;
  choice: string;
  choiceId: string;
};
