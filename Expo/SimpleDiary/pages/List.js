import React from 'react';

import Container from '../components/Container'
import Contents from '../components/Contents'
import Button from '../components/Button'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage'
import _ from 'lodash'

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
`

const Label = styled.Text`
    font-size: 20px;
`;

function List({navigation}) {
    const [list, setList] = React.useState([])
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('list')
            .then(list => {
                if(list !== null) {
                    setList(JSON.parse(list))
                }
            })
        })
        return unsubscribe;
    },[])

    return(
        <Container>
            <Contents>
                {_.sortBy(list, 'date').map(item => (
                    <ListItem key={item.date} onPress={() => {navigation.navigate("Detail", {date: item.date, text: item.text})}}>
                        <Label>{item.date}</Label>
                    </ListItem>
                ))}
                
            </Contents>
            <Button onPress={() => {navigation.navigate('Form')}}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;