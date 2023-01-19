import React, { FunctionComponent } from "react";
import styled from 'styled-components/native'

//custom components
import { colors } from "../colors";

//icons
import { Ionicons } from "@expo/vector-icons";

const StyledView = styled.View`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

//types 
import { TransactionAviProps } from "./types";
import { managePanProps } from "react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler";

const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return(
        <StyledView style={{backgroundColor: props.background}}>
            <Ionicons name={props.icon} size={25} color={colors.white}/>
        </StyledView>
    )
}

export default TransactionAvi