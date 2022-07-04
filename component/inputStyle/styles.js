import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container : {
        width: width,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    inputText:{
        padding: 10,
        width: width-80,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10
    },
    icon: {
        padding: 10,
        marginLeft: 10,
        marginRight:10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})

export default styles;