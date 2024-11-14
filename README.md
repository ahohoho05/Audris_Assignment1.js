# Assignment 1

You will only need one file, ie, your node module, for this assignment.test.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

Setting Up Node Module:

1) Add require statement in app.js ---> const hotelmgmt = require("./Audris_HotelMgmt.js"); 

2) To add rooms to the hotel
e.g. 
hotelMgmt.addRoom("1234", "Deluxe", "Sea View");
hotelMgmt.addRoom("1235", "Presidential Suite", "Garden View");
hotelMgmt.addRoom("1236", "Standard", "Swimming pool View");

3) Update room Number
e.g.
hotelMgmt.updateRoom("1234", "1237");

4) Get room status
e.g.
hotelmgmt.getRoomStatus("0000");

5) Get Available rooms
e.g.
hotelmgmt.getAvailableRooms()

6) Add guests
e.g.
hotelmgmt.addGuest("Michael", "Jackson", 100);
hotelmgmt.addGuest("Tom", "Cruise", 50);
hotelmgmt.addGuest("Mary", "Tan", 30);

7) List Guests
e.g.
hotelmgmt.listGuests();

8) Run on the terminal ---> node app.js




For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects --> for "typeof"
https://chatgpt.com/c/6735bdce-d820-8006-8ee6-4466461c3cf3 --> for naming errors