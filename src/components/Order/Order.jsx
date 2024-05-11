import { savings } from "../../utils/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Order.css";

const Order = ({ id, acceptance_date, basketStatus, bonus, clientId, total_price, dishes_length }) => {
    return (
        <div className="grid-common grid-c6">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Savings</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} />
                </button>
            </div>
            <div className="grid-c6-content">
                <div className="grid-items">
                    <div className="grid-item" key={id}>
                        <div className="grid-item-top">
                            <div className="grid-item-top-l">
                                <div className="avatar img-fit-cover">
                                    <img src={personsImgs.person_one} />
                                </div>
                                <p className="text text-silver-v1">Status: {basketStatus}</p>
                            </div>
                            <div className="grid-item-top-r">
                                <span className="text-silver-v1">$ {total_price}</span>
                            </div>
                        </div>
                        <div className="grid-item-bottom">
                            <div className="grid-item-badges">
                                <span className="grid-item-badge">Date taken {acceptance_date}</span>
                                <span className="grid-item-badge">Bonus $ {bonus > 0 ? bonus : '0'}</span>
                            </div>
                            <div className="grid-item-progress">
                                <div className="grid-item-fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
