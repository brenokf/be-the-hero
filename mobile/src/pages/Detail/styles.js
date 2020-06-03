import {StyleSheet} from 'react-native';

import Constant from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constant.statusBarHeight + 20,
        backgroundColor: '#fff',


    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    incident: {
        padding:24,
        borderRadius:8,
        backgroundColor:'#F2F2F2',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize:14,
        color:'#707070',
        fontWeight: 'bold',
        marginTop: 24,
    },


    incidentValue: {
        marginTop:8,
        fontSize:15,
        color: '#818181'
    },

    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#E8E7E7',
        marginBottom: 16,
      
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize:20,
        color:'#8E8E8E',
        lineHeight: 30
    },

    heroDescription:  {
        fontSize: 15,
        color: '#767676',
        marginTop: 16,

    },

    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
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
