import React from "react";
import { storiesOf } from "@storybook/react";

import { Example } from "../components/Example/Example";

const stories =  storiesOf ('App Test', module)

stories.add('Example Story' , ()=>{
    return (<Example/>);
})