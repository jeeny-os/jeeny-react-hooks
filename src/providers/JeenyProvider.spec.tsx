import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { JeenyProvider, JeenyContext } from ".";
import { createApolloClient } from "../config/apollo/apolloClient";

jest.mock("../config/apollo/apolloClient");

const TestingComponent: React.FC = () => {
  return <div data-testid="test-id-123">test-123</div>;
};

describe("JeenyProvider", () => {
  const mockedCreateApolloClient = jest.mocked(createApolloClient);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders without error", () => {
    mockedCreateApolloClient.mockReturnValue(
      {} as ApolloClient<NormalizedCacheObject>
    );

    render(
      <JeenyProvider apiKey="KEY-123" apiUrl="URL-123">
        something
      </JeenyProvider>
    );
  });

  it("renders child components", () => {
    mockedCreateApolloClient.mockReturnValue(
      {} as ApolloClient<NormalizedCacheObject>
    );

    render(
      <JeenyProvider apiKey="KEY-123" apiUrl="URL-123">
        <TestingComponent />
      </JeenyProvider>
    );

    expect(() => screen.getByTestId("test-id-123")).not.toThrow();
  });

  it("calls createApolloClient with the correct params", () => {
    mockedCreateApolloClient.mockReturnValue(
      {} as ApolloClient<NormalizedCacheObject>
    );

    render(
      <JeenyProvider apiKey="KEY-123" apiUrl="URL-123">
        something
      </JeenyProvider>
    );

    expect(mockedCreateApolloClient).toBeCalledTimes(1);
    expect(mockedCreateApolloClient).toBeCalledWith({
      apiKey: "KEY-123",
      apiUrl: "URL-123",
    });
  });
});
