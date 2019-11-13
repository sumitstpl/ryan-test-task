import { StyleSheet, Platform } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  
});
