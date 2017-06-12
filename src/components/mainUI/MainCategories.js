import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  ScrollView,
  Platform,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MainTabBar from './MainTabBar';
import Discovery from './Discovery';
import Profile from './Profile_self';
import CategoryView from './CategoryView';


class MainCategories extends Component {


  // This is to remove fb token for retry purposes
  componentWillMount() {
    // AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <ScrollableTabView
        style={{ marginTop: (Platform.OS === 'android') ? 54 : 64 }}
        initialPage={0}
        locked
        tabBarPosition={(Platform.OS === 'ios') ? 'bottom' : 'top'}
        renderTabBar={() => <MainTabBar />}
      >

        <ScrollView tabLabel="md-browsers" style={styles.tabView}>
          <CategoryView />
        </ScrollView>

        <View tabLabel="md-pin" style={{ flex: 1 }}>
          <Discovery />
        </View>

        <ScrollView tabLabel="ios-contact" style={{ flex: 1, marginTop: 0 }}>
          <Profile />
        </ScrollView>


      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    //padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default MainCategories;
