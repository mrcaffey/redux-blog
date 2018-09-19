const todos = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOG':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE BLOG':
      return [action.blog, ...state];
    default:
      return state
  }
}

export default blogs;