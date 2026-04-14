import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
