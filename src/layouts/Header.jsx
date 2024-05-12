import HeaderMenu from "../components/templates/HeaderMenu";
import UserAvatar from "../components/templates/UserAvatar";
import useUser from "../hooks/useUser";

function Header() {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`w-full flex justify-center gap-x-4 md:justify-end md:gap-x-5 items-center md:max-w-6xl ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <HeaderMenu />
        <UserAvatar />
      </div>
    </div>
  );
}

export default Header;
