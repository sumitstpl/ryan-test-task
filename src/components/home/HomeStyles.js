import { StyleSheet, Platform } from 'react-native';
import ApplicationStyles from '../../theme/applicationStyles';
import scale, { verticalScale } from '../../utils/scale';
import Metrics from '../../utils/Dimensions';
import * as CONST from '../../utils/constants';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: CONST.LIGHT_OFF_COLOR
  },
  headerContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER,
    height: scale(50),
    marginTop: scale(10)
  },
  searchContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: CONST.BORDER_COLOR_GREY_LIGHT,
    borderRadius: 10,
    marginHorizontal: scale(10),
  },
  searchInput: {
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    height: scale(50),
    fontSize: scale(20),
    marginHorizontal: scale(35),
    color: CONST.BLACK_COLOR,
  },
  usrNameTxt: {
    fontSize: scale(16),
    color: CONST.GREY_COLOR,
    textAlign: 'center',
    left: scale(10),
    top: verticalScale(10)
  },
  userImg: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
  },
  subContent: {
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  img: {
    alignSelf: 'center'
  },
  rowViewContainer: {
    width: Metrics.screenWidth * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: verticalScale(50),
    marginVertical: verticalScale(5)
  }
});
