import QuotesRotator from 'react-quotes-rotator';
import Async from 'react-async';
import axios from 'axios';

const getTestimonials = async () => axios.get('https://portal.sibiti.co.id/api/contents/testimony');

const quotesTransformer = response => response.data.clients.map(each => ({ content: each.description, footnote: each.author }));

function Quotes({ props }) {
  return (
    <div className="outer">
      <div className="container">
        <header>
          <h2>{props.title.toUpperCase()}</h2>
        </header>
        <div>
          <Async promiseFn={getTestimonials}>
            <Async.Fulfilled>
              {data => {
                const quotes = quotesTransformer(data);
                return (
                  <QuotesRotator
                    data={quotes}
                    progressBarColor="#6174D7"
                    textColor="#212121"
                    timer="5000"
                  />
                )}
              }
            </Async.Fulfilled>
          </Async>
        </div>
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

export default Quotes;