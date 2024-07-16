import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export enum PieceType {
  Empty = '',
  Pawn = 'piyon',
  // Diğer taşları buraya ekleyebilirsiniz
}

export interface Piece {
  type: PieceType;
  // İleride eklemek isteyebileceğiniz diğer özellikler
}


export class Board {
  squares: Piece[] = [];

  constructor() {
    // 8x8 bir tahta oluştur
    for (let i = 0; i < 64; i++) {
      this.squares.push({ type: PieceType.Empty });
    }

    // Piyonları yerleştirelim (örneğin sadece belirli bir pozisyona)
    this.squares[4] = { type: PieceType.Pawn };
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('pieceMove', [
      state('selected', style({
        transform: 'scale(1)',
        backgroundColor: 'yellow'
      })),
      state('default', style({
        transform: 'scale(1)',
        backgroundColor: 'lightgray'
      })),
      transition('default => selected', [
        animate('0.5s')
      ]),
      transition('selected => default', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AppComponent {
  board: Board = new Board();
  selectedIndex: number = -1;

  selectOrMove(index: number) {
    const el = this.board.squares[index];
    if (el.type !== PieceType.Empty) {
      this.selectedIndex = index;
    } else {
      if (this.selectedIndex > -1) {
        this.board.squares[index] = this.board.squares[this.selectedIndex];
        this.board.squares[this.selectedIndex] = { type: PieceType.Empty };
        this.selectedIndex = -1;
      }
    }
  }

  isSelected(index: number): boolean {
    return this.selectedIndex === index;
  }
}
