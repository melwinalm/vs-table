import React from 'react';
import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Error Boundary (error):', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="vt-error-boundary">Oops! Something went wrong</div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
