import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Obama Care</title>
        <meta name="description" content="A platform for virtual medical consultations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/home-banner.jpg)" }}>
        <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-12 md:px-8 md:py-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Welcome to Obama Care
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Connect with healthcare professionals from the comfort of your home.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/onboarding"  className="px-6 py-3 text-lg bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                Get Started
            </Link>
            <Link href="/about"  className="px-6 py-3 text-lg border border-blue-600 text-blue-600 rounded-full shadow-lg hover:bg-blue-50 transition duration-300">
              
                Learn More
              
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
