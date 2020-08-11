import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions, ScrollView, StatusBar, TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';

import Color from '../constants/Color';
import Heading from '../components/Heading';
import HeadingSecondary from '../components/HeadingSecondary';
import IconButtonBig from '../components/IconButtonBig';
import {connect} from 'react-redux'
import {  fetchHomeworks, fetchTests, fetchExams, fetchAllClasses, } from '../store/actions/index'
import ScheduleCard from '../components/ScheduleCard';
import RoutineAccordion from '../components/RoutineAccordion';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
 
  return isFocused ? <StatusBar {...props} /> : null;
}


const timing = [
    { day: 'Sun' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
    { day: 'Tue' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
    { day: 'Thu' , time:['8:00 AM - 9:00 AM', '10:00 AM - 11:00 AM'] },
]  
 

const ClassScreen = ({navigation, fetchExams, fetchAllClasses, fetchHomeworks, fetchTests, tests, exams, homeworks, route, classes}) => {
    const oneClass = classes.find(classes => classes.name === route.params.subjectName )
    useEffect( () => {
        fetchExams();
        fetchHomeworks();
        fetchTests();
        fetchAllClasses();
    }, [])
    
    const renderClassTime = () => {
        if( classes.length > 0){
            if (oneClass.join) { 
                return <TouchableOpacity activeOpacity={.7}  >
                    <IconButtonBig title='Join Learning' bgColor={Color.primary} iconName='videocamera' iconColor={Color.neutral} titleColor={Color.neutral} />
                </TouchableOpacity> 
            } 
                return <View style={styles.nextClasscontainer}>
                    <HeadingSecondary style={{color: Color.primary, fontFamily: 'Rubik-Medium'}}>Next Class</HeadingSecondary>
                    <HeadingSecondary style={{color: Color.primary, fontFamily: 'Rubik-Medium'}}>{oneClass.nextClass}</HeadingSecondary>
                </View> }

            return <></>
        }

    return (
        <SafeAreaView style={{flex: 1,backgroundColor: route.params.color }}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor={route.params.color} />
            <View style={{ flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between' , paddingHorizontal: 20, paddingVertical: 16,}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={.3} onPress={()=> navigation.goBack()}>
                        <AntDesign name="back" size={Dimensions.get('window').width * .0595} color={Color.neutral} style={{marginRight: 16}} />
                    </TouchableOpacity>
                    <Heading style={{color: Color.neutral, width: '75%'}}>{route.params.subjectName}</Heading>
                </View>
                <TouchableOpacity activeOpacity={.3} >
                        <AntDesign name="message1" size={Dimensions.get('window').width * .0595} color={Color.neutral}/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: Color.neutral, borderTopLeftRadius: 32, borderTopRightRadius: 32}}>
            <View style={styles.body}>
                {renderClassTime()}
                <TouchableOpacity activeOpacity={.5} style={{marginTop: 8}}>
                    <IconButtonBig title='Class Report' bgColor={Color.inactive} iconName='barschart' iconColor={Color.primary} titleColor={Color.primary} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} style={{marginTop: 8}}  onPress={()=> navigation.navigate('ClassNotes', {subjectName: route.params.subjectName}) } >
                    <IconButtonBig title='Class Notes' bgColor={Color.inactive} iconName='folder1' iconColor={Color.primary} titleColor={Color.primary} />
                </TouchableOpacity>
                <RoutineAccordion timing={timing} bgColor={Color.inactive} brColor={'transparent'} textColor={Color.primary} />
                <View style={{marginTop: 16}}>
                    <Heading>Teacher</Heading>
                    <TouchableOpacity activeOpacity={.5} onPress={()=> navigation.navigate('TeacherScreen') }  >
                        <View style={{ flexDirection: 'row', alignItems:"center", marginTop: 8,}}>
                            <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: Color.lightGrey, marginRight: 8}}></View>
                            <HeadingSecondary>Sumon Sonjoy</HeadingSecondary>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 16}}>
                    <Heading>Exam</Heading>
                    {exams.map( exam => {
                        return (<View style={{marginTop: 8,}} key={exam.id}>
                            <TouchableOpacity activeOpacity={exam.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...exam}) }>
                                <ScheduleCard title={exam.title} subject={exam.subject} date={exam.date} submitted={exam.submitted} type={exam.type} />
                            </TouchableOpacity>
                        </View>);
                    })}
                </View>
                <View style={{marginTop: 16}}>
                    <Heading>Test</Heading>
                    {tests.map( test => {
                        return (<View style={{marginTop: 8,}} key={test.id}>
                            <TouchableOpacity activeOpacity={test.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...test}) } >
                                <ScheduleCard title={test.title}  subject={test.subject} date={test.date} submitted={test.submitted} type={test.type}/>
                            </TouchableOpacity>
                        </View>);
                    })}
                </View>
                <View style={{marginTop: 16, marginBottom: 16}}>
                    <Heading>Homework</Heading>
                    {homeworks.map( homework => {
                            return (<View style={{marginTop: 8,}} key={homework.id}>
                                <TouchableOpacity activeOpacity={homework.submitted === '' ? 0.5 : 0.7} onPress={()=> navigation.navigate('Assignment', { ...homework }) } >
                                    <ScheduleCard title={homework.title} subject={homework.subject} date={homework.date} submitted={homework.submitted} type={homework.type}/>
                                </TouchableOpacity>
                            </View>);
                        })}
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
    buttonContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between'
    },
    buttonIcon: {
        borderRadius: Dimensions.get('window').width * .25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    nextClasscontainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: Dimensions.get('window').width * .039,
        alignItems : 'center',
        justifyContent: 'space-between',
    },
    routineContainer: {
        backgroundColor: Color.inactive,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginTop: 8,
        borderRadius: Dimensions.get('window').width * .039,
    },
    dayHeaderContainer: {
        paddingTop: 8,
    },
    dayHeader: {
        color: Color.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Color.neutral,
        margin: 2,
        padding: 8,
        borderRadius: 8
    },
    routineText: {
        color: Color.primary
    }

});

const mapStateToProps = (state) => {
    return { tests: state.tests, exams: state.exams, homeworks: state.homeworks, classes: state.allClasses };
  };

export default connect(mapStateToProps , {fetchExams, fetchAllClasses, fetchHomeworks, fetchTests})(ClassScreen);