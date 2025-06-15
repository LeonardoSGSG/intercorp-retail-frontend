import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-consolidated-data',
  templateUrl: './consolidated-data.html',
  styleUrls: ['./consolidated-data.scss'],
  imports: [CommonModule, FormsModule],
})
export class ConsolidatedDataComponent {}
