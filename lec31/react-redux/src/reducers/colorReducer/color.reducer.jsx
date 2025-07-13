const initialState ={color: 'black'}

export default function colorReducer  (state = initialState, action) {
  switch (action.type) {
    case 'change/red':
      return {
        color: 'red'
      }
    case 'change/green':
        return {
            color: 'green'
        }
    case 'change/blue':
        return {
            color: 'blue'
        }
    case 'change/black':
        return {
            color: 'black'
        }
    default:
      return state
  }
}