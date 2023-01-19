import React, { FunctionComponent } from "react";
import { TextProps } from "./types";
import styled from "styled-components/native"
import { colors } from "../colors";

const StyledText = styled.Text`
    font-size: 37px;
    color: ${colors.white};
    text-align: left;
    font-family: Lato-Bold;
`

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>

}

export default BigText;