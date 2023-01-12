import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import { FormSchedule } from "../../components/FormSchedule"
import { HeaderNav } from "../../components/HeaderNav"
import { Layout } from "../../providers/Layout"

export const ScheduleScreen = () =>  {
    return (
        <Layout header={<HeaderNav />}>
           
            <FormSchedule /> 
            <Contact /> 
            <Footer />
        </Layout>
    )
}