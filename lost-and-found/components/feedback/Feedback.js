import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './feedback.style';
import { AirbnbRating } from 'react-native-ratings';
import image from "./feedback.png";

const  Feedback = () => {

    const [details, setDetails] = useState({ email: "", feedback: "" });
    const host = "https://lost-and-found.cyclic.app";

    const onChange = (name, value) => {
        setDetails({ ...details, [name]: value });
    };

    const handleSubmit = async () => {
        // API call
        const url = `${host}/feedback`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: details.email, feedback: details.feedback })
        });

        const json = await response.json();
        console.log(json);
        setDetails({ email: "", feedback: "" });
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.heading}>Feedback Form</Text>
                </View>
                <Text style={styles.text}>
                    Thank you for taking your time to provide feedback. We appreciate hearing from you and will review your comments carefully.
                </Text>
            </View>

            <View style={{ flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                <Image
                    source={image}
                    resizeMode="contain"
                    style={{ height: 200 }}
                />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(text) => onChange("email", text)}
                    value={details.email}
                />

                <Text style={styles.formText} >How would you rate us?</Text>
                <AirbnbRating
                    count={5}
                    reviews={["I just hate it 😠", "I don't like it 😞", "It is Okay 😐", "I like it 😃", "I love it 😍"]}
                    defaultRating={0}
                    size={40}
                    selectedColor={"#e75959"}
                    reviewColor={"black"}
                    reviewSize={20}
                    starStyle={{ margin: 6 }}
                />

                <View style={{ paddingTop: 30 }} />
                <TextInput
                    style={[styles.textInput]}
                    placeholder="Share your experience or suggestions"
                    multiline
                    numberOfLines={5}
                    onChangeText={(text) => onChange("feedback", text)}
                    value={details.feedback}
                    textAlignVertical="top"
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                    <Text style={styles.loginBtnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};



export default Feedback;
