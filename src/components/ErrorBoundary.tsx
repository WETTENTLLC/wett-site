'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-deep-black text-clean-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-wett-gold mb-4">Something went wrong</h1>
            <p className="text-xl mb-8">We&apos;re working on fixing this. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-wett-gold text-deep-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
