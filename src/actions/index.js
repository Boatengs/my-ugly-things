export function addItem(title, url, description) {
  return {type: "ADD_ITEM", title, url, description}
}
export function removeItem(index) {
  return {type: "REMOVE_ITEM", index}
}
