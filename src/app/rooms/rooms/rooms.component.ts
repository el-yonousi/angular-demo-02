import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { NavComponent } from '../../nav/nav.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms',
  styleUrls: ['./rooms.component.scss'],
  templateUrl: './rooms.component.html',
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName: string = '<span class="text-red-500">Helton Hotel</span>'
  numberOfRooms: number = 10
  selectedRoom!: RoomList
  hideList: boolean = false

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 5
  }

  roomList: Array<RoomList> = []

  constructor(private roomsService: RoomsService) {}

  @ViewChild(NavComponent) headerComponent!: NavComponent

  @ViewChildren(NavComponent) headerChildComponent!: QueryList<NavComponent>

  ngOnInit(): void {
    this.roomList = this.roomsService.GetRooms()
    console.log('%c on init life cycle', 'color:red;background:yellow;padding:2px 4px;font-size:medium;');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    // this.headerComponent.title = "Rooms View"
    console.log('headerChildComponent', this.headerChildComponent.get(0));
  }

  // should not implement onChanges and doCheck in same component
  ngDoCheck(): void {
    console.log('%c on rooms components do check is call', 'color:#14b8a6;font-weight:700;font-size:1rem');
  }

  reserveRoom = () => {
    const checkin = new Date(this.roomList[this.roomList.length - 1].checkoutTime)

    const checkoutTime = new Date(checkin);
    checkoutTime.setDate(checkoutTime.getDate() + 5);

    const room: RoomList = {
      roomNumber: this.roomList.length + 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: checkin.getMonth() !== 7 ? 1800 : 2500,
      photos: "https://source.unsplash.com/random/?rooms,300x201," + this.roomList.length + 1,
      checkinTime: checkin,
      checkoutTime: checkoutTime,
      rating: Math.ceil(Math.random() * 5)
    }

    this.roomList = [...this.roomList, room]
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  hideRoomList() {
    this.hideList = !this.hideList
  }
}
