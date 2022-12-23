import { Fragment } from "react"
import AboutComponent from "../../components/AboutComponent"
import Cardapio from "../../components/Cardapio"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MenuComponent from "../../components/MenuComponent"
import { Layout } from "../../providers/Layout"

export const HomeScreen = () =>  {
    return (
        <Layout>
            <Header />
            <AboutComponent />
            {/* <Cardapio />  */}
            <MenuComponent /> 
            <Contact /> 
            <Footer />
        </Layout>
    )
}