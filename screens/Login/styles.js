import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: 'column',
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'center'
    },
    imageView:{
        width: 130,
        height: 130
    },
    imageLogin:{
        width: '100%',
        height: '100%'
    },
    textLogin:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonLogin:{
        padding:15,
        borderRadius: 10,
        paddingHorizontal: 80,
        backgroundColor: '#0080ff'
    }
})

export default styles;