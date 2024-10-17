import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/Table";
import { TablePagination } from "@mui/material";
import { Input } from "../../components/ui/input";
import { upcomingEvents } from "../../App";

async function getAllUsers() {
  return upcomingEvents;
}

export default function Events() {
  const [filteredList, setFilteredList] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const SlicedFilteredList = filteredList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  function filter(e) {
    const key = e.target.value.trim().toLowerCase();

    setFilteredList(
      events.filter(
        (event) =>
          event.title.toLowerCase().includes(key) ||
          event.date.toLowerCase().includes(key) ||
          event.description.toLowerCase().includes(key)
      )
    );
  }

  React.useEffect(() => {
    getAllUsers().then((data) => {
      setEvents(data);
      setFilteredList(data);
    });
  }, []);

  return (
    <main className="w-full min-h-screen md:p-4">
      <div className="py-4 flex items-center">
        <Input
          className="max-w-sm mx-2 md:mx-0"
          placeholder="Search user..."
          onChange={filter}
        />
      </div>

      <Table className="border">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="font-bold">Event Name</TableHead>
            <TableHead className="font-bold">Event Date</TableHead>
            <TableHead className="font-bold">Description</TableHead>
            <TableHead className="font-bold">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SlicedFilteredList.length > 0 ? (
            SlicedFilteredList.map((event) => (
              <TableRow key={event.date}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.link}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        className="border w-full bg-muted"
        style={{ color: "black" }}
        component="div"
        count={filteredList.length} // Total number of invoices
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 8, 10, 25]} // Options for rows per page
      />
    </main>
  );
}
