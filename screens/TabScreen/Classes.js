import React, {useEffect} from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity ,StatusBar } from 'react-native';
import {connect} from 'react-redux'
import { fetchAllClasses } from '../../store/actions/index'

import {SafeAreaView} from 'react-native-safe-area-context'

import Color from '../../constants/Color';
import { AntDesign } from '@expo/vector-icons';
import Heading from '../../components/Heading';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';

import ClassCardSmall from '../../components/ClassCardSmall';


const Classes = ({allClasses, fetchAllClasses, navigation}) => {
    useEffect( () => {
        fetchAllClasses();
    }, [])
    return (
        <SafeAreaView style={{flex: 1,backgroundColor: Color.neutral}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <TouchableOpacity activeOpacity={.7}>
                        <View style={styles.findTeacher}>
                            <View style={styles.findIcon}>
                                <AntDesign name="search1" size={Dimensions.get('window').width * .07} color={Color.neutral} />
                            </View>
                            <Heading style={styles.findTitle}>Find Class</Heading>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginTop: 8}} >{allClasses.map( classes => {
                            return (<View style={{marginBottom: 8}} key={classes.id}>
                                <TouchableOpacity activeOpacity={.6} onPress={()=> navigation.navigate('Class', { subjectName: classes.name, color: classes.color}) } >
                                    <ClassCardSmall name={classes.name} nextClass={classes.nextClass} join={classes.join} color={classes.color} />
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
        paddingVertical: 8
    },
    findTeacher: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: Color.primary,
        marginHorizontal:Dimensions.get('window').width * .049,
        marginTop: 8,
        borderRadius: Dimensions.get('window').width * .039,
        alignItems : 'center',
    },
    findIcon: {
        padding: 8,
        borderRadius: Dimensions.get('window').width * .25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14
    },
    findTitle : {
        color: Color.neutral
    },
});

const mapStateToProps = (state) => {
    return { allClasses: state.allClasses};
  };

export default connect(mapStateToProps , {fetchAllClasses})(Classes);