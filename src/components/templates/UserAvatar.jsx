import useUser from "../../hooks/useUser";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex justify-center items-center gap-x-1 md:gap-x-3 text-secondary-400 object-cover object-center">
      <span className="text-xs md:text-lg font-bold whitespace-nowrap">{user?.name}</span>
      <img src="/public/user.jpg" alt="user-account" className="w-6 h-6 md:w-8 md:h-8" />
    </div>
  );
}

export default UserAvatar;
