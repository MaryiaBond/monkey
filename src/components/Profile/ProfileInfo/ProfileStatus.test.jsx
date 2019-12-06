import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus props="Try to test my status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Try to test my status");
    });

    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus props="Try to test my status"/>);
        const root = component.root;
        let span = root.findByType("input")
        expect(span).toBeNull(1);
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus props="Try to test my status"/>);
        const root = component.root;

        expect(() => { let span = root.findByType("span")}).toThrow;
    });


    test("after creation span should be displayed with correct text", () => {
        const component = create(<ProfileStatus props="Try to test my status"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(() => {
            span.children[0].toBe("Try to test my status")
        }).toThrow;
    })


    test("after creation input appear instead span", () => {
        const component = create(<ProfileStatus props="Try to test my status"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(() => {
            input.value.toBe("Try to test my status")
        }).toThrow;
    })

//говорим jest что хотим вызвать mockCallback (тестовая функция) чтобы мы знали что она вызывается (и сколько раз!)
    //здесь используется для отслеживания вызова updateStatus
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus props="Try to test my status" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    })

})
