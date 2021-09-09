import Link from 'next/link';

function ProductList({productId = 100}) {
  const list = [1, 2, 3];
  const items = [];
  for (const x of list) {
    items.push(
      <h2>
        <Link href={`/product/${x}`}>
          <a>Product {x}</a>
        </Link>
      </h2>
    );
  }

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      {items}
      <h2>
        <Link href={`/product/${productId}`} replace>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
