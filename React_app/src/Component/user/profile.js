import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link className="nav-link active" to="/user/update">Update Profil</Link>
      <Link className="nav-link active" to="/user/myBookings">View My Bookings</Link>
    </div>
  );
};
export default Profile;
