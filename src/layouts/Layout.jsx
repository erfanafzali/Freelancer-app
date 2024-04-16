import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="">
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
