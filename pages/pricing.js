import Head from 'next/head'
import Navbar from '../components/navbar'
import Pricing from '../components/pricing'
import Footer from '../components/footer'
import contents from '../contents';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Pricing | Sibiti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Pricing props={ props.pricing } />
      <Footer props={ props.footer } />
    </div>
  )
}


export function getStaticProps() {
  return {
    props: {
      pricing: contents.pricing,
      footer: contents.footer,
    }
  }
}
