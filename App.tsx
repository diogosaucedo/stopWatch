import React, {useState} from 'react';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const colors = {
  yaleBlue: '#083D77',
  magnolia: '#EFE9F4',
  bittersweet: '#EE6352',
  processCyan: '#08B2E3',
  jade: '#57A773',
};

const App = () => {
  const [number, setNumber] = useState('00:00:00');
  const [button, setButton] = useState('Iniciar!');
  const [last, setLast] = useState(null);
  return (
    <View style={styles.main}>
      <Image source={require('./src/images/crono.png')} />
      <Text style={styles.timer}>{number}</Text>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lastArea}>
        <Text style={styles.lastTime}>
          {last ? 'Ultimo tempo: ' + last : ''}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.yaleBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: colors.magnolia,
    marginTop: -160,
    fontSize: 45,
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 120,
    height: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.magnolia,
    height: 40,
    margin: 15,
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.yaleBlue,
  },
  lastArea: {
    marginTop: 40,
  },
  lastTime: {
    fontSize: 20,
    color: colors.magnolia,
    fontStyle: 'italic',
  },
});
export default App;
