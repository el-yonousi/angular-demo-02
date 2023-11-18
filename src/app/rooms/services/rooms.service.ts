import { Injectable } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: Array<RoomList> = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1800,
      photos: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('15-Jull-2023'),
      checkoutTime: new Date('20-Jull-2023'),
      rating: 4
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2500,
      photos: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('10-Aug-2023'),
      checkoutTime: new Date('15-Aug-2023'),
      rating: 3
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 2500,
      photos: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      checkinTime: new Date('15-Aug-2023'),
      checkoutTime: new Date('20-Aug-2023'),
      rating: 5
    },
  ]

  constructor() { }

  GetRooms() {
    return this.roomList
  }
}
