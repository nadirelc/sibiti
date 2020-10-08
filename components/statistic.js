import Async from 'react-async';
import axios from 'axios';

const getStatistic = async () => axios.get('https://portal.sibiti.co.id/api/statistic');

function Statistic({ props }) {
  return (
    <div className="outer">
      <div className="container">
        <header>
          <h2>{props.title.toUpperCase()}</h2>
          <p>{props.description}</p>
        </header>

        <Async promiseFn={getStatistic}>
          <Async.Fulfilled>
            {data => (
              <div className="featured-card">
                <div className="card" key="0">
                  <figure>
                    <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
                  </figure>
                  <div className="content">
                    <h4><strong>{data.data.data.events.toLocaleString()}</strong> acara</h4>
                  </div>
                </div>
                <div className="card" key="1">
                  <figure>
                    <i className="fa fa-graduation-cap fa-5x" aria-hidden="true"></i>
                  </figure>
                  <div className="content">
                    <h4><strong>{data.data.data.universities.toLocaleString()}</strong> universitas</h4>
                  </div>
                </div>
                <div className="card" key="2">
                  <figure>
                    <i className="fa fa-group fa-5x" aria-hidden="true"></i>
                  </figure>
                  <div className="content">
                    <h4><strong>{data.data.data.participants.toLocaleString()}</strong> pengguna</h4>
                  </div>
                </div>
                <div className="card" key="3">
                  <figure>
                    <i className="fa fa-edit fa-5x" aria-hidden="true"></i>
                  </figure>
                  <div className="content">
                    <h4><strong>{data.data.data.tests.toLocaleString()}</strong> ujian online</h4>
                  </div>
                </div>
              </div>
            )}
          </Async.Fulfilled>
        </Async>
        
      </div>

      <style jsx>{`
        .outer {
          padding: 50px 0;
          background-color: #FBFBFB;
        }
        header {
          text-align: center;
          padding: 0 180px;
        }

        header h2 {
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
        }

        header p {
          font-size: 1.5em;
          font-weight: 300;
          opacity: 0.7;
        }
        .featured-card {
          display: flex;
          flex-wrap: wrap;
          padding: 0 50px;
          margin-top: 50px;
        }

        .featured-card .card {
          flex: 25% 0 0;
          padding: 0 40px;
          text-align: center;
        }

        .featured-card .card img {
          width: 100px;
        }

        .wide {
          width: 100% !important;
          max-height: 230px;
        }

        h4 {
          font-weight: 300;
        }

        p {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @media (max-width: 1023px) {
          header {
            padding: 0 100px;
          }

          .featured-card .card {
            padding: 0 20px;
          }

          header {
            padding: 0;
          }
          
          .featured-card {
            justify-content: center;
          }
          .featured-card .card {
            flex: 25% 0 0;
          }
        }

        @media (max-width: 767px) {
          .featured-card {
            padding: 0;
          }

          .featured-card .card {
            flex: 100% 0 0;
            padding: 0;
            margin-bottom: 25px;
          }
        }
      `}</style>
    </div>
  )
}

export default Statistic;