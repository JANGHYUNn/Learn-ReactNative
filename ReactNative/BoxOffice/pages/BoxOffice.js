import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 8px 12px;
`;

const ListItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  flex-direction: row;
  align-items: center;
`;

const Rank = styled.Text`
  font-size: 14px;
  color: #999999;
  margin-right: 12px;
`;

const MovieName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const key = '66899b7950addc4d0e08846d27609c3e';

function BoxOffice({navigation}) {
  const [movieList, setMovieList] = React.useState([]);

  const getMovieList = async () => {
    try {
      const {data} = await axios.get(
        `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20201003`,
      );
      setMovieList(data.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <Container>
      <Contents>
        <Title>박스 오피스</Title>
        {movieList.length === 0 && <ActivityIndicator size={'large'} />}
        {movieList.map((item) => (
          <ListItem
            key={item.movieCd}
            onPress={() => {
              navigation.navigate('MovieDetail', {movieCd: item.movieCd});
            }}>
            <Rank>{item.rank}</Rank>
            <MovieName>{item.movieNm}</MovieName>
          </ListItem>
        ))}
      </Contents>
    </Container>
  );
}

export default BoxOffice;
