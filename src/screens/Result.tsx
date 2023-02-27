import React, {useCallback, useState} from 'react';
import Data from '../api/response.json';
import {HomeNavigation, QuestionT, ResultT} from '../types';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import Extrovert from '../../assets/images/extrovert.png';
import Introvert from '../../assets/images/introvert.png';
import styles, {Colors} from '../theme/styles';
import Button from '../components/Button';
type NavigationProp = NativeStackNavigationProp<HomeNavigation>;
const Result: React.FC = () => {
  const route = useRoute<RouteProp<HomeNavigation, 'result'>>();
  const navigation = useNavigation<NavigationProp>();
  const group = route?.params?.group;
  const [yourResult, setYourResult] = useState<{
    result: ResultT | null;
    questions: QuestionT[];
  }>({result: null, questions: []});

  useFocusEffect(
    useCallback(() => {
      const _yourResult = Data.result.find((item: ResultT) => {
        if (item.title.toLowerCase() === group) {
          return item;
        }
      });
      if (_yourResult) {
        setYourResult({
          questions: Data.questions,
          result: _yourResult,
        });
      }
    }, [group]),
  );

  const startAgain = () => {
    navigation.navigate('startTest', {questions: yourResult?.questions});
  };

  return yourResult.result !== null ? (
    <ScrollView
      style={[styles.scrollView]}
      contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.f1, styles.mV1, styles.center]}>
        <Image
          style={styles.responsiveImage}
          source={group === 'extrovert' ? Extrovert : Introvert}
          resizeMode={'contain'}
        />
      </View>
      <View style={[styles.f1, styles.pH16]}>
        <Text
          style={[
            styles.h2,
            styles.tCenter,
          ]}>{`Congratulation you are ${yourResult.result.title}!`}</Text>
        <Text style={[styles.h2, styles.tCenter]}>
          {yourResult.result.description}
        </Text>
      </View>
      <Button title={'Start Again!'} onPress={startAgain} />
    </ScrollView>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.DarkBlue} />
    </View>
  );
};

export default Result;
