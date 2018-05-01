import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    };

    orderHanfdler = event => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Carlos Aguilera",
                address: {
                    street: "Teststreet 1",
                    zipCode: "64000",
                    country: "Mexico"
                },
                email: "test@mailinator.com"
            },
            deliveryMethod: "fastest"
        };
        axios
            .post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form>
                <input
                    className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    className={classes.Input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="street"
                    placeholder="Street"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                />
                <Button btnType="Success" clicked={this.orderHanfdler}>
                    ORDER
                </Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
