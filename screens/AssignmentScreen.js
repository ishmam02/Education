import React  from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';

import Color from '../constants/Color';
import Heading from '../components/Heading';
import HeadingSecondary from '../components/HeadingSecondary';
import BodyText from '../components/BodyText';
import BodyTextSmall from '../components/BodyTextSmall';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
 
  return isFocused ? <StatusBar {...props} /> : null;
}

const AssignmentScreen = ({navigation, route}) => {
    let submitted;
    let bgColor;
    let textColor = Color.neutral;
    let brColor;
    let submitStyles;

    if(route.params.submitted === 'Yes') {
        submitStyles = styles.submittedContainer;
        bgColor = Color.primary;
        brColor = Color.primary;
        submitted = <View style={[styles.submitted, { backgroundColor: Color.primary}]}><AntDesign name="check" size={Dimensions.get('window').width * .0595} color={Color.neutral} /></View>
    } else if (route.params.submitted === 'No'){
        submitStyles = styles.submittedContainer;
        brColor = Color.danger;
        bgColor = Color.danger;
        submitted = <View style={[styles.submitted, {backgroundColor: Color.danger}]}><AntDesign name="close" size={Dimensions.get('window').width * .0595} color={Color.neutral} /></View>
    } else {
        brColor = 'transparent';
        bgColor = Color.inactive;
        textColor = Color.primary;
        submitted = <></>; submitStyles = styles.submittedContainer; brColor=Color.primary
    }
    

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: bgColor }}>
            <FocusAwareStatusBar barStyle={route.params.submitted === '' ? 'dark-content' : 'light-content'} backgroundColor={bgColor} />
            <View style={{ flexDirection: 'row' , alignItems: 'center' , paddingHorizontal: 20, paddingVertical: 16,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={.3} onPress={()=> navigation.goBack()}>
                        <AntDesign name="back" size={Dimensions.get('window').width * .0595} color={textColor} style={{marginRight: 16}} />
                    </TouchableOpacity>
                    <View>
                        <Heading style={{color: textColor}}>{route.params.type}</Heading>
                        <BodyText style={{color: textColor, fontFamily: 'Rubik-Medium'}} >Class: {route.params.subject}</BodyText>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: Color.neutral, borderTopLeftRadius: 32, borderTopRightRadius: 32}}>
            <View style={styles.body}>
                <View style={styles.headingContainer}>
                    <View>
                        <Heading>{route.params.title}</Heading>
                        <BodyText style={{marginTop:0}}>Marks: 25{route.params.marks}</BodyText>
                        <BodyText style={{marginTop:0}}>{route.params.type === 'Homework' ? 'Due:' : 'Date:'} {route.params.date}</BodyText>
                        { route.params.duration ?  <BodyText style={{marginTop:0}}>Duration: {route.params.duration}</BodyText> : null }
                    </View>
                    <View style={[submitStyles, {borderColor: brColor, borderWidth: 2 }]}>
                        {submitted}
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <HeadingSecondary style={{fontFamily: 'Rubik-Medium'}}>Description</HeadingSecondary>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</BodyText>
                </View>
                <View style={{marginBottom: 16}}>
                    <HeadingSecondary style={{fontFamily: 'Rubik-Medium'}}>Submission</HeadingSecondary>
                    <BodyText>Type: {route.params.submissionType} { route.params.type === 'Homework' ? 'submission' : route.params.type}</BodyText>
                    { route.params.submissionType === 'Online' ? <View style={{padding: 0, borderRadius: 24, marginTop: 8}}>
                        <TouchableOpacity activeOpacity={.7} >
                        <View style={{borderColor: Color.secondary, borderWidth: 0, padding: 8, borderRadius: 12, backgroundColor: Color.primary}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                                <AntDesign name="addfile" size={24} color={Color.neutral} style={{marginRight: 8}} />
                                <HeadingSecondary style={{fontFamily: 'Rubik-Medium', color: Color.neutral}}>Add File</HeadingSecondary>
                            </View>
                        </View>
                        </TouchableOpacity>
                    </View> : null }
                </View>
                <View>
                    <HeadingSecondary style={{fontFamily: 'Rubik-Medium'}}>Activity</HeadingSecondary>
                    <BodyTextSmall>This conversation is not visible to everyone</BodyTextSmall>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    body: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    submittedContainer: {
        height: Dimensions.get('window').width * .14,
        width: Dimensions.get('window').width * .14,
        backgroundColor: Color.neutral,
        borderRadius: 1000,
        justifyContent: 'center'
    },
    submitted: {
        height: Dimensions.get('window').width * .11,
        width: Dimensions.get('window').width * .11,
        borderRadius: 1000,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 24,
        backgroundColor: Color.inactive,
        marginBottom: 16
    }
});


export default AssignmentScreen;