/**
 * Vista principal e inicial de landing
 * La mayoría de los compomentes y subcomponentes relacionados a landing están en este archivo
 * En el caso del landing la mayoría de los componentes no son reutilizables, por lo que consideré
 * prudente dejarlos en el mismo archivo.
 * @author FT
 */

/**
 * Vista inicial de landing
 * @returns jsx
 * @author Ft
 */
export const Landing = () => {
  return (
    <div className="w-100 h-100 wrapper">
      {/* BACKGROUND IMAGE */}
      <div className="position-absolute  bgLanding"></div>

      {/* main */}
      <main className="position-relative">
        <div className="container h-100 ">
          {/* HERO */}
          <div
            className="d-flex flex-column justify-content-between p-5"
            style={{ minHeight: "100vh" }}
          >
            <Topbar />
            <HeroTitle />
            <Topbar />
          </div>

          {/* SECONDVIEW */}
          <div className="">
            <div className="row g-4 row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-stretch">
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

            <div>
              <Features />
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

/**
 * Componente novedades con imagen
 * @returns jsx
 */
export const Features = () => {
  return (
    <>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://images.pexels.com/photos/1174179/pexels-photo-1174179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block mx-lg-auto  rounded-4 img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * Cartas de imagen, se recomienda usar con row y col
 * @param {title}
 * @returns jsx
 * @author FT
 */
// eslint-disable-next-line react/prop-types
export const CardImage = ({ title }) => {
  return (
    <div className="card h-100 rounded-4">
      <img
        className="rounded-top-4"
        height={200}
        src="https://images.pexels.com/photos/17499981/pexels-photo-17499981/free-photo-of-green-leaves-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="py-5 px-4 pt-0 h-100 d-flex flex-column">
        <h2 className="text-primary mt-4">{title}</h2>

        <p className="text-primary lead">
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
 * @author FT
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
 * @return jsx
 * @author FT
 */
export const HeroTitle = () => {
  return (
    <div className="py-5 my-5 text-start">
      <h1 className="display-1 text-light fw-bold">Título de ejemplo</h1>
      <div className="col-lg-6 text-light">
        <p className="lead mb-4 text-light">
          Quickly design and customize responsive mobile-first sites with
          prebuilt components, and powerful JavaScript plugins.
        </p>

        <button className="btn btn-primary rounded-4 btn-lg">
          Contáctanos
        </button>
      </div>
    </div>
  );
};
/**
 *
 * @returns jsx
 * @author FT
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
