import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const Dima = () => {
    const [name, setName] = useState("");
    const [isShowing, setIsShowing] = useState(false);

    return (
        <>
            <View
                style={{
                    margin: "auto",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Text>Как вас зовут?</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Имя"
                    onChangeText={(newName) => setName(newName)}
                    defaultValue={name}
                    onSubmitEditing = {(event) => (setIsShowing(true))}></TextInput>
                <View>
                    {isShowing && <Text style={{marginTop: 70, fontSize: 30}}>{name} ты далбаеб</Text>}
                </View>
            </View>
        </>
    );
};

export default Dima;
