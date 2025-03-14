import ProfileImage from "./ProfileImage"; 
import Timestamp from "./Timestamp";
import User from "./User"; 
import Message from "./Message";
import Actions from "./Actions";

function Tweet({ tweet }) {
  let { user: { name, handle, image }, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;