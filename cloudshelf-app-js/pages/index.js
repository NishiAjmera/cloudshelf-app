import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Products from '../components/products'
import { ApolloClient,  ApolloProvider,InMemoryCache, HttpLink, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:5001/graphql"
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache()
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Cloudshelf!</a>
        </h1>

        <h2>Explore our products:</h2>
        <Products/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </ApolloProvider>
  )
}
