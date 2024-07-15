import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Telemedicine Platform</title>
        <meta name="description" content="A platform for virtual medical consultations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen" style={{ backgroundImage: "url(/home-banner.jpg)" }}>
       

        <main className="container pt-[200px] mx-auto text-center">
          <h2 className="md:text-[70px] w-[80%] text-[32px] sm:text-[48px] leading-[45px] lg:w-[60%] sm:leading-[60px] md:leading-[78px] mb-5 text-center m-auto">Welcome to Obama Care</h2>
          <p className="mb-8 text-xl">Connect with healthcare professionals from the comfort of your home.</p>
          <div>
            <Link href="/onboarding" className="px-8 py-3 mr-4 text-white bg-blue-600 rounded-full">
              Get Started
            </Link>
            <Link href="/about" className="px-8 py-3 text-blue-600 border border-blue-600 rounded-full">
              Learn More
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
