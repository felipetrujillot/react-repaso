/**
 * Vista inicial de landing
 * @returns
 */
export const Landing = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
        <div className="container">
            <Topbar/>
            <HeroTitle />
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
            <h5>Logo</h5>
            <h6>Iniciar Sesión</h6>
        </div>
    )
};

/**
 * Hero title para landing
 */
export const HeroTitle = () => {
  return (
    <div className="px-4 py-5 my-5 text-start">
      <h1 className="display-5 fw-bold">Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
    </div>
  );
};
