import React from "react";

import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("<BurgerBuilder/>", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/"
        });
    });

    it("should store the the token upon login", () => {
        expect(
            reducer(
                {
                    token: null,
                    userId: null,
                    error: null,
                    loading: false,
                    authRedirectPath: "/"
                },
                {
                    type: actionTypes.AUTH_SUCCESS,
                    idToken: "some",
                    userId: "some"
                }
            )
        ).toEqual({
            token: "some",
            userId: "some",
            error: null,
            loading: false,
            authRedirectPath: "/"
        });
    });
});
