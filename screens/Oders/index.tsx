import React from "react";
import { StatusBar } from "react-native";
import OderCard from "../../components/OrderCard";
import { PageTitle } from "../../components/PageTitle";
import { vars } from "../../values";
import { Orders } from "./Orders";
import { ORDERS } from "../../data";
import { OrdersScrollView } from "./OrdersScrollView";
import { OrderWrap } from "./OrderWrap";

const OrdersScreen = () => {
    return (
        <OrderWrap>
            <StatusBar barStyle="light-content" backgroundColor={vars.blue} />
            <PageTitle title="Meus Pedidos" />
            <OrdersScrollView>
                <Orders>
                    {ORDERS.map(order => (
                        <OderCard
                            key={order.id}
                            id={order.id}
                            total={order.total}
                            items={order.items}
                        />

                    ))}
                </Orders>
            </OrdersScrollView>
        </OrderWrap>
    )
}

export default OrdersScreen;