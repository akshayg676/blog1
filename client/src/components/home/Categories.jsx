import {
  Button,
  makeStyles,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  create: {
    margin: 20,
    backgroundColor: "#fff",
    color: "tomato",
    border: "1px solid tomato",
    width: "86%",
  },
  table: {
    border: "1px solid darkgrey",
  },
});

function Categories() {
  const classes = useStyle();
  const array = ["react", "css", "javascript", "node.js", "mongodb"];
  return (
    <>
      <Link to="/create" style={{ textDecoration: "none", color: "inherit" }}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{ textAlign: "center" }}>
              All Categories
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((items) => (
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>{items}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Categories;
