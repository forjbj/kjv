import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-toaster',
  templateUrl: './update-toaster.component.html',
  styleUrls: ['./update-toaster.component.scss']
})
export class UpdateToasterComponent {
  
  @Input() showUpdate = false;

  reload() {
    document.location.reload();
  }
}
