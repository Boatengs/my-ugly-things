let defaultState = {
  items: []
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [
          ...state.items, {
            title: action.title,
            url: action.url,
            description: action.description
          }
        ]
      }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item, index) => index != action.index)
      }
    default:
      return state
  }

}
export default mainReducer;
