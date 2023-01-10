import { MaterialIcons } from "@expo/vector-icons"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import { Image, ScrollView } from "react-native"
import { DrawerHeader } from "./DrawerHeader"
import logo from '../../assets/images/logo.png';
import { LogoWrap } from "./LogoWrap";


import { Screen } from "../../screens";
import { styles } from "./DrawerItemLabel";
import { DrawerMenu } from "./DrawerMenu";
export const DrawerCustom = (props) => {

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ backgroundColor: '#E5E3DF', flex: 1}}
        >
            <DrawerHeader onPress={() => props.navigation.closeDrawer()}>
                <MaterialIcons name="close" size={24} color="black" />
            </DrawerHeader>
            <LogoWrap>
                <Image source={logo}/>
            </LogoWrap>
            <ScrollView>
                <DrawerMenu>
                    <DrawerItem
                        label="Home"
                        onPress={() => props.navigation.navigate(Screen.Home)}
                        labelStyle={styles.drawerItemLabel}
                    />
                </DrawerMenu>
            </ScrollView>
        </DrawerContentScrollView>
    )
}