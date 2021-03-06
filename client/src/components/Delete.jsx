import { airtableBaseURL, config } from "../services";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#264653",
      secondary: "#2A2F3D",
      info: "#FFFFFF",
    },
    text: {
      main: "#FFFFFF",
    },
  },
});
const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    margin: "1em",
  },
}));

function Delete(props) {
  const classes = useStyles();
  const handleDelete = async () => {
    await axios.delete(`${airtableBaseURL}/${props.movie.id}`, config);
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        onClick={handleDelete}
      >
        Remove from Watchlist
      </Button>
    </>
  );
}

export default Delete;
