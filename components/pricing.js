//@flow

export default function Pricing({ props }) {
  return (
    <div className="pricing">
      <div className="container">
        <header>
          <h2>{props.title}</h2>
          <p>{props.description || ''}</p>
        </header>
        <div className="pricing-list">
          {props.items.map((item, index) => (
            <div className="card" key={index}>
              <span className="label">{item.label}</span>
              <div className="price">
              <span>{item.description}</span>
                <h4>
                  <small>Rp.</small> {item.price}
                </h4>
                <span>{item.unit}</span>
              </div>
              <div className="features">
                <ul>
                  {item.features.map((item, index) => (
                    <li
                      key={index}
                      className={item.disable ? 'disabled' : null}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        small {
          font-size: 45%;
          margin-left: -38px;
        }
        .disabled {
          text-decoration: line-through;
          opacity: 0.5;
        }

        span.label {
          font-weight: bold;
          font-size: 1rem;
        }

        .pricing-list {
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;
          justify-content: center;
        }

        .pricing-list .card {
          flex: 28% 0 0;
          overflow: hidden;
          border-right: solid #d8d8d8 1px;
          border-top: solid #d8d8d8 1px;
          border-bottom: solid #d8d8d8 1px;
          text-align: center;
          padding: 4rem 0;
        }

        .pricing-list .card:first-child {
          border-left: solid #d8d8d8 1px;
        }

        .pricing-list ul {
          display: block;
          padding: 0;
        }

        .pricing-list ul li {
          list-style: none;
        }

        .price h4 {
          font-size: 3rem;
          font-weight: bold;
          margin: 5px 0;
          color: #6273d9;
        }

        .price span {
          display: inline-block;
          font-size: 0.9rem;
          color: #777070;
        }

        .features {
          padding: 25px 0 0;
          background: white;
        }

        .pricing {
          padding: 50px 0 150px;
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
        @media (min-width: 1024px) {
          .pricing-list .card:nth-child(2) {
            transform: scale(1.1);
            background: white;
            border-left: solid #dedede 1px;
            box-shadow: 0px 0px 15px 1px #d8d8d8;
          }
        }
        @media (max-width: 1023px) {
          header {
            padding: 0 100px;
          }

          header {
            padding: 0;
          }

          .pricing-list .card {
            flex: 60% 0 0;
            border-right: solid #d8d8d8 1px;
            border-left: solid #d8d8d8 1px;
            border-bottom: solid #d8d8d8 1px;
          }
          .pricing-list .card:first-child {
            border-top: solid #d8d8d8 1px;
          }
        }

        @media (max-width: 767px) {
          .pricing-list {
            margin-right: -15px;
            margin-left: -15px;
          }

          .pricing-list .card {
            flex: 90% 0 0;
          }
        }
      `}</style>
    </div>
  )
}
  