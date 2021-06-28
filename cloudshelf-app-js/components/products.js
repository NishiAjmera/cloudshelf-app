import {gql, useQuery} from '@apollo/client';
import Card from './card';
import styles from './products.module.css';

const GET_PRODUCTS = gql`
query Products($offset: Int, $limit: Int) {
  products(offset: $offset, limit: $limit) {
  name
  description
}}`


const Products = () => {
    const {loading, error, data} = useQuery(GET_PRODUCTS, {
      variables: {
        offset:40,
        limit:20
      }
    });
    if (loading) {
      return <p>loading...</p>
    }
    if (error) {
      return <p>error {error}</p>
    }
    return (
        <div className={styles.Cards}>
          { data.products.map((product)=>{
        return (
        <Card>
        <li>{product.name}</li>
        <li>{product.description}</li>
        </Card>
          )})
      }
        </div>
        )
}

export default Products;