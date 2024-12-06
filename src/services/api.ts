export const fetchPokemons = async (count: number) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};