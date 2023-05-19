import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileEdit from '../screens/ProfileEdit';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
    const user = props.user
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Profile">
    {() => <Profile/>}
    </Stack.Screen>
    <Stack.Screen name="ProfileEdit">
    {() => <ProfileEdit  reloadUser={props.reloadUser}/>}
    </Stack.Screen>
    
  </Stack.Navigator>
</NavigationContainer>
  );
}

