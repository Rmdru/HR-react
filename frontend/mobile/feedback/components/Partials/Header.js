import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Overview } from "../../pages/Overview/Overview"
import { Enquete } from "../../pages/Enquete/EnqueteIndex"
import { Members } from "../../pages/Members/Members"
import { Teams } from "../../pages/Teams/Teams"
import { Reports } from "../../pages/Reports/Reports"
import { MaterialIcons } from '@expo/vector-icons/';

const Tab = createBottomTabNavigator();

export function Header() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Overview') {
                return (
                  <MaterialIcons
                    name="home"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Vragenlijsten') {
                return (
                  <MaterialIcons
                    name="list-alt"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Leden') {
                return (
                  <MaterialIcons
                    name="person"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Teams') {
                return (
                  <MaterialIcons
                    name="group"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Rapportages') {
                return (
                  <MaterialIcons
                    name="insights"
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
          })}
        >
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Vragenlijsten" component={Enquete} />
            <Tab.Screen name="Leden" component={Members} />
            <Tab.Screen name="Teams" component={Teams} />
            <Tab.Screen name="Rapportages" component={Reports} />
        </Tab.Navigator>
    );
}