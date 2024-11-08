import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="bg-transparent -ml-1" />
        <Link
          className="mx-auto flex items-center gap-2 text-lg text-inherit"
          to="/"
        >
          <div className="text-3xl">🧠</div>
          MyMeo
        </Link>
        <ThemeToggle />
        <Separator
          orientation="vertical"
          className="mr-2 h-4"
        />
      </div>
    </header>
  );
}
