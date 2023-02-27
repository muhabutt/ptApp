import React, {useCallback, useState} from 'react';
import {ChoiceT, HomeNavigation, QuestionT, SelectedChoiceT} from '../types';
import Question from '../components/Question';
import styles from '../theme/styles';
import {ScrollView, Text, View} from 'react-native';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../components/Button';

type NavigationProp = NativeStackNavigationProp<HomeNavigation>;
const StartTest: React.FC = () => {
  const route = useRoute<RouteProp<HomeNavigation, 'startTest'>>();
  const navigation = useNavigation<NavigationProp>();
  const questions = route.params.questions as QuestionT[];
  const [selectedChoices, setSelectedChoices] = useState<SelectedChoiceT[]>([]);
  const [message, setMessage] = useState<string>('');

  const validateQuestions = () => {
    return selectedChoices.findIndex(item => item.choice === '');
  };
  const renderQuestion = () => {
    return questions.map((question, index) => {
      return (
        <Question
          key={`question-${index}`}
          index={index}
          question={question}
          selectedChoices={selectedChoices}
          handleAnswer={handleAnswer}
        />
      );
    });
  };
  const handleAnswer = (questionId: string, choice: ChoiceT) => {
    const nextState = selectedChoices.map((selectedChoice: SelectedChoiceT) => {
      if (selectedChoice.questionId !== questionId) {
        return {...selectedChoice};
      } else {
        return {...selectedChoice, choiceId: choice.id, choice: choice.group};
      }
    });
    setMessage('');
    setSelectedChoices(nextState);
  };
  const calculateResult = () => {
    const isValid = validateQuestions();
    // if all the questions are answered.
    if (isValid === -1) {
      const _groups = {
        introvert: 0,
        extrovert: 0,
      };
      selectedChoices.forEach(item => {
        if (item.choice === 'introvert') {
          _groups.introvert = _groups.introvert + 1;
        } else if (item.choice === 'extrovert') {
          _groups.extrovert = _groups.extrovert + 1;
        }
      });
      if (_groups.introvert > _groups.extrovert) {
        navigation.navigate('result', {group: 'introvert'});
      } else {
        navigation.navigate('result', {group: 'extrovert'});
      }
    } else {
      setMessage('Please answer all questions!');
    }
  };

  const resetQuestions = useCallback(() => {
    const _choices: SelectedChoiceT[] = [];
    questions.forEach(item => {
      _choices.push({
        questionId: item.id,
        choice: '',
        choiceId: '',
      });
    });
    setSelectedChoices(_choices);
  }, [questions]);

  useFocusEffect(
    useCallback(() => {
      resetQuestions();
      setMessage('');
    }, [resetQuestions]),
  );

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={[styles.row, styles.start]}>
          <Text style={[styles.h2, styles.selfCenter]}>
            {'Please select one option from the questions below.'}
          </Text>
        </View>
        {renderQuestion()}
        <View style={[styles.row, styles.center, styles.mH1]}>
          <Text style={[styles.error]}>{message}</Text>
        </View>
        <View style={[styles.row, styles.center, styles.mH1]}>
          <Button title={'I am Ready'} onPress={calculateResult} />
          <Button title={'Clear'} onPress={resetQuestions} />
        </View>
      </View>
    </ScrollView>
  );
};
export default StartTest;
