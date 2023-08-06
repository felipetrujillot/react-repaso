/**
 * Vista inicial de landing
 * @returns
 */
export const Landing = () => {
  return (
    <div className="w-100 h-100 wrapper">
      <div className="position-absolute  bgLanding"></div>
      <div className="d-flex justify-content-center align-items-center p-5 pb-0 position-relative">
        <div className="container">
          <Topbar />
          {/*   <div>
          <img
            src="https://images.pexels.com/photos/230978/pexels-photo-230978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-100"
            style={{ objectFit: "cover" }}
            height={400}
          />
        </div> */}
          <HeroTitle />

          <div className="row g-4 row-cols-3 align-items-stretch">
            <div className="col">
              <CardImage title="Ejemplo 1 Ejemplo 1" />
            </div>
            <div className="col">
              <CardImage title="Ejemplo 2" />
            </div>
            <div className="col">
              <CardImage title="Ejemplo 3" />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const CardImage = ({ title }) => {
  return (
    <div className="card h-100 rounded-4">
      <img
        className="rounded-top-4"
        height={200}
        src="https://images.pexels.com/photos/17499981/pexels-photo-17499981/free-photo-of-green-leaves-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="p-5 pt-0 h-100 d-flex flex-column">
        <h4 className="text-primary mt-4 display-6">{title}</h4>

        <p className="text-primary lead">
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt.
        </p>

        <div className="d-flex mt-auto w-100 justify-content-end">
          <button className="btn btn-primary rounded-4 text-end ">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Barra superior con botón de login
 * @returns
 */
export const Topbar = () => {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <div>
        <h5 className="text-light">Logo</h5>
      </div>
      <div className="d-flex flex-wrap ">
        <div className=" px-3">
          <a href="#">
            <h6 className="text-nowrap text-light">Lorem Ipsum</h6>
          </a>
        </div>
        <div className=" px-3">
          <a href="#">
            <h6 className="text-nowrap text-light">Sobre Nosotros</h6>
          </a>
        </div>
        <div className=" ps-3">
          <a href="#">
            <h6 className="text-nowrap text-light">Iniciar Sesión</h6>
          </a>
          <div />
        </div>
      </div>
    </div>
  );
};

/**
 * Hero title para landing
 */
export const HeroTitle = () => {
  return (
    <div className="px-4 py-5 my-5 text-start">
      <h1 className="display-1 text-light fw-bold">Centered hero</h1>
      <div className="col-lg-6 text-light">
        <p className="lead mb-4 text-light">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
    </div>
  );
};
/**
 *
 * @returns
 */
export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
          ></a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24"></svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
