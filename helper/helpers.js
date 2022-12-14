import { Alert, BackHandler } from "react-native";

export const backButtonHandler = (navigation, path) => {
  const backAction = () => {
    navigation.replace(path);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
};

export const backButtonHandlerAlert = (alertMsg, alertQuestion) => {
  const backAction = () => {
    Alert.alert(alertMsg, alertQuestion, [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
};
