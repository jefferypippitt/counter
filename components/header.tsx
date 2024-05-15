import { ThemeToggle } from './ui/theme-toggle'

export default function Header() {
  return (
    <header>
      <nav className='container mx-auto flex items-center justify-between border-b-2 py-4 text-xl font-bold md:py-8 md:text-3xl'>
        <h2 className='font-semibold tracking-tight'>Counter App Demo</h2>
        <ThemeToggle />
      </nav>
    </header>
  )
}
