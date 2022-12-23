import { Layout } from "../../providers/Layout";
import { AuthHeader } from "./AuthHeader";
import { AuthLayoutProps } from "./AuthLayoutProps";
import { AuthLogo } from "./AuthLogo";
import logo from '../../assets/images/logo.png';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthBody } from "./AuthBody";
import { AuthFooter } from "./AuthFooter";
import { AuthFooterText } from "./AuthFooterText";
import { useDrawerNavigation } from "../../hooks/useDrawerNavigation";
import { Screen } from "../../screens";


export const AuthLayout = ({ children }: AuthLayoutProps) => {
    const { navigate } = useDrawerNavigation();

    return (

        <Layout>
            <AuthHeader onPress={() => navigate(Screen.Home)}>
                <AuthLogo source={logo} />
            </AuthHeader>
            <KeyboardAwareScrollView>
                <AuthBody>{children}</AuthBody>
                <AuthFooter>
                    <AuthFooterText>2022 @ Myltiane Alves. Todos os Direitos Reservados</AuthFooterText>
                </AuthFooter>
            </KeyboardAwareScrollView>
        </Layout>

    )
}