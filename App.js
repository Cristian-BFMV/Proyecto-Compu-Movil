import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Home from './src/components/Home';

const Tabs = createBottomTabNavigator();

const ScreenOne = () => {
  return (
    <View>
      <Text>Screen one</Text>
    </View>
  );
};

const ScreenTwo = () => {
  return (
    <View>
      <Text>Screen two</Text>
    </View>
  );
};

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
            name="ScreenOne"
            component={ScreenOne}
            options={{
              title: 'Segunda pantalla',
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
            name="ScreenTwo"
            component={ScreenTwo}
            options={{
              title: 'Tercera pantalla',
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
