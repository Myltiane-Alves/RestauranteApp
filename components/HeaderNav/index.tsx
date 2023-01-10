import { MaterialIcons } from "@expo/vector-icons";
import React, { Fragment } from "react";
import { useDrawerNavigation } from "../../hooks/useDrawerNavigation"
import { HeaderButton } from "./HeaderButton";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderProps } from "./HeaderProps";
import { HeaderWrap } from "./HeaderWrap";
import { ImageLogo } from "./ImageLogo";
import logo from '../../assets/images/logo.png'
export const HeaderNav = ({onPressBack}: HeaderProps) => {
    const navigation = useDrawerNavigation();

    return (
        <Fragment>
            <HeaderWrap>
                <HeaderButton onPress={() => navigation.toggleDrawer()}>
                    <MaterialIcons name="menu" size={32} color="black" />
                </HeaderButton>
                {onPressBack && (
                    <HeaderButton onPress={onPressBack}>
                        <MaterialIcons name="arrow-back" size={32} color="black" />
                    </HeaderButton>
                )}
            </HeaderWrap>
            <HeaderLogo>
                <ImageLogo source={logo} />
            </HeaderLogo>
        </Fragment>
    )
}