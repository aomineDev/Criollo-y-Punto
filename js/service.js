export async function getMenu() {
  const response = await fetch('/data/menu.json')
  const data = await response.json()
  return data
}