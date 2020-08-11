import React, {useEffect} from 'react';
import { StyleSheet, View,  RefreshControl, TouchableOpacity, Dimensions } from 'react-native';

import { fetchNotifications } from '../../../store/actions/index'
import {connect} from 'react-redux'

import NotificationCard from '../../../components/NotificationCard';
import { ScrollView } from 'react-native-gesture-handler';
import Color from '../../../constants/Color';


const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

const All = ({fetchNotifications ,allNotifications}) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    useEffect( () => {
      fetchNotifications();
  }, [])
    return (
      <View style={{ flex: 1, backgroundColor: Color.neutral, paddingTop: Dimensions.get('window').width * .039 }}>
          <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[Color.primary]} tintColor={Color.primary} />
        }
      >  
          <View >{allNotifications.map( notification => {
                            return (<View style={{marginBottom: 8}} key={notification.id}>
                                <TouchableOpacity activeOpacity={notification.read? .4 : .8}>
                                  <NotificationCard  title={notification.title} time={notification.time} read={notification.read} />
                                </TouchableOpacity>
                            </View>);
                        })}
          </View>
        </ScrollView>
      </View>
      
    );
  }

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
    return { allNotifications: state.notifications}
  };

export default connect(mapStateToProps, {fetchNotifications})(All);