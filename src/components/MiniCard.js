import React, { useState } from "react";
import "../index.scss";

export default function MiniCard() {
    const [cardQuantity, setQuantity] = useState(0);
    return (
        <div className="sidebar-item-container">
            <img src={require("../img/logo.png").default} alt="product_image" />
            <div className="right-side">
                <div className="text bold">Superlife STC-30</div>
                <div className="price">
                    Price: <span className="text bold">#24.23</span>
                </div>
                <div className="quantity-container">
                    Quantity:
                    <div
                        className="decrease"
                        onChangeText={() => setQuantity(cardQuantity + 1)}
                    >
                        -
                    </div>
                    <input
                        type="number"
                        value={cardQuantity}
                    ></input>
                    <div
                        className="increase"
                        // onClick={() => updateQuantity("increase", this.props.id)}
                        onChangeText={() => setQuantity(cardQuantity + 1)}
                    >
                        +
                    </div>
                </div>
            </div>
            <i className="fa fa-trash" />
        </div>
    );
}
