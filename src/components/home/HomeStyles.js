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
  notificationIcon: {
    marginLeft: 10
  },
  cartIcon: {
    marginRight: 10
  },
  cartsIcon: {
    // width: scale(25),
    // height: scale(25)
  },
  notiIcon: {
    // width: scale(30),
    // height: scale(30)
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
  searchIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 15,
    left: 10,
  },
  filterIcon: {
    position: CONST.POSITION_ABSOLUTE,
    top: 15,
    right: 10,
  },
  dotIcon: {
    marginTop: Platform.OS === CONST.PLATFORM_IOS ? 0 : 10,
    padding: scale(20)
  },
  cellContainer: {
    marginTop: scale(100),
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: 10,
    marginBottom: 20,
    paddingTop: scale(100),
    paddingBottom: scale(20),
    backgroundColor: CONST.WHITE_COLOR
  },
  productImage: {
    alignSelf: CONST.CENTER,
    position: CONST.POSITION_ABSOLUTE,
    top: scale(-80),
    height: verticalScale(150),
    width: scale(40)
  },
  productDetailContainer: {
    marginHorizontal: 20
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
  nameContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN,
    alignItems: CONST.CENTER
  },
  productName: {
    color: CONST.GREY_DARK,
    fontSize: scale(20),
  },
  listContainer: {
    flex: 1,
    marginTop: scale(10),
    marginBottom: scale(10)
  },
  productPrice: {
    marginTop: 15,
    color: CONST.PRIMARY_COLOR,
    fontSize: scale(18),
  },
  productDescription: {
    width: scale(200),
    marginTop: 15,
    textAlign: 'justify',
    color: CONST.GREY_DARK,
    fontSize: scale(15),
  },
  loadMore: {
    alignSelf: CONST.CENTER
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
