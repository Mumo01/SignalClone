import React from "react";
import { View, Text, StyleSheet} from 'react-native';

const blue = '#3777f0';
const grey = 'lightgrey';

const myUID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id === myUID;

    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer ]}>
            <Text style={{color: isMe ? 'black' : 'white' }}> 
            {message.content}

            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '70%',
        
    },
    leftContainer: {
        backgroundColor: '#3777f0',
        marginLeft: 10,
        marginRight: 'auto',
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10,
    },
});
 export default Message;