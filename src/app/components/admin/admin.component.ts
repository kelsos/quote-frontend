import { Component } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-admin',
    templateUrl: 'app/components/admin/admin.component.html'
})

export class AdminComponent {
    constructor(private api: RestService) {
    }
}
