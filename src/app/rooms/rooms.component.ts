import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  styleUrls: ['./rooms.component.scss'],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent implements OnInit {
  
  hotelName: string = '<span class="text-red-500">Helton Hotel</span>'
  numberOfRooms: number = 10
  
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 5
  }
  
  roomList: Array<RoomList> = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1800,
      photos: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('15-Jull-2023'),
      checkoutTime: new Date('20-Jull-2023'),
      rating: 4.8
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2500,
      photos: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('10-Aug-2023'),
      checkoutTime: new Date('15-Aug-2023'),
      rating: 3.2
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2500,
      photos: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('15-Aug-2023'),
      checkoutTime: new Date('20-Aug-2023'),
      rating: 4.5
    },
  ]
  
  ngOnInit(): void {
    console.log('%c on init life cycle', 'color:red;background:yellow;padding:2px 4px;font-size:medium;');
  }

  reserveRoom = () => {
    const checkin = new Date(this.roomList[this.roomList.length - 1].checkoutTime)
    
    const checkoutTime = new Date(checkin);
    checkoutTime.setDate(checkoutTime.getDate() + 5);
    
    this.roomList.push({
      roomNumber: this.roomList.length + 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: checkin.getMonth() !== 7 ? 1800 : 2500,
      photos: "https://source.unsplash.com/random/?rooms,300x201," + this.roomList.length + 1,
      checkinTime: checkin,
      checkoutTime: checkoutTime,
      rating: 4.8
    },)
  }
}
