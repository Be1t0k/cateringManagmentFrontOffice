import { Outlet } from "react-router-dom";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useEffect, useRef, useState } from "react";
import MyInput from "../../UI/MyInput/MyInput";

const ContentTop = () => {

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [showButton, setShowButton] = useState(true);
  const inputRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setShowButton(true);
    }
  };

  const toggleShowButton = () => {
    setShowButton(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  return (
    <>
      <div className="main-content-top">
        <div className="content-top-left">
        </div>
        <div className="content-top-btns">
            {showButton ? (
              <button type="button" className="search-btn content-top-btn" onClick={toggleShowButton}>
                <img src={iconsImgs.search} alt="" />
              </button>
            ) : (
              <MyInput
            value={filter.query}
            ref={inputRef}
            onChange={e => setFilter({ ...filter, query: e.target.value })}
            placeholder="Введите название" />
            )}

          <button className="notification-btn content-top-btn">
            <img src={iconsImgs.bell} />
            <span className="notification-btn-dot"></span>
          </button>
        </div>
      </div>
      <Outlet context={[filter, setFilter]} />
    </>

  )
}

export default ContentTop
