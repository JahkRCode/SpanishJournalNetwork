import React, {PureComponent} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

class FormInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    _handleChange = value => {
        this.props.onChange(this.props.name, value);
    };
    _handleTouch = () => {
        this.props.onTouch(this.props.name);
    };
    render() {
        const { label, error, keyboardType, ...rest } = this.props;
        console.warn("***** ERROR: " + JSON.stringify(error))
        const betterVar = {...rest}
        return (
            <View style={styles.FormFieldContainer}>
                <Input
                    label={label}
                    labelStyle={styles.FormLabel}
                    onBlur={this._handleTouch}
                    placeholder={label} {...rest}
                    onChangeText={this._handleChange}
                    keyboardType={keyboardType}
                    errorMessage={error}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    FormFieldContainer: {
        width: '90%',
        alignSelf: 'center',
    },
    FormValidationMessage: {
        fontSize: 20,
    },
    FormLabel: {
        color: 'white',
        fontFamily: 'KGHAPPY'
    }
});
export default FormInput;

