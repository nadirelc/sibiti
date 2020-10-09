import Head from 'next/head'

const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-111680506-1');
};

function Layout({ children, title, description }) {
  return (
    <div id="root">
      <Head>
        <title>{ title ? `${title} | ` : '' }Sibiti NADIR</title>
        <link rel="icon" href="/favicon.ico" />
  
        <html className="no-js" lang="id" itemScope itemType="//schema.org/WebSite"/>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        <meta
          name="description"
          content={ description || 'Nadir2 merupakan sebuah platform ujian online terintegrasi. Dengan Sibiti, anda dengan sangat mudah dapat melaksanakan segala kegiatan yang berhubungan dengan ujian, assessment test, penyisihan lomba, rekrutmen pegawai, atau bahkan tugas harian peserta didik.'}
        />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.sibiti.co.id/"/>
        <meta property="og:title" content="Online test, right to your hands"/>
        <meta property="og:description" content="Sibiti merupakan sebuah platform ujian online terintegrasi. Dengan Sibiti, anda dengan sangat mudah dapat melaksanakan segala kegiatan yang berhubungan dengan ujian, assessment test, penyisihan lomba, rekrutmen pegawai, atau bahkan tugas harian peserta didik."/>
        <meta property="og:image" content="/images/cover-2a.jpg"/>
        

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.sibiti.co.id/"/>
        <meta property="twitter:title" content="Online test, right to your hands"/>
        <meta property="twitter:description" content="Sibiti merupakan sebuah platform ujian online terintegrasi. Dengan Sibiti, anda dengan sangat mudah dapat melaksanakan segala kegiatan yang berhubungan dengan ujian, assessment test, penyisihan lomba, rekrutmen pegawai, atau bahkan tugas harian peserta didik."/>
        <meta property="twitter:image" content="/images/cover-2a.jpg"/>

        <meta property="line:image" content="/images/cover-2a.jpg"/>
                
        <meta
          name="google-site-verification"
          content="rr3nBbEI6p_sgN-kpeBvtqWq7cDW2S8bCW7M60NSgNg"
        />
        <meta name="yandex-verification" content="6e4facaa0ce11185" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-111680506-1"
        />
        <script>{injectGA()}</script>
      </Head>
      { children }
    </div>
  )
}

export default Layout;