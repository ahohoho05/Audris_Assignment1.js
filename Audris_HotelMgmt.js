module.exports = {

 guests:[{firstname:"Test", lastname:"" ,age: "00"}],
    room:[{roomNumber:"00", roomType:"1111", roomView:"", status:"" }],
  

    //roomType must be a string and not empty to be added successfully. otherwise, error msg happens. 
   addRoom(roomNumber, roomType, roomView) {
      
      if(typeof roomType ==="string" && roomType !== ""){ 
        this.room.push({roomNumber, roomType, roomView, status:"available"});
        console.log(`Room has been added successfully. It's a ${roomType} room with a ${roomView} \n`);
        return roomType;
      } else{
        console.log("Invalid room type");
        return null;
      }
      
    },

    //find room with roomNumber, update room number to newRoomNo
    updateRoom(roomNumber, newRoomNo){
       const room = this.room.find(r => r.roomNumber === roomNumber);
       if (room){
        room.roomNumber = newRoomNo;
        console.log(`Room number is updated to: ${newRoomNo}`);
       }else{
        console.log(`Room ${roomNumber} not found`);
       }

    },

    //find room with roomNumber, if room is found, room is available. otherwise, unavailable.
    getRoomStatus(roomNumber){
        const room = this.room.find(room => room.roomNumber === roomNumber);
        if (room){
           console.log(`Room ${roomNumber} is ${room.status}`);
           return room.status;
        }else{
            console.log(`Room ${roomNumber} is unavailable`);
            return null;
        }
    },

    //filter the rooms to find those with "available". return no. of available rooms
     getAvailableRooms(){
        return this.room.filter(room=>room.status === "available").length; 

    },
     
//add new guests
    addGuest(firstname, lastname, age){
        this.guests.push({firstname, lastname, age});
        console.log(`${firstname} ${lastname} has been added as a guest`);
    },

    //display all guest name and age
    listGuests(){
        console.log("List of guests:");
        this.guests.forEach(guest => console.log(`Name: ${guest.firstname} ${guest.lastname}, Age: ${guest.age}`));
    }
    
};
