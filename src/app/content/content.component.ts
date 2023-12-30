import { Component} from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  buttonLabel: string = 'carrinho';
  buttonSecond: string = 'adicionar ao carrinho'
}