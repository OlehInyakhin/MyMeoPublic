import { Icons } from '@/components/ui/icons';

export function Fallback() {
  return (
    <div className="loader flex justify-center items-center fixed z-90 w-full h-full bg-slate-700/50 top-0 start-0 backdrop-blur text-black/50 dark:text-white/50">
      <Icons.spinner className="mr-2 h-20 w-20" />
    </div>
  );
}
