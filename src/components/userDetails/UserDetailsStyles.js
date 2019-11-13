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
  profileHeaderContainer: {
    flex: 0.4,
    backgroundColor: 'rgb(121,111, 242)',
    alignItems: CONST.CENTER,
    justifyContent: CONST.CENTER
  },
  userProfileStyle: {
    height: verticalScale(80),
    width: scale(80),
    borderRadius: scale(40)
  },
  userNameText: {
    fontSize: scale(24),
    color: CONST.WHITE_COLOR,
    fontWeight: CONST.BOLD,
    marginTop: scale(5)
  },
  userImagesViewContainer: {
    flex: 0.6
  },
  flatListStyle: {
    flex: 1,
    flexDirection: CONST.ROW,
    marginLeft: scale(2),
    marginRight: scale(2),
  },
  imageItemStyle: {
    flex: 1,
    alignItems: CONST.STRETCH,
  },
  imageStyle: {
    margin: scale(2),
    width: scale(100),
    height: scale(100)
  }
});
