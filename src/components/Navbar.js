import React from "react";

const Navbar = (props) => {
  const [isLike, setIsLike] = React.useState(true);

  function toggleLike() {
    setIsLike((prev) => !prev);
  }
  
  return (
    <div className="navbar">
      <ul>
        <li className="list">
          <button onClick={toggleLike}>
            {isLike ? (
              <span className="like">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            ) : (
              <span className="like">
                <ion-icon name="heart"></ion-icon>
              </span>
            )}
          </button>
        </li>
        <li className="list">
          <button>
            <span className="pencil">
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
          </button>
        </li>
        <li className="list">
          <button onClick={() => props.handleDelete(props.id)}>
            <span className="trash">
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
