import { createFileRoute } from '@tanstack/react-router';
import { RegisterForm } from '../../components/RegisterForm';
import { Logo } from '../../components/Logo';
import { Separator } from '../../components/Separator';
import GoogleIcon from '../../assets/images/icons/icon-google.png'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5'>
      <div className='w-[450px] bg-[#fafafa] rounded-2xl p-5 flex flex-col shadow-md'>
        <Logo />
        <RegisterForm />
        <Separator />

        <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500 transition">
          <img src={GoogleIcon} alt="Google Icon" className='w-5 h-5'/>
          <span className='text-sm font-medium text-gray-700'>Sign up with Google</span>
        </button>

        <p className='text-sm text-gray-700 text-center mt-4'>
          Already have an account?{' '}
          <a href="/sign-in" className="text-[#5433eb] font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}
