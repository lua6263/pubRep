import React from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';

export const HomeScreen = () => {
    const [value, setValue] = React.useState('');
    const [text, setText] = React.useState('чики-брики в дамки');

    const pressHandler = () => {
        setText(() => {
            return value;
        })
    }


    return (
        <ImageBackground 
        source={require('./../../resources/images/rei1.jpg')}
        style={styles.image}
        resizeMode={'cover'}
        blurRadius={1.0}
        fadeDuration={600}
        >
            <View style={styles.conttainer}>
                <Text style={styles.title}>{text}</Text>
                <TextInput
                    placeholder='Текст?'
                    placeholderTextColor='black'
                    style={styles.input}
                    value={value}
                    onChangeText={value => setValue(value)}
                    editable
                />
                <View style={styles.button}>
                    <Button
                        color="darkslateblue"
                        title="Только не жми сюда.."
                        onPress={pressHandler}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    conttainer: {
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: {
        backgroundColor: 'skyblue',
        opacity: 0.70,
        fontVariant: ['small-caps'],
        textDecorationLine: 'underline line-through',
        textAlign: 'center',
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginHorizontal: '5%',
        borderStyle: 'dotted',
        borderRadius: 11,
        borderColor: 'powderblue',
        borderWidth: 2,
    },
    input: {
        backgroundColor: 'skyblue',
        opacity: 0.51,
        borderStyle: 'dashed',
        width: '80%',
        padding: 7,
        borderRadius: 11,
        borderColor: 'powderblue',
        borderWidth: 2,
        textAlign: 'center',
        marginTop: '1%',
        marginBottom: '2%',
        marginLeft: '10%'
    },
    button: {
    },
    image: {
        width: '100%',
        height: '100%',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    }
});

