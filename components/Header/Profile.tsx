import React, { FunctionComponent } from "react";
import { ImageSourcePropType, GestureResponderEvent ,StyleProp ,TextStyle, ImageStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.TouchableOpacity`
    flex-direction: coloumn;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`
const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%
    height: 100%;
    border-radius: 15px;
`;

interface ProfileProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((Event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img}/>
        </StyledView>
    )
}

export default Profile;