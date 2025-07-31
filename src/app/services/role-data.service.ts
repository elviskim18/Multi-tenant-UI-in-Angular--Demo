import { Injectable } from '@angular/core';
import { countryManagerData, fieldAgentData, regionalManagerData } from '../mock-api/data';

@Injectable({
  providedIn: 'root'
})
export class RoleDataService {

  constructor() { }

  getData(role: string) {
    switch (role) {
      case 'COUNTRY_MANAGER':
        return countryManagerData;
      case 'REGIONAL_MANAGER':
        return regionalManagerData;
      case 'FIELD_MEMBER':
        return fieldAgentData;
      default:
        return null;
    }
  }
}
