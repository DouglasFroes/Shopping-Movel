import React from 'react';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  return (
    <Background>
      <Icon name="event" size={40} color="#f325f3" />
    </Background>
  );
}

Home.navigationOptions = {
  // tabBarLabel: 'Home',
  tabBarIcon: ({color}) => <Icon name="event" size={20} color={color} />,
};
