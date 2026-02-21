import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '../../components/LoginForm';
import { Logo } from '../../components/Logo';
import { Separator } from '../../components/Separator';
import GoogleIcon from '../../assets/images/icons/icon-google.png';

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

        <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg shadow-sm  hover:bg-surface-alt focus:outline-none focus:ring-2  focus:ring-border-alt transition">
          <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
          <span className="text-sm font-medium text-text-secondary">
            Log in with Google
          </span>
        </button>

        <p className="text-sm text-text-secondary text-center mt-4">
          Don't have an account?{' '}
          <a
            href="/sign-up"
            className="text-accent font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}
