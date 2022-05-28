import React from "react"
import QuickNav from "../components/Navagtion/navigation-bar"


export default {
    title: "zufan/Navigation",
    component: QuickNav,
}
const Temp = (args) => (<QuickNav {...args}/>);
export const NavbarwithLogo = Temp.bind({});
NavbarwithLogo.args={
    dark: true,
    brand: <img src='https://placeholder.pics/svg/150x50/888888/EEE/Logo' alt='logo' height={30} width={80}/>,
    left: "left",
    center: 'center',
    right: 'right'
}

export const NavbarBgColor = Temp.bind({});
NavbarBgColor.args={
    dark: false,
    brand: <img src='https://placeholder.pics/svg/150x50/888888/EEE/Logo' alt='logo' height={30} width={80}/>,
    brandLink: "https://google.com",
    left: "left",
    center: 'center',
    right: 'right',
}

