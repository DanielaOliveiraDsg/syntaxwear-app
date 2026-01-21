import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='bg-accent'>
      <h1>Sign In</h1>
      <LoginForm />
    </section>
  )
}
