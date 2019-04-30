// This is the Link API
import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    {/* <Link href="/about">
      <button>About Page</button>
    </Link> */}
    <p>Hello Next.js</p>
  </div>
);

export default Index;
