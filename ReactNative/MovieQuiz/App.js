/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components/native';
import movieLists from './movieLists';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.View`
  flex: 1;
  padding: 24px;
`;

const Quiz = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #cc0000;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

const getInitials = (string) => {
  return string
    .split('')
    .map((char) => {
      const index = (char.charCodeAt(0) - 44032) / 28 / 21;
      if (index >= 0) {
        return String.fromCharCode(index + 4352);
      }
    })
    .join('');
};

const App: () => React$Node = () => {
  const [quizLists, setQuizLists] = React.useState(_.shuffle(movieLists));
  const [mode, setMode] = React.useState('quiz');

  const onPress = React.useCallback(() => {
    if (mode === 'answer') {
      setQuizLists(quizLists.slice(1));
    }
    setMode(mode === 'quiz' ? 'answer' : 'quiz');
  }, [mode]);

  const retry = React.useCallback(() => {
    setQuizLists(_.shuffle(movieLists));
    setMode('quiz');
  }, [quizLists]);

  return (
    <>
      <Container>
        <Contents>
          {quizLists.length ? (
            <Quiz>
              {mode === 'quiz' ? getInitials(quizLists[0]) : quizLists[0]}
            </Quiz>
          ) : (
            <Quiz>퀴즈 끝</Quiz>
          )}
        </Contents>
        {quizLists.length ? (
          <Button onPress={onPress}>
            <Label>{mode === 'quiz' ? '정답 확인' : '다음'}</Label>
          </Button>
        ) : (
          <Button onPress={retry}>
            <Label>처음부터 다시 시작</Label>
          </Button>
        )}
      </Container>
    </>
  );
};

export default App;
