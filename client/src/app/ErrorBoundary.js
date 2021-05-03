import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorStatus: undefined,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
      errorStatus:
        error.status || error.statusCode || "Front-End error, no status code.",
      errorMessage: error.message,
    };
  }
  componentDidCatch(error, info) {
    console.error(error);
    console.error("error info", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong</h1>
          <h2>{`Error Status: ${this.state.errorStatus}`}</h2>
          <h2>{`Error Message: ${this.state.errorMessage}`}</h2>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
