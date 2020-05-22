export function apolloClientBeforeCreate ({ apolloClientConfigObj }) {
  // if needed you can modify here the config object used for apollo client
  // instantiation
  apolloClientConfigObj.cache.writeData({
      data: {
        results: "Javi ist pornös"
      }
    })
}

export function apolloClientAfterCreate(/* { apolloClient, app, router, store, ssrContext, urlPath, redirect } */) {
  // if needed you can modify here the created apollo client
}
