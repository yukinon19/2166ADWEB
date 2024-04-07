import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(message: string, action: string = 'Close', duration: number = 2000) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}