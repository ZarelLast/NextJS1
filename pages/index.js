import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleOrder = () => {
    console.log('Placing Order');
    router.push('/product');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Home;
