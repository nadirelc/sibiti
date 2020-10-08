//@flow
import Link from 'next/link';

export default function Footer({ props }) {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="profile">
            <img src="/images/sibiti-white.svg" alt="Sibiti" />
            <p>
              Sibiti merupakan sebuah platform ujian secara online
              terintegrasi. Dengan Sibiti, anda dengan sangat mudah dapat
              melaksanakan segala kegiatan yang berhubungan dengan ujian,
              assessment test, penyisihan lomba, rekrutmen pegawai, atau
              bahkan tugas harian peserta didik.
            </p>
          </div>

          <div className="contact">
            <address>
              <strong>PT Surabaya Digital Indie</strong>
              <br />
              Jl. Dharmawangsa No 33, Airlangga, Gubeng<br />
              Surabaya, Indonesia
            </address>
            <address>
              <a href="https://api.whatsapp.com/send?phone=6285361074698&amp;text=Halo%20kak,%20saya%20mau%20tanya-tanya%20tentang%20Sibiti"><img src="/images/whatsapp.png" className="whatsapp" /></a>
            </address>
            <address>
              <strong>Anggi</strong> <br />
              +62 821-4060-7568 <br />
            </address>
            <address>
              <strong>Jojo Irianto</strong> <br />
              +62 8573-240-1129 <br />
            </address>
          </div>
        </div>

        <div className="links">
          <ul>
            {props.links.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Sibiti under PT Surabaya Digital
          Indie. All rights reserved.
        </p>
      </div>

      <style jsx>{`
        p.copyright {
          color: #7d7d7d;
          font-size: 0.9rem;
          margin-top: 15px;
        }
        footer {
          background: #1f1f1f;
          color: white;
          padding: 40px 0;
        }

        .profile img {
          width: 100px;
          margin-bottom: 10px;
        }

        .whatsapp {
          width: 125px;
        }

        h3 {
          font-weight: 300;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        ul li {
          display: inline-block;
          margin-right: 30px;
          list-style: none;
        }

        ul li a {
          font-size: 1.2rem;
          color: #bfbfbf;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
        }

        .grid .profile {
          flex: 1 0 0;
          padding-right: 120px;
        }

        @media (max-width: 768px) {
          .grid .profile {
            padding-right: 0;
          }
        }
      `}</style>
    </footer>
  )
}
    