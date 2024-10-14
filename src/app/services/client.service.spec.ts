import { TestBed } from '@angular/core/testing'

import { ClientService } from './client.service'

describe('ClientService', () => {
  let service: ClientService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ClientService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('Should get atleast one client', (done) => {
    service.getClientData().subscribe((client) => {
      expect(client).toBeTruthy();
      done();
    })
  })

  it('Should return client id', (done) => {
    service.getClientData().subscribe((client) => {
      expect(client.id).toBeDefined();
      done();
    })
  })

  it('Should return client cash', (done) => {
    service.getClientData().subscribe((client) => {
      expect(client.cash).toBeGreaterThanOrEqual(0);
      done();
    })
  })
})
