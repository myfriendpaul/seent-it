import { airtableBaseURL, config } from "../services";
import axios from "axios";

function Delete(props) {
  const handleDelete = async () => {
    await axios.delete(airtableBaseURL / `${props.movie}`, config);
  };
  return (
    <div>
      <button type="submit" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
}

export default Delete;