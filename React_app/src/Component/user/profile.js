import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link className="nav-link active" to="/user/update">Update Profile</Link>
      <Link className="nav-link active" to="/user/myBookings">View My Current Bookings</Link>
      <Link className="nav-link active" to="/user/MyOldBookings">View My Old Bookings</Link>

    </div>
  );
};
export default Profile;
