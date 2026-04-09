import { createFileRoute, Link } from '@tanstack/react-router';
import { LoginForm } from '../../components/LoginForm';
import { Logo } from '../../components/Logo';
import { Separator } from '../../components/Separator';
import { GoogleAuthButton } from '../../components/GoogleAuthButton';


export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Sign In - SynstaxWear' }],
  }),
});

function RouteComponent() {

  return (
    <section className="h-screen w-full flex justify-center items-center bg-background p-5">
      <div className="w-[450px] bg-surface rounded-2xl p-10 flex flex-col shadow-md">
        <Logo />
        <LoginForm />
        <Separator />

        <GoogleAuthButton mode="signin" />

        <p className="text-sm text-text-secondary text-center mt-4">
          Don't have an account?{' '}
          <Link
            to="/sign-up"
            className="text-accent font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}


