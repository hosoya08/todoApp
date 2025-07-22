import React, {useState} from "react";
import {Button, Text, View} from "react-native";

type catProps = {
    age: Number,
    name: string
}

const getFulName = (
    firstName: string,
    lastName: string
) => {
    return `${firstName} ${lastName}`;
}

const Cat = (props: catProps) => {
    const [isHungry, setHungry] = useState(true)

    return (
        <View>
            <Text>I am cat! my name is {getFulName('Tom', 'Cat')}</Text>
            <Text>年齢は{`${props.age}`} あだ名は{props.name}</Text>

            <Text>I'm {isHungry ? 'Hungry' : 'full'}</Text>
            <Button
            onPress={() => {
                setHungry(false);
            }}
            disabled={!isHungry}
            title={isHungry ? 'Give me food, please!' : 'Thank you for food!'}
            />
        </View>
    )
}

export default Cat;
