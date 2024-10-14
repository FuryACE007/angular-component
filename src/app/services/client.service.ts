import { Injectable } from '@angular/core'
import { Client } from '../models/client'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private mockClient: Client = new Client('smay123', 10000)

  private clients: {
    [key: string]: {
      id: string
      name: string
      country: string
      identification: { type: string; value: string }
      password: string
    }
  } = {
    'user1@fmr.com': {
      id: 'h001',
      name: 'Jake',
      country: 'US',
      identification: { type: 'ssn', value: '123-45-6789' },
      password: 'password1',
    },
    'user2@fmr.com': {
      id: 'h002',
      name: 'Amy',
      country: 'India',
      identification: { type: 'PAN', value: 'ABCDE1234F' },
      password: 'password2',
    },
  }

  constructor() {}
  //Check if a mail is already registered
  isEmailRegistered(email: string): boolean {
    return this.clients.hasOwnProperty(email)
  }
  verifyClient(
    email: string,
    id: string,
    identificationType: string,
    identificationValue: string,
  ): boolean {
    const client = this.clients[email]
    if (!client) {
      return false
    }
    return (
      client.id === id &&
      client.identification.type === identificationType &&
      client.identification.value === identificationValue
    )
  }

  isIdentificationValueRegistered(identificationValue: string): boolean {
    return Object.values(this.clients).some(
      (client) => client.identification.value === identificationValue,
    )
  }

  getClientData(): Observable<Client> {
    return of(this.mockClient)
  }

  registerClient(client: {
    email: string
    id: string
    name: string
    country: string
    identification: { type: string; value: string }
    password: string
  }): void {
    this.clients[client.email] = {
      id: client.id,
      name: client.name,
      country: client.country,
      identification: client.identification,
      password: client.password,
    }
  }

  verifyCredentials(username: string, password: string) {
    const client = this.clients[username]
    return client && client.password === password
  }
}
