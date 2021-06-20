import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Home/Styles";

export const Feed = (props:any) => {

    const navigation = props.navigation

    const goBackHandler = () => {
        navigation.goBack()
    };

    return (
    <View style={styles.center}>
        <Text style={styles.header}>Feed</Text>
        <View>
                <TouchableOpacity
                onPress={goBackHandler}>
                    <Text style={styles.goBackButtonText}>Назад</Text>
                </TouchableOpacity>
            </View>
    </View>
    );
};
