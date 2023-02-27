import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigation} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from '../theme/styles';
import Starter from '../../assets/images/starter.png';
import Button from '../components/Button';
import Data from '../api/response.json';
type NavigationProp = NativeStackNavigationProp<HomeNavigation>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const startTest = () => {
    navigation.navigate('startTest', {
      questions: Data.questions,
    });
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={[styles.row, styles.f1, styles.start]}>
          <Image
            source={Starter}
            resizeMode={'contain'}
            style={styles.responsiveImage}
          />
        </View>
        <View style={[styles.row, styles.f1, styles.selfCenter]}>
          <View style={[styles.col100]}>
            <Text style={[styles.h1, styles.selfCenter]}>
              {'Introvert / Extrovert'}
            </Text>
            <Text style={[styles.h2, styles.selfCenter]}>
              {'Are you an extrovert, introvert?'}
            </Text>
            <Text
              style={[styles.p, styles.tCenter, styles.selfCenter, styles.w50]}>
              {
                'You probably have a hunch about which one you are, but why not take this quiz. Knowing your traits will help you figure out how you can best fit and function in the workplace and the world.'
              }
            </Text>
          </View>
        </View>
        <Button title={'Start'} onPress={startTest} />
      </View>
    </ScrollView>
  );
};

export default Home;
