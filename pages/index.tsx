import Head from 'next/head';
import Header from '@/components/home/Header';
import Banner from '@/components/home/Banner';
import FeatureSection from '@/components/home/FeatureSection';
import ServiceArea from '@/components/home/ServiceArea';
import AboutArea from '@/components/home/AboutArea';
import TeamArea from '@/components/home/TeamArea';
import TestimonialItem from '@/components/home/TestimonialItem';
import Hotline from '@/components/home/Hotline';
import BlogArea from '@/components/home/BlogArea';
import BrandArea from '@/components/home/BrandArea';
import Footer from '@/components/home/Footer';
import AppointmentSection from '@/components/home/Appointment';


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
      <AppointmentSection />
     <TestimonialItem />
     <Hotline />
     <BlogArea />
     <BrandArea />
     <Footer />
     
    </>
  );
}
