import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './route-tree-gen';
import { CartProvider } from './contexts/CartContext/CartProvider';
import { AuthProvider } from './contexts/AuthContext/AuthProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createRouter({
  routeTree,
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <GoogleOAuthProvider clientId="154858001748-hck3jpog2bp8iii4odtnekbi6r9sbujv.apps.googleusercontent.com">
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
