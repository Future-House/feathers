import { ThemeToggle } from '@future-house/feathers';
import KitchenSink from './components/KitchenSink';
import '@future-house/feathers/index.css';

function App() {
  return (
    <div className="min-h-screen space-y-8 p-8">
      <h1 className="mb-8 text-center">Feathers Component Library Test</h1>
      <ThemeToggle />

      <KitchenSink />
    </div>
  );
}

export default App;
