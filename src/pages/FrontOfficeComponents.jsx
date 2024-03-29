import { Notification } from "../components/Notification";
import Details from "../components/about/About";
import Action from "../components/action/Action";
import { Brand } from "../components/brand/Brand";
import List from "../components/list/List";
import React from "react";

function FrontOfficeComponents(){

    return(
        <div>
            <Notification />
            <Brand />
            <Details />
            <List />
            <Action />
        </div>
    )
}
export default FrontOfficeComponents;