import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  info: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ info });
    console.error("[ErrorBoundary] React render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            fontFamily: "sans-serif",
            padding: "2rem",
            maxWidth: "700px",
            margin: "4rem auto",
            background: "#fff1f2",
            border: "2px solid #ff4444",
            borderRadius: "12px",
            color: "#111",
          }}
        >
          <h2 style={{ color: "#cc0000", marginTop: 0 }}>
            ⚠️ Something went wrong
          </h2>
          <p style={{ fontWeight: 600 }}>{this.state.error?.message}</p>
          <pre
            style={{
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "12px",
              border: "1px solid #fca5a5",
            }}
          >
            {this.state.error?.stack}
          </pre>
          {this.state.info && (
            <details>
              <summary style={{ cursor: "pointer", fontWeight: 600, marginTop: "1rem" }}>
                Component stack
              </summary>
              <pre
                style={{
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "8px",
                  fontSize: "11px",
                  overflow: "auto",
                  border: "1px solid #fca5a5",
                  marginTop: "0.5rem",
                }}
              >
                {this.state.info.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={() => this.setState({ hasError: false, error: null, info: null })}
            style={{
              marginTop: "1.5rem",
              padding: "0.5rem 1.5rem",
              background: "#cc0000",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
