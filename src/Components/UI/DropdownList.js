import React, { useState, Fragment } from "react";
import "./DropDownList.css";
import DropDownItem from "./DropDownItem";
function DropdownList({ listItems, dropListHandler, itemHead }) {
  const [showList, setShowList] = useState(false);
  const style = {
    fontSize: "1rem",
    float: "right",
    textShadow: "0 0 4px rgba(0, 0, 0, 0)",
    fontFamily: "OpenSans",
  };
  const titleStyle = {
    fontFamily: "OpenSans",
    textShadow: "0 0 4px rgba(0, 0, 0, 0)",
    padding: "0.5rem 0.2rem",
    borderBottom: "solid 1px #e1e1e1",
    fontFamily: "OpenSans",
    fontSize: "15px",
  };
  const showHideHandler = React.useCallback(() => {
    setShowList((prev) => !prev);
  }, []);
  const jsxToRender = listItems.map((dropItem) => {
    return (
      <DropDownItem
        key={dropItem.item}
        item={dropItem.item}
        description={dropItem.description}
        selected={dropItem.selected}
        dropListHandler={dropListHandler}
      />
    );
  });
  return (
    <Fragment>
      <div
        className='Rectangle-7-Copy-17'
        onClick={showHideHandler}
        //onClick={setShowList((prev) => !prev)}
      >
        <span style={style}>{itemHead}</span>
      </div>

      {showList && (
        <div className='Rectangle-8'>
          <div style={titleStyle}>Notification</div>
          {jsxToRender}
        </div>
      )}
    </Fragment>
  );
}

export default DropdownList;
