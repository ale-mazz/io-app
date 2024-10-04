import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../../../navigation/routes";
import NewProfileDeleteScreen from "../screens/NewProfileDeleteScreen";
import NewProfileDeleteConfirmation from "../screens/NewProfileDeleteConfirmation";
import NewProfileDeleteSuccess from "../screens/NewProfileDeleteSuccess";
import { NewProfileNavigatorParamList } from "./NewProfileParamsList";

const Stack = createStackNavigator<NewProfileNavigatorParamList>();
const NewProfileStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTES.NEW_PROFILE_DELETE_SCREEN}
      component={NewProfileDeleteScreen}
    />
    <Stack.Screen
      name={ROUTES.NEW_PROFILE_DELETE_CONFIRMATION}
      component={NewProfileDeleteConfirmation}
    />
    <Stack.Screen
      name={ROUTES.NEW_PROFILE_DELETE_SUCCESS}
      component={NewProfileDeleteSuccess}
      {...{ options: { headerShown: false } }}
    />
  </Stack.Navigator>
);
export default NewProfileStackNavigator;
