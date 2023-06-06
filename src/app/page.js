import Banner from '@/app/components/Banner'
import Explore from '@/app/components/Explore'
import SecondBanner from './components/SecondBanner'
import LargeBanner from './components/LargeBanner'
import Footer from './components/Footer'

export default async function Home() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const posts = await res.json()

  return (
    <>
      <div className='main'>
        <Banner />

        <main className='max-w-7xl mx-auto  mt-22  sm:mt-[15rem]  md:mt-[20rem] lg:mt-[30rem] xl:mt-[40rem]'>
          <section className='pt-9'>
            <h2 className='text-4xl font-semibold pb-5 text-center'>
              Explore Nearby
            </h2>
            <div className='grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'>
              {posts?.map((post) => (
                <Explore
                  img={post.img}
                  location={post.location}
                  distance={post.distance}
                />
              ))}
            </div>
          </section>
        </main>
        <SecondBanner />
        <LargeBanner
          img='https://images.unsplash.com/photo-1464069668014-99e9cd4abf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
          title='The Greatest Outdoors'
          description='WhishList curated by Airbnb'
          buttonText='Get Inspired'
        />
      </div>
      <Footer />
    </>
  )
}
