import ErrorBoundaries from "./ErrorBoundary/ErrorBoundaries";
import CounterDemo from "./ErrorBoundary/CounterDemo";
import ErrorDemo from "./ErrorBoundary/ErrorDemo";
import './App.css';

function App() {
  return (
    <>
      <ErrorBoundaries>
        <CounterDemo />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <ErrorDemo name="Rahul" />
      </ErrorBoundaries>
    </>
  )
}

export default App;
