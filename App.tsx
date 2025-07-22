import { View, Text, ScrollView, Image, TextInput } from 'react-native';
import Cat from './src/components/Cat';

function App() {

  return (
    <ScrollView>
      <Text>some text</Text>
      <View>
        <Text>some text in view</Text>
        <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200}}
        />
      </View>
      <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue='You can type in me'
      />

      <Cat age={10} name='tomCat'/>
    </ScrollView>
  );
}

export default App;
