import "./Transactions.css";
import { iconsImgs } from "../../utils/images";
import { NavLink } from "react-router-dom";

const Transactions = ({employees}) => {
  return (
    <div className="grid-one-item grid-common grid-c2">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Все сотрудники</h3>
            <NavLink to={'/addstaff'} className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </NavLink>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                {
                    employees.map((employee) => (
                        <div className="grid-item" key = { employee.id }>
                            <div className="grid-item-l">
                                <div className="avatar img-fit-cover">
                                    <img src={ employee.image } alt="" />
                                </div>
                                <p className="text">{ employee.workerInfo.name } <span>{ employee.number }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-scarlet">$ { employee.workerInfo.salary }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Transactions
