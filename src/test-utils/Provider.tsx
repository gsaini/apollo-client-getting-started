import React from "react";
import { act, render, RenderResult } from "@testing-library/react";
import { MockedProvider, MockedProviderProps } from '@apollo/client/testing';
import { cache } from '../apollo';


const customRender = async (
    childComponent: JSX.Element,
    options?: MockedProviderProps
): Promise<RenderResult> => {
    const { mocks = [], resolvers = {} } = options || {};
    const wrapper = render(<MockedProvider
        mocks={mocks}
        resolvers={resolvers}
        cache={cache}>
        {childComponent}
    </MockedProvider>)

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    return wrapper;
}

export { customRender as render };