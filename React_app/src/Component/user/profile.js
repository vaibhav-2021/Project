import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link className="nav-link active" to="/user/update">
        Update Profile
      </Link>
    </div>
  );
};
export default Profile;
