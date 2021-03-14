// import { withApollo as createWithApollo } from 'next-apollo';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { PaginatedStudents } from '../generated';
// import { NextPageContext } from 'next';

// const client = (ctx: NextPageContext) =>
//   new ApolloClient({
//     uri: 'http://localhost:4000/graphql',
//     credentials: 'include',
//     headers: {
//       cookie:
//         (typeof window === 'undefined'
//           ? ctx?.req?.headers.cookie
//           : undefined) || '',
//     },
//     cache: new InMemoryCache({
//       typePolicies: {
//         Query: {
//           fields: {
//             students: {
//               keyArgs: [],
//               merge(
//                 existing: PaginatedStudents | undefined,
//                 incoming: PaginatedStudents
//               ): PaginatedStudents {
//                 return {
//                   ...incoming,
//                   students: [
//                     ...(existing?.students || []),
//                     ...incoming.students,
//                   ],
//                 };
//               },
//             },
//           },
//         },
//       },
//     }),
//   });

// export const withApollo = createWithApollo(client);

export const cat = () => console.log('Gato');
