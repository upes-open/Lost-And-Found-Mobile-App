import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity, Image, Pressable, Switch, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./claim.style"
import axios from 'axios';
import idImage from "./images/id.png"
import descriptionImage from "./images/description.png";
import nameImage from "./images/name.png";
import phoneImage from "./images/phone.png";
import dateImage from "./images/calender.png"
import branchImage from "./images/branch.png"
import emailImage from "./images/email.png"

const ClaimItem = () => {
    const [details, setDetails] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sapId, setSapId] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    const checkFormValidity = () => {
        const isDetailsValid = details.length > 0;
        const isNameValid = name.length > 0;
        const isEmailValid = email.length > 0;
        const isBranchValid = branch.length > 0;
        const isYearValid = year.length > 0;
        const isContactNumberValid = contactNumber.length > 0;
        const isSAPIdValid = sapId.length > 0;

        const formIsValid =
            isDetailsValid &&
            isEmailValid &&
            isNameValid &&
            isBranchValid &&
            isYearValid &&
            isContactNumberValid &&
            isSAPIdValid;

        setIsFormValid(formIsValid);
    };


    useEffect(() => {
        checkFormValidity();

    }, [details, name, email, sapId, branch, year, contactNumber])


    const handleSubmit = async () => {
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 10, }}>
                <Text style={styles.heading}>Claim Item Details</Text>
            </View>

            <View >
                <Text style={styles.textinput}> Details </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={descriptionImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={details}
                        multiline
                        numberOfLines={4}
                        onChangeText={(text) => { setDetails(text); checkFormValidity(); }}
                        placeholder="Enter details "
                    />
                </View>
            </View>

            <View >
                <Text style={styles.textinput}> Name </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={nameImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => { setName(text); checkFormValidity(); }}
                        placeholder="Enter your name"
                    />
                </View>
            </View>


            <View >
                <Text style={styles.textinput}> Email </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={emailImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={(text) => { setEmail(text); checkFormValidity(); }}
                    />
                </View>
            </View>

            <View >
                <Text style={styles.textinput}> SAP ID </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={idImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={sapId}
                        onChangeText={(text) => { setSapId(text); checkFormValidity(); }}
                        placeholder="Enter your SAP ID"
                    />
                </View>
            </View>

            <View >
                <Text style={styles.textinput}> Branch </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={branchImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={branch}
                        onChangeText={(text) => { setBranch(text); checkFormValidity(); }}
                        placeholder="Enter your branch"
                    />
                </View>
            </View>

            <View >
                <Text style={styles.textinput}> Year </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={dateImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={year}
                        onChangeText={(text) => { setYear(text); checkFormValidity(); }}
                        placeholder="Enter your year"
                    />
                </View>
            </View>

            <View >
                <Text style={styles.textinput}> Contact Number </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={phoneImage}
                            resizeMode="contain"
                            style={{ width: "55%", height: "55%" }}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={contactNumber}
                        onChangeText={(text) => { setContactNumber(text); checkFormValidity(); }}
                        placeholder="Enter your year"
                    />
                </View>
            </View>

            {
                !isFormValid
                &&
                <Text style={{ fontSize: 14, color: "red", fontFamily: "DMRegular", marginTop: 10, }}> * Please fill in all required fields. </Text>
            }

            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.loginBtn} disabled={!isFormValid} onPress={handleSubmit}>
                    <Text style={styles.loginBtnText}>Claim</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

export default ClaimItem;
