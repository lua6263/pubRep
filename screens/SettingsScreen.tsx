import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './Home/Styles';

export const SettingsScreen = (props:any) => {
    const navigation = props.navigation

    const goBackHandler = () => {
        navigation.goBack()
    };

    return (
        <View style={styles.center}>
            <Text style={styles.header}>Настройки</Text>
            <View>
                <TouchableOpacity
                onPress={goBackHandler}>
                    <Text style={styles.goBackButtonText}>Назад</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


