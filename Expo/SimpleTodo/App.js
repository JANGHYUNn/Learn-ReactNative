import React from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import produce from 'immer';

const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
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
  margin-bottom: 10px;
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

const Check = styled.TouchableOpacity`
  margin-right: 4px;
`;

const CheckIcon = styled.Text`
  font-size: 20px;
`;

export default function App() {
  const [lists, setLists] = React.useState([]);
  const [todo, setTodo] = React.useState('');

  React.useEffect(() => {
    AsyncStorage.getItem('todoLists').then(data => {
      setLists(JSON.parse(data));
    });
  }, []);

  const changeHandler = value => {
    setTodo(value);
  };

  const pressHandler = () => {
    if (!todo) return;
    const newData = {
      id: new Date().getTime().toString(),
      todo,
      done: false,
    };
    setLists([...lists, newData]);
    setTodo('');
    setAsyncStorage(newData);
  };

  const deleteTodo = id => {
    const newLists = lists.filter(item => item.id !== id);
    setLists(newLists);
    setAsyncStorage(newLists, 'delete');
  };

  const setAsyncStorage = async (newData, flag) => {
    let data;
    if (flag) data = JSON.stringify(newData);
    else data = JSON.stringify([...lists, newData]);

    await AsyncStorage.setItem('todoLists', data);
  };

  const checkTodo = index => {
    // const data = [...lists];
    // data[index] = { ...data[index], done: !data[index].done };

    // setLists(data);
    // setAsyncStorage(data, 'modify');
    const data = produce(lists, draft => {
      draft[index].done = !lists[index].done;
    });
    console.log(data);
    setLists(data);
    setAsyncStorage(data, 'modify');
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Contents>
          {lists.map((item, index) => (
            <TodoItem key={item.id}>
              <Check>
                <CheckIcon>{item.done ? '✅' : '☑️'}</CheckIcon>
              </Check>
              <TodoItemText onPress={() => checkTodo(index)}>
                {item.todo}
              </TodoItemText>
              <TodoItemButton
                title="삭제"
                onPress={() => deleteTodo(item.id)}
              />
            </TodoItem>
          ))}
        </Contents>
        <InputContainer>
          <Input onChangeText={value => changeHandler(value)} value={todo} />
          <Button title="전송" onPress={pressHandler} />
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}
