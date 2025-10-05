export const GET = async (API: string) => {
  try {
    const res = await fetch(API);
    return await res.json();
  } catch (error) {
    console.error("Erro na busca de dados:", error);
  }
};
