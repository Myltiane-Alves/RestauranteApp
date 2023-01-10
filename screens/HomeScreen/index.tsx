import { Fragment } from "react"
import AboutComponent from "../../components/AboutComponent"
import Cardapio from "../../components/Cardapio"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import { HeaderNav } from "../../components/HeaderNav"
import HomeBanner from "../../components/HomeBanner"
import MenuComponent from "../../components/MenuComponent"
import { Layout } from "../../providers/Layout"

export const HomeScreen = () =>  {
    return (
        <Layout header={<HeaderNav />}>
            <HomeBanner />
            <AboutComponent />
            {/* <Cardapio />  */}
            <MenuComponent /> 
            <Contact /> 
            <Footer />
        </Layout>
    )
}