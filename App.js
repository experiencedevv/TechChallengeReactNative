import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PBTextField } from './src/components/PBTextInput/PBTextField';
import { PBText } from './src/components/PBText/PBText';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: 'red', width: '100%' }}>
        <PBText typography='h1'> Titulo222 </PBText>
        <PBText typography='h4'> Titulo33 </PBText>
        <PBTextField title='Title' subtitle='Subtitle'></PBTextField>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
