import { createFileRoute, Link } from '@tanstack/react-router';
import { RegisterForm } from '../../components/RegisterForm';
import { Logo } from '../../components/Logo';
import { Separator } from '../../components/Separator';
import { GoogleAuthButton } from '../../components/GoogleAuthButton';

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Sign Up - SynstaxWear' }],
  }),
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-background p-5">
      <div className="w-[450px] bg-surface rounded-2xl p-5 flex flex-col shadow-md">
        <Logo />
        <RegisterForm />
        <Separator />
        <GoogleAuthButton />

        <p className="text-sm text-text-secondary text-center mt-4">
          Already have an account?{' '}
          <Link
            to="/sign-in"
            className="text-accent font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}
