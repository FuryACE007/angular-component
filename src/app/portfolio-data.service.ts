import { Injectable } from '@angular/core';
import { mockPortfolio } from "./mockPortfolio";

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  public MOCKPORTFOLIO: mockPortfolio[] = [
    {
      name: 'Apple',
      quantity: 10,
      buying_price: 150,
      current_price: 200,
      gain: 500,
    },
    {
      name: 'Microsoft',
      quantity: 5,
      buying_price: 350,
      current_price: 360,
      gain: 50,
    },
    {
      name: 'Amazon',
      quantity: 3,
      buying_price: 350,
      current_price: 400,
      gain: 150,
    },
    {
      name: 'Tesla',
      quantity: 8,
      buying_price: 600,
      current_price: 700,
      gain: 800,
    },
    {
      name: 'Google',
      quantity: 7,
      buying_price: 1800,
      current_price: 1900,
      gain: 700,
    },
    {
      name: 'Facebook',
      quantity: 6,
      buying_price: 250,
      current_price: 280,
      gain: 180,
    },
    {
      name: 'Netflix',
      quantity: 4,
      buying_price: 500,
      current_price: 550,
      gain: 200,
    },
    {
      name: 'NVIDIA',
      quantity: 9,
      buying_price: 850,
      current_price: 900,
      gain: 450,
    },
    {
      name: 'Intel',
      quantity: 12,
      buying_price: 50,
      current_price: 60,
      gain: 120,
    },
    {
      name: 'Adobe',
      quantity: 10,
      buying_price: 400,
      current_price: 450,
      gain: 500,
    },
  ]

    
  constructor() {}
}
