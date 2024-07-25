import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Open_Sans, Roboto } from 'next/font/google';



// const openSans = Open_Sans({
//   subsets: ['latin'],
//   variable: '--font-open-sans',
//   display: 'swap',
// });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
    </QueryClientProvider>
    </div>
  )
}