import { savings } from "../../utils/data";
import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";

const Savings = ({basket}) => {

    function loadComponent(basketStatus){
        switch (basketStatus) {
            case 'PAID':
                return 30;
                break;
            case 'ENGAGED':
                return 60;
                break;
            case 'DONE':
                return 100;
                break;
        }
    }

  return (
    <div className="grid-common grid-c6">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Количество блюд в заказе - {basket.dishes.length}</h3>
                <button className="grid-c-title-icon">
                    <img src={iconsImgs.plus} />
                </button>
            </div>
            <div className="grid-c6-content">
                <div className="grid-items">
                    <div className="grid-item" key={basket?.id}>
                        <div className="grid-item-top">
                            <div className="grid-item-top-l">
                                <div className="avatar img-fit-cover">
                                    <img src={personsImgs.person_one} />
                                </div>
                                <p className="text text-silver-v1">Status: {basket?.basketStatus}</p>
                            </div>
                            <div className="grid-item-top-r">
                                <span className="text-silver-v1">$ {basket?.total_price}</span>
                            </div>
                        </div>
                        <div className="grid-item-bottom">
                            <div className="grid-item-badges">
                                <span className="grid-item-badge">Date taken {basket?.acceptance_date}</span>
                                <span className="grid-item-badge">Bonus $ {basket?.bonus > 0 ? basket.bonus : '0'}</span>
                            </div>
                            <div className="grid-item-progress">
                                <div className="grid-item-fill" style={{width: `${loadComponent(basket?.basketStatus)}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Savings
