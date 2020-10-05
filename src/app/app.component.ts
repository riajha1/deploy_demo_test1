import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
   public Editor = ClassicEditor;

  
constructor(private modalService: NgbModal){}
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  
}