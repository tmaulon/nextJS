import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  color: "#fff"
};
const footerStyle = {
  alignSelf: "flex-end",
  width: "100%",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0000ff"
};

const Footer = () => (
  <div style={footerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Footer;
