import React from "react"
import {NavigationBar, NavItems, DropDownItem} from "../components/Navagtion/navigation-bar"
export default {
    title: "Navigation",
    component: NavigationBar,
    subcomponents :{ NavItems, DropDownItem}
}

const navItemsLink = [
    {lable:"Home", onClick: console.log('home')},
    {lable:"About", onClick: console.log('home')},
    {lable:"Contact", onClick: console.log('home')}
]


const Items = (args) => <NavItems {...args} />;
export const ItemOfMenu = Items.bind({})
ItemOfMenu.args={
    lable:"Home"
}

const DropThatMenu = (args) => <DropDownItem {...args} />;
export const dropItems = DropThatMenu.bind({})
dropItems.args={
    lable:navItemsLink,
    title: "Nav"
}




const Temp = (args) => (<NavigationBar {...args}/>);
export const Nav = Temp.bind({});
Nav.args={
    dark: true,
    brandName: "Kidus",
    left: <DropDownItem lable={navItemsLink} title="Left"/>,
    center: navItemsLink.map(v => { return <NavItems lable={v.lable} />}),
    right: <DropDownItem lable={navItemsLink} title="Right"/>
}