import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Button from "./Button";

const Week = () => {
    const daysOfWeek = ['Пн', "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

    return (
        <>
            <View className="mx-auto">
                <View className="flex flex-row justify-between w-full">
                    <Button label={"Пн"} />
                    <Button label={"Вт"} />
                    <Button label={"Ср"} />
                    <Button label={"Чт"} />
                    <Button label={"Пт"} />
                    <Button label={"Сб"} />
                    <Button label={"Вс"} />
                    {/* {daysOfWeek.forEach((day) => {
                        return <Button label={day} />
                    })} */}
                </View>
            </View>
        </>
    );
};

export default Week;
