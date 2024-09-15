import axios from "axios";
import { FilterTypes, IEvent } from "./Types";

export const getEvents = async (type:FilterTypes=FilterTypes.All): Promise<IEvent[]> => {
  const query = type != FilterTypes.All ? ("?type="+type) : "";
  const response = await axios.get("http://localhost:3004/events" + query);
  return response.data;
};
// Wrote deleteEvent http request to delete an event
export const deleteEvent = async ():Promise<IEvent[]> => {
  const request = await axios.delete("http://localhost:3004/events")
  return request.data;
}