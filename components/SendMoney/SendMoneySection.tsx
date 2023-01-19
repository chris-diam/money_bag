import React,  {FunctionComponent, useRef } from 'react'
import styled from 'styled-components/native'
import BottomSheet from 'reanimated-bottom-sheet'


//components 
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'
import SmallText from '../Texts/SmallText'

//types
import { SendMoneySectionProps } from './types'

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {

    const sheetRef = useRef<BottomSheet>(null)

    return (

    )
}

export default SendMoneySection