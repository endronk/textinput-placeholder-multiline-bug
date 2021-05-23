import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const App = () => {
  const [text, setText] = React.useState();
  const [placeholder, setPlaceholder] = React.useState();

  React.useEffect(() => {
    setTimeout(() => setPlaceholder('This is a placeholder'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        multiline={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    fontSize: 20,
    marginHorizontal: 16,
    width: 200,
  },
});

export default App;
