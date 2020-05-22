export function localResolvers() {
  return {
    Query: {
      result() {
        return { id: 1, value: 'javi ist pornös' }
      },
    },
  }
}
