import Header from "@/components/header";
import Hero from "@/components/hero";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <section className='py-12'>
        <Header />
        <Hero />
    </section>
  )
}
