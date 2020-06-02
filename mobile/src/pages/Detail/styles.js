import {StyleSheet} from 'react-native';

import Constant from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constant.statusBarHeight + 20,
        backgroundColor: '#3C3871',


    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    incident: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#C5C1F1',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize:14,
        color:'#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },


    incidentValue: {
        marginTop:8,
        fontSize:15,
        color: '#737380'
    },

    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#C5C1F1',
        marginBottom: 16,
      
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight: 30
    },

    heroDescription:  {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,

    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#3C3871',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'

    }


})
