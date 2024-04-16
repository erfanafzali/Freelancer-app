import useUser from "../hooks/useUser";

function Header() {
  const { data } = useUser();

  return <div className="bg-secondary-0 py-4 px-8">header</div>;
}

export default Header;
