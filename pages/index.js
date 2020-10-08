import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Features from '../components/features'
import Clients from '../components/clients'
import Pricing from '../components/pricing'
import Footer from '../components/footer'
import contents from '../contents';

export default function Home(props) {
  return (
    <Layout >
      <Navbar />
      <Header props={ props.headers } />
      <Features props={ props.features } />
      <Clients props={ props.clients } />
      <Pricing props={ props.pricing } />
      <Footer props={ props.footer } />
    </Layout>
  )
}


export function getStaticProps() {
  return {
    props: {
      headers: contents.headers,
      clients: {
        ...contents.clients,
        limit: 6
      },
      features: contents.features,
      pricing: contents.pricing,
      footer: contents.footer,
    }
  }
}
