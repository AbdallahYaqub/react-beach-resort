import React from "react";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";
import { withRoomConsumer } from "../context";
import Loading from "./loading";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "./roomsFilter";
// import RoomsList from "./roomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./loading";

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
