import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -0To5V-M2oNoRDUhfVx9DBIBzZF74h5yZNsQ-ZP71cxiaE4YN3vvXLH1YEmgk6PVMNxDBZ_zJGA5Hv6fN1mDb7f4VzrA-b8vlE-2ZiZMcyYASGjEBJejMbTalV8lZHYx",
  },
});
