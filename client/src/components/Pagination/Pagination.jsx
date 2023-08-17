import style from "./Pagination.module.css";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  currentPage,
  paginate,
}) => {
  //recibimos todo por props
  const pageNumbers = [];//array que va guardando los indices de las paginas
  let totalPaginas = Math.ceil(totalCountries / countriesPerPage) - 1;
  for (let i = 0; i <= totalPaginas ; i++) {
    //                numero entero(  250         /     10     ) = 25paginas, recorremos cada pagina
    pageNumbers.push(i); //vamos agregando a pageNumbers los indice hasta llegar a 25
  }

  return (
    <nav className={style.container}>
      <ul className={style.pagination}>
        <div className={style.containerBotones}>
          {/* BOTON ATRAS */}
          {currentPage === 0 ? (
            <img
              src={"./../../../imagenes/atras.png"}
              className={style.botonInactivo}
              alt="atras"
            />
          ) : (
            <img
              src={"./../../../imagenes/atras.png"}
              className={style.botonActivo}
              alt="atras"
              onClick={() => paginate(currentPage - 1)}
              href="#"
            />
          )}
          {/* BOTON SIGUIENTE */}
          {currentPage === pageNumbers.length - 1 ? (
            <img
              src={"./../../../imagenes/siguiente.png"}
              className={style.botonInactivo}
              alt="atras"
            />
          ) : (
            <img
              src={"./../../../imagenes/siguiente.png"}
              className={style.botonActivo}
              alt="atras"
              onClick={() => paginate(currentPage + 1)}
              href="#"
            />
          )}
        </div>
        <div className={style.containerPage}>
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                href="#"
                className={number === currentPage ? style.active : ""}
              >
                {number}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
