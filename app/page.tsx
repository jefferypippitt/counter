import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className='text-3xl font-bold mx-auto max-w-2xl p-6 flex items-center justify-between border-b-2 pb-2'>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"></h2>
        Counter App
      <ThemeToggle />
    </div>
  )
}
