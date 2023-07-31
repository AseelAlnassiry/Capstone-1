import UserCard from "../components/UserCard";
import UserUpdateForm from "../components/UserUpdateForm";

const Profile = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row flex-wrap justify-center gap-6 bg-base-200 px-2 py-4">
      {/* User Card */}
      <UserCard />
      {/* User Update Form */}
      <UserUpdateForm />
    </div>
  );
};
export default Profile;
