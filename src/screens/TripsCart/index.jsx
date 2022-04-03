import { createStackNavigator } from '@react-navigation/stack';
import TripCartDetails from './components/TripCartDetails';
import TripsCart from './components/TripsCart';

const TripsCartStack = createStackNavigator();

const TripsCartScreen = () => {
  return (
    <TripsCartStack.Navigator>
      <TripsCartStack.Screen
        name="TripsCart"
        component={TripsCart}
        options={{ headerShown: false }}
      />
      <TripsCartStack.Screen
        name="TripCartDetails"
        component={TripCartDetails}
        options={{
          title: 'Tiquete',
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
    </TripsCartStack.Navigator>
  );
};

export default TripsCartScreen;
