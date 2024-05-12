import { useState } from "react";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Order.css";
import Savings from "../Savings/Savings";

const Order = ({order}) => {


    return (
        <div>
            <Savings
                basket={order}
            />
        </div>
    )
}

export default Order

