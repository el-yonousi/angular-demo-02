import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: Array<RoomList> = []
  @Input() hotelName: string = ''

  @Output() selectedRoom = new EventEmitter<RoomList>()

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['hotelName']?.firstChange) {
      this.hotelName = this.hotelName.toUpperCase()
    }
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    console.log('on destroyed is called');
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }
}
