import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const Timer = () => {
  const [number, setNumber] = useState('00:00:00');
  const [button, setButton] = useState('Iniciar!');
  const [last, setLast] = useState(null);

  return (
    <View style={styles.main}>
      <Image source={require('../../../src/images/crono.png')} />
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

export {Timer};
