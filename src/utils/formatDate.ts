export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};
