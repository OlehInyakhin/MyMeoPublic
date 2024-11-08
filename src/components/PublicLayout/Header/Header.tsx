import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="flex flex-wrap h-16 items-center">
      <div className="flex w-full justify-between items-center gap-2 py-2 px-4">
        <div className="w-9 h-9" />
        <Link
          className="flex items-center mx-auto p-2 border border-graay-600 rounded text-4xl aspect-square"
          to="/"
        >
          🧠
        </Link>
        <ThemeToggle />
      </div>
      <Separator
        orientation="horizontal"
        className="h-px"
      />
    </header>
  );
}
