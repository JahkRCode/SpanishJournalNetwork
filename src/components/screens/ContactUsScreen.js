/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Button, Icon, Header } from 'react-native-elements';
import { Formik } from 'formik';
//import  axios from 'axios';
import * as Yup from 'yup';
import FormInput from '../../containers/FormInput';

/***** Contact Form Inputs *****
 ** First Name
 ** Last Name
 ** Company/Affliate Name
 ** Email Address
 ** Phone Number
 ** Message
 ** 
**********************************/
export default class ContactUsScreen extends Component{
    static navigationOptions = {
        drawerIcon: (
            <Image
                style={{ width: 25, height: 25 }}
                source={require('./../../../assets/images/contactus.png')}
            />
        )
    }; 
    _handleSubmit = async (values, bag) => {
        console.warn("***** HandleSubmit: " + JSON.stringify(values));
        try {
            fetch('https://www.spanishjournal.com/wp-json/wp/v2/users',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: values.emailAddress,
                    first_name: values.fName,
                    last_name: values.lName,
                    password: 'password',
                    username: values.fname+values.lName,
                    nickname: values.fname+values.lName,
                    description: values.caName + values.phoneNumber + values.formMessage,
                }),
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LnNwYW5pc2hqb3VybmFsLmNvbSIsImlhdCI6MTU1NDA4ODM1NiwibmJmIjoxNTU0MDg4MzU2LCJleHAiOjE1NTQ2OTMxNTYsImRhdGEiOnsidXNlciI6eyJpZCI6IjcyNDUifX19.LBzu9ZN5WGgEghyaaozyp5shIkQ3nwiaTJGoSAvn3gE',
                    "Content-Type": "application/json"
                },
            }).then(function (response) {
                console.warn("***** RESPONSE POST: " + JSON.stringify(response));
                alert("***** CONTACT US DATA: " + JSON.stringify(values));
            }).then(function (error) {
                console.warn("***** ERROR POST: " + JSON.stringify(error));
            });            
        } catch (error) {
            bag.setSubmitting(false);
            bag.setErrors(error);
        }
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <Header
                        backgroundImage={require('./../../../assets/images/background.png')}
                        //backgroundImageStyle={styles.HeaderImage}
                        leftComponent={{ icon: 'menu', size: 40, color: 'black', onPress: () => this.props.navigation.toggleDrawer()}}
                        centerComponent={<Image style={styles.sjTitle} source={require('./../../../assets/images/sjn_logo.gif')}/>}
                    />
                <ImageBackground source={require('./../../../assets/images/background.png')} style={styles.FormContainer}>
                <KeyboardAvoidingView behavior="padding">
                    <Formik
                        initialValues={{ fName:'', lName:'', caName:'', emailAddress:'', phoneNumber:'', formMessage:'' }}
                        onSubmit={this._handleSubmit}
                        validationSchema={Yup.object().shape({
                            fName: Yup.string().required('First Name is required'),
                            lName: Yup.string().required('Last Name is required'),
                            emailAddress: Yup.string().email('Email address must be valid').required('Email Address is required'),
                            phoneNumber: Yup.number().positive(),
                            formMessage: Yup.string().required('Message is required'),
                        })}
                        render={({ values, handleSubmit, setFieldValue, errors, setFieldTouched, isValid, isSubmitting}) => (
                            <React.Fragment>
                                <FormInput 
                                    label='First Name' 
                                    autoCapitalize="none"
                                    value={values.fName}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="default"
                                    name="fName"
                                    error={errors.fName}
                                />
                                <FormInput 
                                    label='Last Name' 
                                    autoCapitalize="none"
                                    value={values.lName}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="default"
                                    name="lName"
                                    error={errors.lName}
                                />
                                <FormInput 
                                    label='Company/Affiliate Name' 
                                    autoCapitalize="none"
                                    value={values.caName}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="default"
                                    name="caName" 
                                />
                                <FormInput 
                                    label='Email Address' 
                                    autoCapitalize="none"
                                    value={values.emailAddress}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="email-address"
                                    name="emailAddress"
                                    error={errors.emailAddress}
                                />
                                <FormInput 
                                    label='Phone Number' 
                                    autoCapitalize="none"
                                    value={values.phoneNumber}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="phone-pad"
                                    name="phoneNumber"
                                    error={errors.phoneNumber}
                                />
                                <FormInput 
                                    label='Message' 
                                    autoCapitalize="none"
                                    value={values.formMessage}
                                    onChange={setFieldValue}
                                    onTouch={setFieldTouched}
                                    keyboardType="default"
                                    name="formMessage"
                                    error={errors.formMessage}
                                />
                                <Button 
                                    buttonStyle={styles.SubmitButton} 
                                    title='Submit'
                                    type='clear'
                                    titleStyle={styles.SubmitButtonText}
                                    icon={
                                        <Icon
                                            name="check"
                                            type="font-awesome"
                                            reverse={true}
                                            raised={true}
                                        />
                                    }
                                    onPress={handleSubmit}
                                    disabled={!isValid || isSubmitting}
                                    loading={isSubmitting}
                                />
                            </React.Fragment>
                        )}
                    /> 
                    </KeyboardAvoidingView>   
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubmitButton: {
        width: '100%',
        marginTop: 20,
    },
    SubmitButtonText: {
        fontSize: 24,
    },
    headerTitle: {
        color: 'black',
        fontSize: 24
    },
    sjTitle: {
        flex: 1,
        width: 50,
        padding: 20,
        alignItems: 'center',
    },
});
