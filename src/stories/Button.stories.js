import {Buttons} from "../components/Buttons/Button";

export default {
    title: "Buttons",
    component: Buttons,    
}

const Template = (args) => (<Buttons {...args}/>)

export const Btn = Template.bind({})
Btn.args = {
    lable: "Save Me",
}

