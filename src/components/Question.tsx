import React from 'react';
import {ChoiceT, QuestionT, SelectedChoiceT} from '../types';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../theme/styles';

type Props = {
  index: number;
  question: QuestionT;
  selectedChoices: SelectedChoiceT[];
  handleAnswer: (questionId: string, choice: ChoiceT) => void;
};
const Question: React.FC<Props> = ({
  index,
  question,
  selectedChoices,
  handleAnswer,
}) => {
  const getIsSelected = (choiceId: string): number => {
    return selectedChoices.findIndex(choice => choice.choiceId === choiceId);
  };

  const renderChoices = (_question: QuestionT) => {
    return _question.choices.map((choice, i) => {
      return (
        <TouchableOpacity
          onPress={() => handleAnswer(question.id, choice)}
          key={`option-${i}`}
          style={[styles.choice]}>
          <View style={[styles.row, styles.left, styles.pH5]}>
            <View
              style={[
                getIsSelected(choice.id) !== -1 && styles.isSelected,
                styles.circle,
              ]}
            />
            <Text style={styles.p}>{choice.yourChoice}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return selectedChoices.length > 0 ? (
    <View style={[styles.start]}>
      <Text style={styles.h2}>{`${index + 1}. ${question.question}`}</Text>
      {renderChoices(question)}
    </View>
  ) : (
    <React.Fragment />
  );
};

export default Question;
