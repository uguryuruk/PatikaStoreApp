// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} 
        options={{
          title: 'Categories',
          headerStyle: {backgroundColor: 'white'
          },
          headerTitleStyle: {color: "#FFA522"}
        }}
        />
        <Stack.Screen name="MealsPage" component={Meals} 
        options={{
          title: 'Meals',
          headerStyle: {backgroundColor: 'white'
          },
          headerTitleStyle: {color: "#FFA522"}
        }}
        />
        <Stack.Screen name="DetailPage" component={Detail} 
             options={{
              title: 'Meal Details',
              headerStyle: {backgroundColor: 'white'
              },
              headerTitleStyle: {color: "#FFA522"},
              headerTintColor: 'white', // geri ok
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;