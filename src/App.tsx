import { TodoProvider } from './hooks/todo';
import Routes from './Routes';

function App() {
  return (
    <TodoProvider>
      <Routes />
    </TodoProvider>
  );
}

export default App;
