const hotelmgmt = require("./Audris_HotelMgmt.js");
console.log("Starting Hotel Management System \n");

hotelmgmt.addRoom("1234","Deluxe","Sea View");
hotelmgmt.addRoom("1235","Presidential suite","Garden View");
hotelmgmt.addRoom("1236","Standard","Swimming Pool View");

hotelmgmt.updateRoom("1234", "1237");

hotelmgmt.getRoomStatus("0000");

console.log(`Total available rooms: ${hotelmgmt.getAvailableRooms()}`);

hotelmgmt.addGuest("Michael", "Jackson", 100);
hotelmgmt.addGuest("Tom", "Cruise", 50);
hotelmgmt.addGuest("Mary", "Tan", 30);

hotelmgmt.listGuests();

hotelmgmt.getRoomStatus("1236");

hotelmgmt.updateRoom("1236", "1000");

