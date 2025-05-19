import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Telas
import LoginScreen from '../screens/LoginScreen';
import PostCreate from '../screens/PostCreate';
import PostDetails from '../screens/PostDetails';
import PostEdit from '../screens/PostEdit';
import PostsList from '../screens/PostsList';

import TeacherCreate from '../screens/TeacherCreate';
import TeacherEdit from '../screens/TeacherEdit';
import TeacherList from '../screens/TeacherList';

import StudentCreate from '../screens/StudentCreate';
import StudentEdit from '../screens/StudentEdit';
import StudentList from '../screens/StudentList';

import AdminDashboard from '../screens/AdminDashboard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="PostsList">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="PostsList" component={PostsList} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
    <Stack.Screen name="PostCreate" component={PostCreate} />
    <Stack.Screen name="PostEdit" component={PostEdit} />

    <Stack.Screen name="TeacherList" component={TeacherList} />
    <Stack.Screen name="TeacherCreate" component={TeacherCreate} />
    <Stack.Screen name="TeacherEdit" component={TeacherEdit} />

    <Stack.Screen name="StudentList" component={StudentList} />
    <Stack.Screen name="StudentCreate" component={StudentCreate} />
    <Stack.Screen name="StudentEdit" component={StudentEdit} />

    <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
  </Stack.Navigator>
</NavigationContainer>

  );
}
