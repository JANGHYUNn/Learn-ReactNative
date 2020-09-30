import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
  padding: 8px 24px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px;
`;

const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TodoItemText = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const TodoItemButton = styled.Button``;

const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Button = styled.Button``;

export default function App() {
  return (
    <Container>
      <Contents>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제"></TodoItemButton>
        </TodoItem>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제"></TodoItemButton>
        </TodoItem>
        <TodoItem>
          <TodoItemText>할 일 목록 표시</TodoItemText>
          <TodoItemButton title="삭제"></TodoItemButton>
        </TodoItem>
      </Contents>
      <InputContainer>
        <Input />
        <Button title="전송" />
      </InputContainer>
    </Container>
  );
}
