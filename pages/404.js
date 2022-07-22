import Link from "next/link";

const FourOhFour = () => {
  return (
    <div className="dialog">
      <div className="dialog__container">
        <span>404</span>
        <h2>Page Not Found</h2>
      </div>
      <Link href="/">
        <a className="dialog__btn">Go back home</a>
      </Link>
    </div>
  );
};

export default FourOhFour;
