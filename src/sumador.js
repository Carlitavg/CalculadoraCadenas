function sumarCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }
  let partes = cadena.split(",");
  return parseInt(partes[0]) + (partes[1] ? parseInt(partes[1]) : 0);
}

export default sumarCadenas;
