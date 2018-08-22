import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 0,
        padding: 20,
        backgroundColor: '#ffffff',
        //height: screenHeight
      },
    form: {
        justifyContent: 'center',
        marginTop: 7,
        padding: 0,
        backgroundColor: '#ffffff'
    }
});

export default styles;