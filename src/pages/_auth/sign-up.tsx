import { createFileRoute } from '@tanstack/react-router';
import { RegisterForm } from '../../components/RegisterForm';
import { Logo } from '../../components/Logo';
import { Separator } from '../../components/Separator';
import GoogleIcon from '../../assets/images/icons/icon-google.png';

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

        <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg shadow-sm  hover:bg-surface-alt focus:outline-none focus:ring-2  focus:ring-border-alt transition">
          <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
          <span className="text-sm font-medium text-text-secondary">
            Sign up with Google
          </span>
        </button>

        <p className="text-sm text-text-secondary text-center mt-4">
          Already have an account?{' '}
          <a
            href="/sign-in"
            className="text-accent font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}
