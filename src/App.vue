<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient } from 'apollo-client'
import { withClientState } from 'apollo-link-state'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { localResolvers } from 'src/apollo/resolvers/query'

const httpLink = createHttpLink({ uri: '' })

// Create the apollo client
const cache = new InMemoryCache({ addTypename: false })

const stateLink = withClientState({
  cache,
  resolvers: localResolvers(),
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
  connectToDevTools: true,
})

export default {
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
}
</script>
