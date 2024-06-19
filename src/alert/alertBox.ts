import {Alert} from 'react-native';


export const showAlertBox = (message: string) =>
  Alert.alert(
    'Babbles',
    message,
    [
      {
        text: 'Ok',
        onPress: () => {},
        // style: 'default',
      },
    ],
  );