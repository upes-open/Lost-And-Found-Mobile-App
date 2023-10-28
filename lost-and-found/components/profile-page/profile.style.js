import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: ScreenHeight - 70,
  },

  contentWrapper: {
    width: '100%',
    // justifyContent: 'space-around',
    alignItems: 'center',
    gap: 50,
  },

  bannerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#9c27b0',
    padding: 20,
    elevation: 10,
  },

  profileImageContainer: {
    width: 135,
    height: 135,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  userName: {
    width: '100%',
    color: 'white',
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'DMBold',
  },

  userEmail: {
    fontFamily: 'DMRegular',
    color: 'white',
    opacity: 0.8,
  },

  itemCountContainer: {
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },

  itemCountBox: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },

  itemCount: {
    fontSize: 50,
    fontFamily: 'DMBold',
    color: '#9c27b0',
  },

  itemLabel: {
    fontSize: 20,
    fontFamily: 'DMRegular',
  },

  logoutBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 5,
  },

  logoutText: {
    flex: 1,
    fontFamily: 'DMBold',
    textAlign: 'center',
    color: 'red',
    fontSize: 22,
    textTransform: 'uppercase',
  },
});

export default styles;
