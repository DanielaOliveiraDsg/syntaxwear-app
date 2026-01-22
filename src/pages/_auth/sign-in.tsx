import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import { Separator } from '../../components/Separator'
import GoogleIcon from '../../assets/images/icons/icon-google.png'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5'>
      <div className='w-[450px] bg-[#fafafa] rounded-2xl p-10 flex flex-col shadow-md'>
        <Logo />
        <LoginForm />
        <Separator />

        <button className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500 transition">
          <img src={GoogleIcon} alt="Google Icon" className='w-5 h-5'/>
          <span className='text-sm font-medium text-gray-700'>Log in with Google</span>
        </button>

        <p className='text-sm text-gray-700 text-center mt-4'>
          Don't have an account?{' '}
          <a href="/sign-up" className="text-[#5433eb] font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  )
}
