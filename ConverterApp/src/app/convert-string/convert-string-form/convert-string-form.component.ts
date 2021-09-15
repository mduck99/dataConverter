import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConvertString } from 'src/app/shared/convert-string.model';
import { ConvertStringService } from 'src/app/shared/convert-string.service';

@Component({
  selector: 'app-convert-string-form',
  templateUrl: './convert-string-form.component.html',
  styles: [
  ]
})
export class ConvertStringFormComponent implements OnInit {

  constructor(public service: ConvertStringService) { }

  ngOnInit(): void {
    this.service.formResult.Type = 'String';
  }

  onSubmit(buttonType: string): void {
    this.refresh();
    this.service.convert(buttonType).subscribe(
      res => {
        this.service.resType = buttonType;
        this.service.formResult.Type = buttonType;
        this.service.formResult.Value = res.toString();
      },
      err => {
        this.service.formResult.Value = "Error!";
      }
    )
  }

  onSelect(buttonType: string): void {
    this.service.formResult.Type = this.service.resType;
    this.service.convertChange(buttonType).subscribe(
      res => {
        this.service.resType = buttonType;
        this.service.formResult.Value = res.toString();
      },
      err => {
        this.service.formResult.Value = "Error!";
      }
    )
  }

  change() {
    this.service.resType = 'String';
  }

  refresh() {
    this.service.formResult = new ConvertString();
  }
}
