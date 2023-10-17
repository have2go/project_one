import { useState } from "react";
import { View, Pressable, Text } from "react-native";

export default function Button({ label }) {
    const [bgColor, setBgColor] = useState("#000");

    const onButtonClick = (label) => {
        if (bgColor === "#000") {
            setBgColor("#555");
        } else {
            setBgColor("#000");
        }

        alert(`Привычки на ${label}`)
    };

    return (
        <View
            className={`border h-[44px] w-[44px] rounded-full bg-[${bgColor}]`}
        >
            <Pressable
                className="w-full h-full flex justify-center items-center"
                onPress={() => {
                    // alert("You pressed a button.");
                    onButtonClick(label);
                }}
            >
                <Text className="">{label}</Text>
            </Pressable>
        </View>
    );
}
