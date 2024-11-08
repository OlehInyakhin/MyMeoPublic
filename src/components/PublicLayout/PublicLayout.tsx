import { Header } from './Header';
import { Footer } from './Footer';
import { PublicLayoutProps } from './types';

export function PublicLayout(props: PublicLayoutProps) {
  const { children } = props;
  return (
    <div className="w-full flex flex-col min-h-screen justify-between">
      <Header />
      <div className="px-4 py-12 self-center w-[640px] max-w-full">{children}</div>
      <Footer />
    </div>
  );
}
