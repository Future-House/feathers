import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from '@future-house/feathers';

import KitchenSink from './kitchen-sink/KitchenSink';
import Content from './components/Content';
import SidebarNavigation from './components/SidebarNavigation';
import CustomTheme from './components/CustomTheme';

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex h-screen w-full">
          <SidebarNavigation />
          <SidebarInset className="flex flex-col">
            <header className="bg-background sticky top-0 z-50 flex h-12 w-full shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
            </header>
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Content />} />
                <Route
                  path="/kitchen-sink"
                  element={
                    <div className="p-6">
                      <KitchenSink />
                    </div>
                  }
                />
                <Route
                  path="/custom-theme"
                  element={
                    <div className="p-6">
                      <CustomTheme />
                    </div>
                  }
                />
              </Routes>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
