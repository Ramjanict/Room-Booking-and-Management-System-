const backendUrl = "http://localhost:8080";
// const backendUrl = "https://gym-scheduling.vercel.app";

const ApiList = {
  signup: {
    url: `${backendUrl}/signup`,
    method: "post",
  },
  login: {
    url: `${backendUrl}/login`,
    method: "post",
  },
  logout: {
    url: `${backendUrl}/logout`,
    method: "get",
  },
  current_user: {
    url: `${backendUrl}/user-details`,
    method: "get",
  },
  upload_room: {
    url: `${backendUrl}/upload-room`,
    method: "post",
  },
  getall_room: {
    url: `${backendUrl}/getall-room`,
    method: "get",
  },
  delete_room: {
    url: `${backendUrl}/delete-room`,
    method: "post",
  },
  update_room: {
    url: `${backendUrl}/update-room`,
    method: "post",
  },
  all_users: {
    url: `${backendUrl}/all-users`,
    method: "get",
  },
  Update_users: {
    url: `${backendUrl}/update-users`,
    method: "post",
  },
  bookingList: {
    url: `${backendUrl}/booking-lists`,
    method: "get",
  },
  room_details: {
    url: `${backendUrl}/room-details`,
    method: "post",
  },
  room_booked: {
    url: `${backendUrl}/room-booked`,
    method: "post",
  },
  room_booked_person: {
    url: `${backendUrl}/room-booked-person`,
    method: "post",
  },
  countBooking: {
    url: `${backendUrl}/countBooking`,
    method: "get",
  },
  cancelBooking: {
    url: `${backendUrl}/cancelBooking`,
    method: "post",
  },
};
export default ApiList;
