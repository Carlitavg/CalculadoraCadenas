function sumarCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }

  let delimitadores = [",", "-"];
  let numerosStr = cadena;

  if (cadena.startsWith("//[")) {
    const finDelimitador = cadena.indexOf("]");
    const delimitadorPersonalizado = cadena.substring(3, finDelimitador);
    delimitadores.push(delimitadorPersonalizado);
    numerosStr = cadena.substring(finDelimitador + 1).trim();
  }

  let numerosNormalizados = numerosStr;
  delimitadores.forEach(delim => {
    numerosNormalizados = numerosNormalizados.split(delim).join(",");
  });

  let partes = numerosNormalizados.split(",");
  return partes.reduce((suma, numero) => {
    let numParseado = parseInt(numero.trim());
    if (isNaN(numParseado) || numParseado > 1000) {
      return suma;
    }
    return suma + numParseado;
  }, 0);
}

export default sumarCadenas;
