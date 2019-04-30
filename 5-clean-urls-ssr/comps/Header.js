import Link from "next/link";

const linkStyle = {
  marginRight: 15
};
const headerStyle = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "fit-content"
};

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
