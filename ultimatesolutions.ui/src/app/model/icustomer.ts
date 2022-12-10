export interface ICustomer {
    "id": number,
    "code": string,
    "name": string,
    "mobile": string,
    "description": string,
    "customerDetailsVM": [
      {
        "id": number,
        "city": string,
        "zone": string,
        "street": string,
        "buliding": string,
        "floor": string,
        "customerId": number
      }
    ]
  
}
