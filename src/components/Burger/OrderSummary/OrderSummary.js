import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // This could be a fucntional component, doesn't have to be a class component.
    componentWillUpdate() {
        console.log("[OrderSummary]: componentWillUpdate");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {igKey}
                        </span>:
                        {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicius burger with the following ingredientes:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
