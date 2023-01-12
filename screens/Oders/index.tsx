import React from "react";
import { StatusBar } from "react-native";
import { PageTitle } from "../../components/PageTitle";
import { vars } from "../../values";
import { OrderWrap } from "./OrderWrap";

const OrdersScreen = () => {
    return (
        <OrderWrap>
            <StatusBar barStyle="light-content" backgroundColor={vars.blue} />
            <PageTitle title="Meus Pedidos" />
            
        </OrderWrap>
    )
}

export default OrdersScreen;