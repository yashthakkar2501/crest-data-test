import React from "react";
function DropDownItem({ item, description, selected, dropListHandler }) {
  let style = ["Rectangle-8-Copy"];
  if (selected)
    style = ["Rectangle-8-Copy", "Rectangle-8-Copy-backgroundColor"].join(" ");
  return (
    <div className={style} onClick={() => dropListHandler(item)}>
      <span className='Not-watching'>{item}</span>
      <span className='no-email-notification'>{description}</span>
    </div>
  );
}

export default DropDownItem;
