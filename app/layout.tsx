import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '狐假虎威・森林真相局',
  description: '康軒六年級文言寓言互動閱讀教材：蒐集線索、破解表象、完成四層次閱讀挑戰。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
