import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import contents from '../contents';

export default function Career(props) {
  return (
    <Layout
      title="Career"
      description="Sibiti membuka kesempatan sebesar-besarnya kepada siapa saja untuk bergabung menjadi bagian dari tim Sibiti, baik intern maupun full-time. Kita tidak akan mempedulikan latar belakang pendidikanmu ataupun pengalamanmu, for sure! Semangat dan skill serta kepribadianmu lah yang akan menjadi daya tarik kami dalam melakukan perekrutan kamu di dalam tim kami!"
    >
      <Navbar />
      <section className="grid">
        <div className="background" />
        <div className="content">
          <div className="container">
            <h1>Career</h1>
            <article>
              <p>
                Sibiti membuka kesempatan sebesar-besarnya kepada siapa saja
                untuk bergabung menjadi bagian dari tim Sibiti, baik intern
                maupun full-time. Kita tidak akan mempedulikan latar belakang
                pendidikanmu ataupun pengalamanmu, for sure! Semangat dan
                skill serta kepribadianmu lah yang akan menjadi daya tarik
                kami dalam melakukan perekrutan kamu di dalam tim kami!
              </p>

              <p>
                Kalian akan bekerja di lingkungan yang fun, penuh tantangan
                akan hal baru, serta bergerak cepat untuk terus berubah dengan
                teknologi terkini.
              </p>

              <h2>Position Available</h2>

              <ul className="joblist">
                {props.jobs.map((item, index) => (
                  <li key={index}>
                    <h4>{item.title}</h4>
                    <span className="location">{item.location}</span>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>

              <p className="large">
                Tertarik untuk bergabung? Segera kirim lamaran dan portofolio
                mu ke{' '}
                <a href="mailto:career@sibiti.co.id">career@sibiti.co.id</a>
              </p>
            </article>
          </div>
        </div>
      </section>
      <Footer props={ props.footer } />
      <style jsx>{`
        p.large {
          font-size: 1.4rem;
        }

        ul.joblist {
          margin: 0;
          padding: 0;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        ul.joblist li {
          list-style: none;
          padding: 25px 0;
          border-top: solid black 2px;
        }

        ul.joblist li:last-child {
          border-bottom: solid black 2px;
        }

        ul.joblist li > h4 {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0;
        }

        ul.joblist li > span.location {
          font-size: 1rem;
          font-weight: 300;
          color: #9c9c9c;
          display: block;
          margin-bottom: 5px;
        }

        section.grid {
          display: flex;
        }

        .background {
          flex: 40% 0 0;
          background: url('/images/about.jpg') left center fixed;
          background-size: contain;
          background-repeat: no-repeat;
        }

        .content {
          flex: 1 0 0;
          padding: 100px;
        }

        .content h1 {
          margin-bottom: 1rem;
        }

        .content h2 {
          font-size: 1.5rem;
          margin: 2rem 0 1rem;
        }

        @media (max-width: 1024px) {
          section.grid {
            display: block;
          }

          .background {
            width: 100%;
            height: 300px;
            background-size: cover;
          }

          .content {
            width: 100%;
            padding: 50px 100px;
          }
        }

        @media (max-width: 768px) {
          .content {
            padding: 50px;
          }
        }

        @media (max-width: 425px) {
          .content {
            padding: 50px 0;
          }
        }
      `}</style>
    </Layout>
  )
}


export function getStaticProps() {
  return {
    props: {
      jobs: contents.jobs,
      footer: contents.footer
    }
  }
}
