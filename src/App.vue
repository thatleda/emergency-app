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

const httpLink = createHttpLink({ uri: 'https://rickandmortyapi.com/graphql' })

// Create the apollo client
const cache = new InMemoryCache({ addTypename: false })

const stateLink = withClientState({
  cache,
  resolvers: {
    Query: {
      result() {
        return { id: 1, value: 'javi ist pornös' }
      },
    },
  },
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
