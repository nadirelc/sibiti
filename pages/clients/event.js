import Layout from '../../components/layout'
import Navbar from '../../components/navbar'

import Clients from '../../components/clients'
import Footer from '../../components/footer'
import contents from '../../contents';

export default function Home(props) {
  return (
    <Layout
      title="Clients"
      description="Beragam institusi, lembaga non-profit hingga korporasi mempercayakan Sibiti sebagai platform ujian online yang mengakomodasi kebutuhan kegiatan mereka"
    >
      <Navbar />
      <Clients props={ props.clients } />
      <Footer props={ props.footer } />
    </Layout>
  )
}


export async function getStaticProps() {
  return {
    props: {
      clients: {
        title: 'OUR HAPPY CLIENTS',
        description:
          'Beragam institusi, lembaga non-profit hingga korporasi mempercayakan Sibiti Event sebagai platform online yang dapat membantu keberlangsungan acara mereka',
        event: true,
        cover: '/images/client-2.jpg'
      },
      footer: contents.footer,
    }
  }
}
