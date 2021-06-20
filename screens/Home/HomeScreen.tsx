import 'react-native-gesture-handler';
import * as React from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME } from '../../styles/Theme';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = (props:any) => {
    const navigation = props.navigation;
    const [value, setValue] = React.useState('');
    const [text, setText] = React.useState('чики-брики в дамки');

    const pressHandler = () => {
        setText(() => {
            return value;
        })
    }

    const handleNavigate = () => {
        navigation.navigate('SettingsScreen')
    };

    return (
        <ImageBackground
            source={require('./../../resources/images/rei1.jpg')}
            style={styles.image}
            resizeMode={'cover'}
            blurRadius={1.3}
        >
            <LinearGradient
            colors={[THEME.BACKGROUNDFADE_COLOR_1, THEME.BACKGROUNDFADE_COLOR_2, THEME.BACKGROUNDFADE_COLOR_3]}
            style={styles.imageBackgroundGradient}
            >
                <View style={styles.conttainer}>
                    <View style={styles.titleBackground}
                    >
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <TextInput
                        placeholder='Текст?'
                        placeholderTextColor='black'
                        style={styles.input}
                        value={value}
                        onChangeText={value => setValue(value)}
                        editable
                    />
                    <LinearGradient
                    colors={[THEME.BUTTONFADE_COLOR_1, THEME.BUTTONFADE_COLOR_2, THEME.BUTTONFADE_COLOR_3]}
                    style={styles.changeButton}>
                        <TouchableOpacity
                            onPress={pressHandler}
                        >
                            <Text style={styles.changeButtonText}>Может не надо...</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                    colors={[THEME.BUTTONFADE_COLOR_1, THEME.BUTTONFADE_COLOR_2, THEME.BUTTONFADE_COLOR_3]}
                    style={styles.screenChangeButton}>
                        <TouchableOpacity
                            onPress={handleNavigate}
                        >
                            <Text style={styles.screenChangeButtonText}>Настройки</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    </View>
            </LinearGradient>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    conttainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        opacity: 1,
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        paddingVertical: 15,
        // fontFamily: 'Candarali'
    },
    titleBackground: {
        backgroundColor: THEME.LIGHTBLUEBACKGR_COLOR,
        marginHorizontal: '5%',
        borderStyle: 'solid',
        borderRadius: 10,
        borderColor: 'powderblue',
        borderWidth: 2,
        paddingLeft: 15,
        paddingRight: 15,
    },
    input: {
        backgroundColor: THEME.LIGHTBLUE_COLOR,
        opacity: 0.51,
        borderStyle: 'solid',
        width: '80%',
        padding: 7,
        borderRadius: 11,
        borderColor: 'powderblue',
        borderWidth: 2,
        textAlign: 'center',
        marginTop: '1%',
        marginBottom: '2%',
        marginHorizontal: '25%'
    },
    changeButton: {
        opacity: 1,
        marginHorizontal: '10%',
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
    },
    changeButtonText: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'GOST Common Italic'
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.9
    },
    imageBackgroundGradient: {
        opacity: 0.8
    },
    screenChangeButton: {
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 15,
        paddingRight: 15,
        marginHorizontal: '10%',
        marginTop: '2%',
        padding: '1%',
    },
    screenChangeButtonText: {
        fontSize: 24,
        fontFamily: 'GOST Common Italic'
    },
});