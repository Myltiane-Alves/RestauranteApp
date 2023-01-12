import { MaterialIcons } from "@expo/vector-icons"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { Image, ScrollView } from "react-native"
import { DrawerHeader } from "./DrawerHeader"
import logo from '../../assets/images/logo.png';
import { LogoWrap } from "./LogoWrap";


import { Screen } from "../../screens";
import { styles } from "./DrawerItemLabel";
import { ImageLogo} from "./ImageLogo";
import { DrawerMenu } from "./DrawerMenu";
import { DrawerFooter } from "./DrawerFooter";
import { Button } from "../Button";
import { useAuth } from "../../hooks/useAuth";
export const DrawerCustom = (props) => {
   
    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ backgroundColor: '#E5E3DF', flex: 1}}
        >
            <DrawerHeader onPress={() => props.navigation.closeDrawer()}>
                <MaterialIcons name="close" size={40} color="#3AB8FB" />
            </DrawerHeader>
            <LogoWrap>
                <ImageLogo source={logo} />
            </LogoWrap>
            <ScrollView>
                <DrawerMenu>
                    <DrawerItem
                        label="Home"
                        onPress={() => props.navigation.navigate(Screen.Home)}
                        labelStyle={styles.drawerItemLabel}
                    />
                    <DrawerItem
                        label="Agendamentos"
                        onPress={() => props.navigation.navigate(Screen.Schedule)}
                        labelStyle={styles.drawerItemLabel}
                    />
                    <DrawerItem
                        label="Sobre"
                        onPress={() => props.navigation.navigate(Screen.Home)}
                        labelStyle={styles.drawerItemLabel}
                    />
                 
                    <DrawerItem
                        label="Pedidos"
                        onPress={() => props.navigation.navigate(Screen.Orders)}
                        labelStyle={styles.drawerItemLabel}
                    />
                    <DrawerItem
                        label="Contatos"
                        onPress={() => props.navigation.navigate(Screen.Home)}
                        labelStyle={styles.drawerItemLabel}
                    />
                    <DrawerItem
                        label="Menu"
                        onPress={() => props.navigation.navigate(Screen.Home)}
                        labelStyle={styles.drawerItemLabel}
                    />
                </DrawerMenu>
            </ScrollView>
            <DrawerFooter>
                <Button
                    color="blue"
                    style={{ width: 240 }}
                    onPress={() => props.navigation.navigate(Screen.Auth)}
                >
                    Minha Conta
                </Button>
            </DrawerFooter>
        </DrawerContentScrollView>
    )
}