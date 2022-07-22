import NavigationBar from "./navigation-bar";
import Author from "../Author";

const Navigation = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <Author />
    </>
  );
};

export default Navigation;
