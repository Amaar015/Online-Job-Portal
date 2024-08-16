import React, { useState } from "react";
import { FaTrashAlt, FaFileAlt } from "react-icons/fa";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TableActions = ({
  columns,
  data,
  onDelete,
  onResumeClick,
  showFileIcon,
  assignTest,
  viewResultTest,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowSelection = (event, row) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
      );
    }
  };

  const handleDeleteRow = (rowId) => {
    if (onDelete) {
      onDelete(rowId);
    }
  };

  const handleResumeClick = (rowId) => {
    if (onResumeClick) {
      onResumeClick(rowId);
    }
  };
  const handleClick = (rowId) => {
    navigate("/graph-result", { state: { rowId } });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Paper sx={{ width: "90%", marginLeft: "5%" }}>
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                    key={column.id}
                  >
                    {column.name}
                  </TableCell>
                ))}

                <TableCell style={{ backgroundColor: "black", color: "white" }}>
                  {showFileIcon && "Cnd_Resumes"}
                </TableCell>
                {assignTest && (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Operations
                  </TableCell>
                )}
                {showFileIcon && (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    Actions
                  </TableCell>
                )}
                {viewResultTest && (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                  ></TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedRows.some(
                            (selectedRow) => selectedRow.id === row.id
                          )}
                          onChange={(e) => handleRowSelection(e, row)}
                          color="primary"
                        />
                      </TableCell>
                      {columns
                        .filter((column) => column.id !== "select")
                        .map((column) => (
                          <TableCell key={column.id}>
                            {row[column.id]}
                          </TableCell>
                        ))}
                      <TableCell>
                        {showFileIcon && (
                          <FaFileAlt
                            style={{
                              fontSize: "1.2rem",
                              cursor: "pointer",
                              marginRight: "10px",
                            }}
                            onClick={() => handleResumeClick(row.id)}
                          />
                        )}
                      </TableCell>
                      {assignTest && (
                        <TableCell>
                          <>
                            <button
                              className="btn1"
                              style={{ fontSize: "0.8rem" }}
                              // onClick={()=>handleAssignTest(row.id)}
                            >
                              {" "}
                              Assign Test
                            </button>
                            <button
                              className="btn1"
                              style={{
                                marginLeft: "0.6rem",
                                fontSize: "0.8rem",
                              }}
                              // onClick={()=>handleAssignTest(row.id)}
                            >
                              {" "}
                              Disable Test
                            </button>
                          </>
                        </TableCell>
                      )}
                      {showFileIcon && (
                        <TableCell>
                          <FaTrashAlt
                            style={{
                              fontSize: "1.2rem",
                              cursor: "pointer",
                              marginRight: "10px",
                            }}
                            // onClick={() => handleResumeClick(row.id)}
                          />
                        </TableCell>
                      )}
                      {viewResultTest && (
                        <TableCell>
                          <button
                            onClick={() => {
                              handleClick(row.id);
                            }}
                            className="btn1"
                          >
                            View Graphical
                          </button>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={data.length}
          component="div"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </div>
  );
};

export default TableActions;
