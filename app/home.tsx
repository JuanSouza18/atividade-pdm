import { Colors } from "@/constants/Colors";
import { Link, Stack } from 'expo-router';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import{ia} from "./ia";

export default function Home() {

    const [postText, setPostText] = useState("Suck balls")

    return (
        <View style={{
            backgroundColor: Colors.backgroud,
            flex: 1
        }}>
            <Text>oi</Text>
            
            <View style={{
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text style={styles.nothingHereText}>nothing here yet</Text>
            </View>

            <View style={{
                backgroundColor: "#332941",
                marginTop: "auto",
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                paddingHorizontal: 26,
                paddingVertical: 20
            }}>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Image 
                        style={{
                            borderRadius: 999999,
                            height: 48,
                            width: 48
                        }}
                        source={require("@/assets/images/bueno.jpg")}
                    /> 

                    <Text style={{
                        color: "#fff",
                        marginLeft: 8
                    }}>@bueno</Text>
                </View>


                <View style={{
                    marginBottom: 16,
                    marginTop: 16
                }}>
                    <TextInput
                        value={postText}
                        style={{
                            color: "#fff",
                            fontSize: 20
                        }}
                        onChangeText={(text) => {
                            setPostText(text)
                        }}
                        multiline
                    />
                </View>

                <View style={{
                    paddingHorizontal: 36
                }}>
                    
                    <TouchableOpacity
                    onPress={()=> ia(postText)}
                        style={{
                            backgroundColor: "#e72929",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 8,
                            borderRadius: 20
                        }}
                    >
                            <Text style={{
                                color: "#fff"
                            }}>publish</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    nothingHereText: {
        color: "#fff",
        fontSize: 20
    }
})