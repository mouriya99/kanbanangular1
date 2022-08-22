import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';[]
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  searchModel: string | undefined;
  board: Board = new Board('Dashboard', [
    new Column('Open', [
      "Amirdharshan A",
      "Vimal Kumar",
      "Jayakrishnan",
      "affan Ahmed Syed"
    ]),
    new Column('Contacted', [
      "Akash P",
      "Gayathiri l",
      "S Suresh",
      "Arun Prakash A"
    ]),
    new Column('Written test', [
      'Vijay Bhupathi V',
      'M Janasri',
      'Mohamed Mubarak',
      'Jithin Sajay A'
    ]),
    new Column('Technical round', [
      'Arun Kumar',
      'Midhun Kumar S',
      'Gowri Shankar S'
    ]),
    new Column('Cultural fit round', [
      'Dineshkmar',
      'Pradeep K',
      'Hemachandru K',
      'Sruthi radhakrishnan'
    ])
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
