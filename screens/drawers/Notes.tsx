import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../Home/Styles";

export const Notes = (props:any) => {

    const navigation = props.navigation

    const goBackHandler = () => {
        navigation.goBack()
    };

    return (
        <View style={styles.center}>
            <Text style={styles.header}>Notes</Text>
            <View>
                <TouchableOpacity
                onPress={goBackHandler}>
                    <Text style={styles.goBackButtonText}>Назад</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
