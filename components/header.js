//@flow

export default function Header({ props }) {
  return (
    <div className="header">
      <div className="container">
        <h1 className="animated fadeInDown">
          { props.title }
        </h1>
        <p className="animated fadeInDown desc">
          { props.description }
        </p>
        { props.event ? (
        <a
          className="header-btn"
          href="https://demo.olimpiade.id/?utm=sibiti"
          rel="noopener"
          target="_blank"
        >
          Try it now!
        </a>
        ) : null }
      </div>

      <style jsx>{`
        .desc {
          margin-bottom: 30px;
        }
        .header-btn {
          padding: 10px 25px;
          border-radius: 50px;
          border: 2px solid #6273d9;
          color: white;
          transition: all 0.1s linear;
        }
        a.header-btn:hover,
        a.header-btn:focus,
        a.header-btn:active {
          background-color: #6273d9;
          color: white;
          text-decoration: none;
        }
        .actions {
          margin-top: 30px;
        }
        .actions a {
          display: inline-block;
          border: solid white 2px;
          padding: 8px 50px;
          border-radius: 50px;
          color: white;
          font-size: 1.1rem;
        }

        .header .container {
          text-align: center;
          padding: 0 210px;
        }

        .header {
          color: #fff;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          background-image: url('${ props.cover }');
          min-height: calc(100vh - 175px);
          padding-top: 45vh;
          padding-bottom: 5vh;
          position: relative;
        }

        a.down img {
          width: 40px;
        }

        a.down {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .header h1 {
          font-size: 3.5rem;
          font-weight: 100;
          visibility: "visible"};
        }

        .header p {
          font-size: 1.4rem;
          font-weight: 300;
          margin-top: 20px;
          font-weight: 300;
          visibility: ""visible";
        }

        @-webkit-keyframes wiggle {
          0% {
            -webkit-transform: rotateZ(0);
            transform: rotateZ(0);
          }
          10% {
            -webkit-transform: rotateZ(-15deg);
            transform: rotateZ(-15deg);
          }
          20% {
            -webkit-transition: rotateZ(10deg);
            transition: rotateZ(10deg);
          }
          25% {
            -webkit-transition: rotateZ(-10deg);
            transition: rotateZ(-10deg);
          }
          30% {
            -webkit-transition: rotateZ(6deg);
            transition: rotateZ(6deg);
          }
          35% {
            -webkit-transform: rotateZ(-4deg);
            transform: rotateZ(-4deg);
          }
          40% {
            transform: rotateZ(7deg);
          }
          50% {
            transform: rotateZ(-6deg);
          }
          60% {
            transform: rotateZ(10deg);
          }
          70% {
            transform: rotateZ(-14deg;);
          }
          80% {
            transform: rotateZ(3deg);
          }
          90% {
            transform: rotateZ(-7deg);
          }
          100% {
            -webkit-transition: rotateZ(0);
            transition: rotateZ(0);
          }
        }
      `}</style>
    </div>
  )
}
