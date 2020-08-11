import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Color from '../constants/Color';
import Heading from '../components/Heading';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
   
    return isFocused ? <StatusBar {...props} /> : null;
  }

  
class MyWebComponent extends Component {
  render() {  
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.primary }}>
            <FocusAwareStatusBar barStyle='light-content' backgroundColor={Color.primary} />
            <View style={{ flexDirection: 'row' , alignItems: 'center' , paddingHorizontal: 20, paddingVertical: 8,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={.3} onPress={()=> this.props.navigation.goBack()}>
                        <AntDesign name="back" size={Dimensions.get('window').width * .0595} color={Color.neutral} style={{marginRight: 16}} />
                    </TouchableOpacity>
                    <View>
                        <Heading style={{color: Color.neutral}}>Class Notes</Heading>
                    </View>
                </View>
            </View>
            <WebView style={{ flex:1}} source={{ uri: 'https://reactnativemaster.com/wp-content/uploads/2020/02/React-native-document-viewer-pdf-sample.pdf' }} />
        </SafeAreaView>
    )
  }
}


export default MyWebComponent;