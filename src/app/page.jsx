import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import OurWorkProcess from '@/components/OurWorkProcess'
import WhyChoseUs from '@/components/WhyChoseUs'

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <OurServices></OurServices>
      <WhyChoseUs></WhyChoseUs>
      <OurWorkProcess></OurWorkProcess>
      <Brands></Brands>
    </>
  )
}
