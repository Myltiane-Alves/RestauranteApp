import { Fragment } from "react"
import AboutComponent from "../../components/AboutComponent"
import Cardapio from "../../components/Cardapio"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MenuComponent from "../../components/MenuComponent"

export const HomeScreen = () =>  {
    return (
        <Fragment>
            {/* <Header />
            <AboutComponent />
            <Cardapio /> */}
            <MenuComponent /> 
            <Contact /> 
            <Footer />
        </Fragment>
    )
}