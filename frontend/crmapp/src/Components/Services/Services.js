import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/leads";

export const listLeads = () => axios.get(REST_API_BASE_URL);
export const createLead = (lead) => axios.post(REST_API_BASE_URL, lead);
export const getLead = (leadId) => axios.get(REST_API_BASE_URL + "/" + leadId);
export const UpdateLeads = (leadId, lead) =>
  axios.put(REST_API_BASE_URL + "/" + leadId, lead);
export const deleteLeads = (leadId) =>
  axios.delete(REST_API_BASE_URL + "/" + leadId);

export const sendPasswordResetOtp = (email) =>
  axios.post("http://localhost:8080/forgot/send-otp", { email });

export const verifyPasswordResetOtp = (email, otp) =>
  axios.post("http://localhost:8080/forgot/verify-otp", { email, otp });

const MEETING_API_BASE_URL = "http://localhost:8080/api/meeting_records";

export const getAllMeetings = () => axios.get(MEETING_API_BASE_URL);

export const createMeeting = (meeting) =>
  axios.post(MEETING_API_BASE_URL, meeting);

export const getMeetingById = (id) =>
  axios.get(MEETING_API_BASE_URL + "/" + id);

export const updateMeeting = (id, meeting) =>
  axios.put(MEETING_API_BASE_URL + "/" + id, meeting);

export const deleteMeeting = (id) =>
  axios.delete(MEETING_API_BASE_URL + "/" + id);
  