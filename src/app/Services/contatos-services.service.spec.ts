import { TestBed } from '@angular/core/testing';

import { ContatosServicesService } from './contatos-services.service';

describe('ContatosServicesService', () => {
  let service: ContatosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
