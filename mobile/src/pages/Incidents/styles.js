import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:'#fff'

    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#CACACA',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop:48,
        color: '#CACACA', 
        fontWeight:'bold'
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#CACACA' 
    },

    incidentList: {
        marginTop: 32,

    },

    incident: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#EAEAEA',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize:14,
        color:'#41414d',
        marginBottom: 24,
        fontWeight: 'bold'
    },


    incidentValue: {
        marginTop:8,
        fontSize:15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    detailsButtonText: {
        color:'#A5A5A5',
        fontSize: 15,
        fontWeight: 'bold',
        
    },

});