import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { roleDataResolver } from './role-data.resolver';

describe('roleDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => roleDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
