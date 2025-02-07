import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />

 
      </View>
      <Text style={styles.myFirstText}>
          MY FIRST REACT NATIVE COURSE
          
        </Text>
        <Text style={styles.textNested}>
          PADAYON LANG <Text style={styles.textBold}>MARK BELO</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',

  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',

  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',

  },
  myFirstText:{
    fontSize: 30,
  },
  textNested :{
    fontSize: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },

});

export default App;
