import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TripSearch from '../components/TripSearch';
import TripSearchResults from '../components/TripSearchResults';

const TripSearchStack = createStackNavigator();

const TripSearchScreen = () => {
  return (
    <TripSearchStack.Navigator>
      <TripSearchStack.Screen
        name="TripSearchForm"
        component={TripSearch}
        options={{ headerShown: false }}
      />
      <TripSearchStack.Screen
        name="TripSearchBuenas"
        component={TripSearchResults}
        options={{
          title: 'Viajes',
          headerTintColor: '#6D6D6D',
          headerTitleAlign: 'center',
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: '#FFF',
          },
        }}
      />
    </TripSearchStack.Navigator>
  );
};

export default TripSearchScreen;
