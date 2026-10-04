import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Something crashed', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}
        >
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>
            Reload the App
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
