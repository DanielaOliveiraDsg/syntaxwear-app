import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='bg-accent'>Hello "_auth/sign-up"!</div>
}
