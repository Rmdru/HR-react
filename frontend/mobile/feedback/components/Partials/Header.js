import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Overview } from "../../pages/Overview/Overview"
import { Login } from "../../pages/Login/Login"

const Tab = createBottomTabNavigator();

export function Header() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    );
}