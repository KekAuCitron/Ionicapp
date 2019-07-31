import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<any>{

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let appareil = route.paramMap.get('name');
    return this.dataService.getData(appareil);
  }
}
