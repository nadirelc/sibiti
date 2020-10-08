//@flow
import Link from 'next/link';
import Async from 'react-async';
import axios from 'axios';

const getClients = async ({ limit, data }) => data ? { data: { clients: data.slice(0, limit) } }
    : axios.get(`https://portal.sibiti.co.id/api/contents/client?limit=${limit === 6 ? 6 : ''}`);

export default function Clients({ props }) {
  const limit = props.limit || 999;

  const loadMore = `/clients${props.event ? '/event' : ''}`;

  return (
    <div className="clients">
      <div className="container">
        <header>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </header>

        <Async promiseFn={getClients} limit={limit} data={props.clients}>
          <Async.Fulfilled>
            {data => (
              <div>
                <div className="client-list">
                  {data.data.clients.map((item, index) => (
                    <a
                      href={item.url}
                      className="client animated fadeInDown"
                      rel="noopener"
                      target="_blank"
                      key={index}
                    >
                      <div className="profile">
                        <img src={item.logo} alt={item.title} onError={(e)=>{e.target.onerror = null; e.target.src="/images/no-image.png"}} />
                        <span>{item.title}</span>
                      </div>
                      <div className="description">
                        <p>{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="text-center">
                  {data.data.clients.length <= 6 ? (
                    <Link href={loadMore}>
                      <a  className="btn">Load More</a>
                    </Link>
                  ) : null}
                </div>
              </div>
            )}
          </Async.Fulfilled>
        </Async>
      </div>
      <style jsx>{`
        .btn {
          padding: 10px 25px;
          border-radius: 50px;
          background-color: white;
          color: black;
          transition: all 0.1s linear;
        }
        a.btn:hover,
        a.btn:focus,
        a.btn:active {
          background-color: white;
          color: black;
          text-decoration: none;
        }
        .text-center {
          text-align: center;
          margin-top: 20px;
        }
        .clients {
          padding: 100px 0;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-image: url('${ props.cover || '/images/cover-3.jpg' }');
        }
        header {
          text-align: center;
          padding: 0 180px;
          margin-bottom: 50px;
        }

        header h2 {
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          color: white;
        }

        header p {
          font-size: 1.5em;
          font-weight: 300;
          opacity: 0.7;
          color: white;
        }
        .client-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          padding: 0 40px;
        }

        .client-list .client {
          flex: 32% 0 0;
          margin-bottom: 20px;
          border-radius: 5px;
          background-color: white;
          color: #464646;
        }

        .client-list .client:hover,
        .client-list .client:focus,
        .client-list .client:active {
          text-decoration: none;
        }

        .cover img {
          position: absolute;
          width: 100%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .profile {
          padding: 0 20px;
          z-index: 2;
          position: relative;
          padding-top: 10px;
          margin-top: -20px;
          min-height: 78px;
        }

        .profile img {
          width: 60px;
          border-radius: 5px;
          box-shadow: 0 0 1px;
          background-color: white;
          vertical-align: top;
        }

        .profile span {
          margin: 20px 10px 0;
          display: inline-block;
          max-width: 200px;
        }

        .description {
          padding: 5px 20px;
        }

        .description p {
          font-size: 1rem;
          color: #777777;
          font-weight: 300;
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

          .client-list {
            padding: 0;
          }

          .client-list .client {
            flex: 49% 0 0;
          }
        }

        @media (max-width: 767px) {
          .client-list .client {
            flex: 100% 0 0;
          }
        }
      `}</style>
    </div>
  )
}
  