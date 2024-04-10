/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ButtonProps = {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
    buttonWidth?: number;
};

const stylesheet = createStyleSheet(theme => ({
    button: {
        paddingVertical: 12,
        width: Dimensions.get('screen').width - 16,
        alignSelf: 'flex-start',
        flexGrow: 0,
        backgroundColor: 'purple',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 24,
    },
    buttonContainer: {
        alignItems: 'flex-start',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 1,
    },
}));

export const MyButton = ({ text, onPress, color, textColor, buttonWidth }: ButtonProps) => {
    const { styles } = useStyles(stylesheet);

    return <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity
            style={[styles.button, !!color && { backgroundColor: color }, !!buttonWidth && { width: buttonWidth }]}
            onPress={onPress}
            activeOpacity={0.8}>
            <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
                {text}
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
};
