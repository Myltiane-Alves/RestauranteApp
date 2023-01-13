import { StatusBar } from "react-native"
import { Pizzas } from "../../data"
import { vars } from "../../values"
import { CartContent } from "./CartContent"
import { CartScrollView } from "./CartScrollView"
import { CartWrap } from "./CartWrap"
import { Text } from "./Text"


export const Cart = () => {
    return (
        <CartWrap>
            <StatusBar barStyle="light-content" backgroundColor={vars.blue} />        
            <CartContent>
                <CartScrollView>
                    <Text>Escolha o Pão</Text>
                    {Pizzas.map((pizza) => (
                        
                    ))}
                </CartScrollView>
            </CartContent>   
        </CartWrap>
    )
}