import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

let numbers = [];

_.times(45, n => numbers.push(n+1));

numbers = _.shuffle(numbers);

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

const Boll = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  background-color: ${props => {
    if(props.value < 11) {
      return '#F9FF33';
    }
    else if(props.value < 21) {
      return '#33DAFF'
    }
    else if(props.value < 31) {
      return '#FF4233'
    }
    else if(props.value < 41) {
      return '#CFD0C2'
    }
    else {
      return '#20F312'
    }
  }};
`;

const Rabel = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
`;

export default function App() {
  const [diplayNumbers, setDisplayNumbers] = React.useState(_.shuffle(numbers));

  return (
    <>
      <Container>
        <Row>
          <Boll value={diplayNumbers[0]}>
            <Rabel>{diplayNumbers[0]}</Rabel>
          </Boll>
          <Boll value={diplayNumbers[1]}>
            <Rabel>{diplayNumbers[1]}</Rabel>
          </Boll>
          <Boll value={diplayNumbers[2]}>
            <Rabel>{diplayNumbers[2]}</Rabel>
          </Boll>
          <Boll value={diplayNumbers[3]}>
            <Rabel>{diplayNumbers[3]}</Rabel>
          </Boll>
          <Boll value={diplayNumbers[4]}>
            <Rabel>{diplayNumbers[4]}</Rabel>
          </Boll>
          <Boll value={diplayNumbers[5]}>
            <Rabel>{diplayNumbers[5]}</Rabel>
          </Boll>
        </Row>
        <Button title="다시 뽑기" onPress={() => {setDisplayNumbers(_.shuffle(numbers))}}/>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 24
  },
  boll: {
    width: 50,
    height: 50,
    backgroundColor: '#e5e5e5',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
});
