import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addEvent, getEvents } from "../../hooks/Requests";
import { Input } from "../../components/ui/input";
import { Button } from "@mui/material";

const defaultData = {
    title: "",
    startDate: "",
    image_url: "",
    link: "",
    description: "",
  };

function EventsForm() {
  const { id } = useParams();
  const [data, setData] = useState(defaultData);
  const navigate = useNavigate();

  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    const err = await addEvent(data);
    if (!err) navigate("/admin/events");
  }

  useEffect(() => {
    if (id !== "new") {
      getEvents(id)
        .then((event) => {
          console.log(event);
          setData({ ...event, id });
        })
        .catch((err) => {
          console.error(err);
          setData(defaultData);
        });
    }
  }, []);

  return (
    <div className="w-full min-h-screen sm:p-4 bg-muted">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto md:mx-0 flex flex-col p-4 gap-4 max-w-lg bg-white shadow"
      >
        <label htmlFor="title">
          <h3 className="text-sm ml-2 mb-1 md:inline">
            Title <span className="text-red-600">*</span>
          </h3>
          <Input
            onChange={handleChange}
            value={data.title}
            id="title"
            type="text"
            name="title"
            placeholder="Title..."
          />
        </label>

        <label htmlFor="startdate">
          <h3 className="text-sm ml-2 mb-1 md:inline">
            Start date <span className="text-red-600">*</span>
          </h3>
          <Input
            onChange={handleChange}
            value={data.startDate}
            id="startdate"
            type="date"
            name="startDate"
          />
        </label>

        <label htmlFor="image_url">
          <h3 className="text-sm ml-2 mb-1 md:inline">Image link</h3>
          <Input
            onChange={handleChange}
            value={data.image_url}
            id="image_url"
            type="text"
            name="image_url"
            placeholder="Image link..."
          />
        </label>

        <label htmlFor="link">
          <h3 className="text-sm ml-2 mb-1 md:inline">Registration link</h3>
          <Input
            onChange={handleChange}
            value={data.link}
            id="link"
            type="text"
            name="link"
            placeholder="Registration link..."
          />
        </label>

        <label htmlFor="description">
          <h3 className="text-sm ml-2 mb-1 md:inline">
            Description <span className="text-red-600">*</span>
          </h3>
          <textarea
            className="border rounded px-3 py-1 block w-full text-sm"
            onChange={handleChange}
            value={data.description}
            rows="3"
            id="description"
            name="description"
            placeholder="Description..."
          />
        </label>

        <Button variant="contained" type="submit">submit</Button>
      </form>
    </div>
  );
}

export default EventsForm;