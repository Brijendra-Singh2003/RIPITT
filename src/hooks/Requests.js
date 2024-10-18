const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export async function getEvents(id) {
  const querry = id ? `?id=${id}` : "/";
  try {
    const response = await fetch(SERVER_URL + "/api/event" + querry);

    if (response.ok) {
      const data = await response.json();

      if (data.success) {
        return data.data;
      }
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

export async function addEvent(event) {
  try {
    const response = await fetch(SERVER_URL + "/api/event", {
      method: event.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Form submission successful:", result);
    } else {
      console.error("Error in form submission:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

export async function deleteEvent(id) {
  try {
    const response = await fetch(SERVER_URL + "/api/event", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Event deleted successfullly:", result);
    } else {
      console.error("Error in event deletion:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}
