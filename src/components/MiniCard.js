import React from "react";
import "../index.scss"

export default function MiniCard() {
    return (
        <div className="sidebar-item-container">
            <img src={require("../img/logo.png").default} alt="product image" />
            <div className="right-side">
                <div className="text bold">Superlife STC-30</div>
                <div className="price">
                    Price:<span className="bold">#24.23</span>
                </div>
                <div className="quantity-container">
                    Quantity:
                    <div
                        className="decrease"
                        // onClick={() => updateQuantity("decrease", this.props.id)}
                    >
                        -
                    </div>
                    <input
                        type="number"
                        // value={state.quantity}
                        // onChange={() => {
                        //     updateQuantity();
                        // }}
                        // ref={(e) => (this.itemQuantityInput = e)}
                    ></input>
                    <div
                        className="increase"
                        // onClick={() => updateQuantity("increase", this.props.id)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
}
