import {StyleSheet} from 'react-native';

import colors from '../../configs/colors';

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

export default styles;
