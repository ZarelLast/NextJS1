import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
    </div>
  );
}

export default Home;
