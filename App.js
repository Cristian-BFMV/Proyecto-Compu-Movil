import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import TripsCartScreen from './src/screens/TripsCart';
import TripSearchNavigation from './src/screens/Tripsearch';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Inicio',
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="home"
                  size={20}
                  color={focused ? '#80C6D0' : '#5C5C5C'}
                />
              ),
              tabBarActiveTintColor: '#80C6D0',
              tabBarInactiveTintColor: '#5C5C5C',
            }}
          />
          <Tabs.Screen
            name="TripSearch"
            component={TripSearchNavigation}
            options={{
              title: 'Buscar',
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="search1"
                  size={20}
                  color={focused ? '#80C6D0' : '#5C5C5C'}
                />
              ),
              tabBarActiveTintColor: '#80C6D0',
              tabBarInactiveTintColor: '#5C5C5C',
            }}
          />
          <Tabs.Screen
            name="TripsCart"
            component={TripsCartScreen}
            options={{
              title: 'Tiquetes',
              tabBarIcon: ({ focused }) => (
                <AntDesign
                  name="shoppingcart"
                  size={20}
                  color={focused ? '#80C6D0' : '#5C5C5C'}
                />
              ),
              tabBarActiveTintColor: '#80C6D0',
              tabBarInactiveTintColor: '#5C5C5C',
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
