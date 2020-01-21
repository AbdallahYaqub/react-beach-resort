import React from "react";
import Room from "./room";

const RoomList = rooms => {
  const roomsArray = Object.keys(rooms).map(key => {
    return rooms[key];
  });

  if (roomsArray[0].length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {roomsArray[0].map(room => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
};

export default RoomList;
