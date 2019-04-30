import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd",
  height: "100vh",
  display: "flex",
  flexWrap: "wrap"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
    <Footer />
  </div>
);

export default Layout;
