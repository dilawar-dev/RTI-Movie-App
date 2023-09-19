import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flexGrow: 1,
  },
  fill: {
    flex: 1,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  full: {
    height: '100%',
    width: '100%',
  },
  mirror: {
    transform: [{scaleX: -1}],
  },
  rotate90: {
    transform: [{rotate: '90deg'}],
  },
  rotate90Inverse: {
    transform: [{rotate: '-90deg'}],
  },
});
