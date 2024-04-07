import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder, Validators  } from "@angular/forms";
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
 
export class AddBookComponent implements OnInit {
 
  bookForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private snackbarService: SnackbarService
  ) { 
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required], 
      book_type: ['']
    });
  }
 
  openSnackBar(message: string, action: string) {
    this.snackbarService.showSnackbar(message, action);
  }

  ngOnInit() { }
 
  onSubmit(): void {
    this.crudService.AddBook(this.bookForm.value).subscribe(() => {
      console.log('Data added successfully!');
      this.bookForm.reset();
      this.ngZone.run(() => this.router.navigateByUrl('/add-book'));
    }, (err) => {
      console.log(err);
    });
  }
  
}