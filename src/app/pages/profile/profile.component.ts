import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public data: any;
  public genre: any
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.data = JSON.parse(localStorage.getItem("infoUser"));

    if (this.data) {
      this.form = this.formBuilder.group({
        name: [this.data.name, Validators.required],
        age: [this.data.age, Validators.required],
        favorite: [this.data.favorite, Validators.required]
      });
    } else {
      this.form = this.formBuilder.group({
        name: [null, Validators.required],
        age: [null, Validators.required],
        favorite: [null, Validators.required]
      });
    }

  }

  getGenre(genre){
    this.genre = genre;
  }

  save() {

    if (this.form.valid){
      this.data = { name: this.form.value.name, age: this.form.value.age, favorite: this.form.value.favorite, genre: this.genre };
  
      localStorage.setItem("infoUser", JSON.stringify(this.data));
    } else {
      alert("Preencha todos os campos!")
    }
  }



}
