import React from "react"
import {ZFNavigationBar, ZFNavItems, ZFDropDownItem} from "../components/Navagtion/navigation-bar"
export default {
    title: "Navigation",
    component: ZFNavigationBar,
    subcomponents :{ ZFNavItems, ZFDropDownItem}
}

const navItemsLink = [
    {lable:"Home", onClick: console.log('home')},
    {lable:"About", onClick: console.log('home')},
    {lable:"Contact", onClick: console.log('home')}
]


const Items = (args) => <ZFNavItems {...args} />;
export const ItemOfMenu = Items.bind({})
ItemOfMenu.args={
    lable:"Home"
}

const DropThatMenu = (args) => <ZFDropDownItem {...args} />;
export const dropItems = DropThatMenu.bind({})
dropItems.args={
    lable:navItemsLink,
    title: "Nav"
}




const Temp = (args) => (<ZFNavigationBar {...args}/>);
export const Nav = Temp.bind({});
Nav.args={
    dark: true,
    brandName: "Kidus",
    left: <ZFDropDownItem lable={navItemsLink} title="Left"/>,
    center: navItemsLink.map(v => { return <ZFNavItems lable={v.lable} />}),
    right: <ZFDropDownItem lable={navItemsLink} title="Right"/>
}