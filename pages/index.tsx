import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import FeatureSection from '@/components/FeatureSection';
import ServiceArea from '@/components/ServiceArea';
import AboutArea from '@/components/AboutArea';
import TeamArea from '@/components/TeamArea';
import TestimonialItem from '@/components/TestimonialItem';
import Hotline from '@/components/Hotline';


export default function Home() {
  return (
    <>
      <Head>
        <title>Obama Care</title>
        <meta name="description" content="A platform for virtual medical consultations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/home-banner.jpg)" }}>
        <Banner />
      </div>
      <FeatureSection />
      <ServiceArea />
      <AboutArea />
      <TeamArea />
     <TestimonialItem />
     <Hotline />
     
    </>
  );
}
