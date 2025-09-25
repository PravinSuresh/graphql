import { HttpLink } from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphqlzero.almansi.me/api'
    }),
    cache: new InMemoryCache()
});