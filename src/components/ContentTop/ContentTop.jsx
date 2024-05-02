import { Outlet } from "react-router-dom";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";

const ContentTop = () => {
  return (
    <>
    <div className="main-content-top">
        <div className="content-top-left">
        </div>
        <div className="content-top-btns">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
            <button className="notification-btn content-top-btn">
                <img src={ iconsImgs.bell } />
                <span className="notification-btn-dot"></span>
            </button>
        </div>
    </div>
    <Outlet/>
    </>
    
  )
}

export default ContentTop
