import './index.css'

const Home = () => (
  <div className="container-home">
    <nav>
      <div>
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
      </div>
      <ul className="right-nav">
        <li className="nav-home-con">
          <img
            className="nav-home"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />

          <h1>Home</h1>
        </li>

        <li className="nav-home-con">
          <img
            className="nav-home"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
          <h1>Products</h1>
        </li>

        <li className="nav-home-con">
          <img
            className="nav-home"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav products"
          />

          <h1>Cart</h1>
        </li>

        <div>
          <button className="btn2" type="button">
            Logout
          </button>
        </div>
      </ul>
    </nav>
    <div className="clothes-container">
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air alsdjfklsadfjasldkfjsdalkfjsd lsdafk
          ljasdflkjsdaf lksdj fksdfj sdlkfjsdl fjsd fksjd afds fjlskdfjlsdfjasdl
          kfjsdlfksdj flksdjflksda fjsld
        </p>
        <button className="btn2" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
