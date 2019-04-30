import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

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
    <Main children={props.children} />
    {/* {props.children} */}
    <Footer />
  </div>
);

export default Layout;
