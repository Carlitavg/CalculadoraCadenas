function sumarCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }
  let partes = cadena.split(/[,-]/);
  return partes.reduce((suma, numero) => suma + parseInt(numero), 0);
}

export default sumarCadenas;
