export default function FormatToReal(value) {
    const number = Number(value);
    return (number).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }