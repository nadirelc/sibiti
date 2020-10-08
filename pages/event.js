import router from 'next/router'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Features from '../components/features'
import Statistic from '../components/statistic'
import Clients from '../components/clients'
import Footer from '../components/footer'
import Quotes from '../components/quotes'
import Modal from '../components/modal'
import contents from '../contents';

const Home = (props) => {
  return (
    <Layout 
      title="Event"
      description="Sibiti Event adalah penyedia sistem acara terintegrasi satu-satunya di Indonesia, menawarkan kemudahan bagi siapa saja untuk menyelenggarakan perlombaan atau acara lainnya dalam satu pintu"
    >
      <Navbar />
      <Header props={ props.headers } />
      <Features props={ props.features } />
      <Statistic props={ props.statistic } />
      <Clients props={ props.clients } />
      <Quotes props={ props.quotes } />
      <Footer props={ props.footer } />
      { props.modal ? (<Modal />) : null }
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: {
      modal: !!(query.source === 'olimpiade'),
      headers: {
        title: 'One stop event platform',
        description: 'Sibiti Event adalah penyedia sistem acara terintegrasi satu-satunya di Indonesia, menawarkan kemudahan bagi siapa saja untuk menyelenggarakan perlombaan atau acara lainnya dalam satu pintu',
        cover: '/images/sibiti-event-3.jpg',
        event: true
      },
      features: {
        title: 'Services we provide with love',
        lists: [
          {
            title: 'Landing Page',
            description:
              'Halaman utama dari acaramu yang dapat memudahkan calon peserta untuk memahami informasi-informasi penting seputar kegiatan yang kamu selenggarakan. Dapat kamu isi dengan video, foto, hingga timeline acaramu. Dengan berbagai pilihan extensi domain .com .org .id apapun yang kalian inginkan.',
            cover: '/images/landing-page.png',
            wide: true
          },
          {
            title: 'Modul Pendaftaran',
            description:
              'Sistem yang memudahkan calon peserta acaramu untuk mendaftar dengan sebuah sistem pendaftaran secara online. Mulai dari manajemen peserta, payment gateway, hingga cetak kartu peserta, semuanya sudah lengkap!',
            cover: '/images/tablet-pendaftaran.png',
            wide: true
          }
        ],
      },
      statistic: {
        title: 'We are on statistic',
        description:
          'Hingga saat ini, Sibiti Event telah digunakan oleh ratusan acara yang tersebar di seluruh Indonesia',
      },
      clients: {
        title: 'OUR HAPPY CLIENTS',
        description:
          'Beragam institusi, lembaga non-profit hingga korporasi mempercayakan Sibiti Event sebagai platform online yang dapat membantu keberlangsungan acara mereka',
        event: true,
        limit: 6,
        cover: '/images/client-2.jpg'
      },
      quotes: {
        title: 'What did they say?',
      },
      footer: contents.footer,
    }
  }
}

export default Home;
