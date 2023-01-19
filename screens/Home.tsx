import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import logo1 from '../assets/cards/mc.png'
import logo2 from '../assets/cards/visa.png'

//custom components
import { Container } from "../components/shared"
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight};
    width: 100%;
    flex: 1;
`

const Home: FunctionComponent = () => {

    const cardsData = [
        {
            id:1,
            accountNo: '3650289739',
            balance: 2000,
            alias: 'Work Debit',
            logo: logo1,
        },
        {
            id:2,
            accountNo: '3650289739',
            balance: 1003,
            alias: 'Personal Debit',
            logo: logo2,
        },
        {
            id:3,
            accountNo: '3650289739',
            balance: 9000,
            alias: 'Prepaid',
            logo: logo1,
        },
        {
            id:4,
            accountNo: '3650289739',
            balance: 2990,
            alias: 'School',
            logo: logo2
        },
    ]

    const transactionData = [
        {
            id: 1,
            amount: "-86.00",
            date: "13 Sept 2022",
            title: 'Berlin',
            subtitle: 'Beers',
            art: {
                background: colors.primary,
                icon: 'beer'
            }
        },
        {
            id: 2,
            amount: "-16.00",
            date: "13 Sept 2022",
            title: 'Taxi',
            subtitle: 'Free Now',
            art: {
                background: colors.primary,
                icon: 'car'
            }
        },
        {
            id: 3,
            amount: "-86.00",
            date: "13 Sept 2022",
            title: 'Berlin',
            subtitle: 'Beers',
            art: {
                background: colors.primary,
                icon: 'glass'
            }
        },
    ]

    return(
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData}/>
        </HomeContainer>
    )
}

export default Home;