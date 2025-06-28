export async function getMenu() {
  const response = await fetch('/data/menu.json')

  if (!response.ok) throw new Error('Error al cargar el menu')

  const menu = await response.json()

  return menu
}