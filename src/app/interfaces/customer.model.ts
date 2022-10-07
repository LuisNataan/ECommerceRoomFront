export interface Customer {
  name: string,
  email: string
  phoneNumber: string,
  addressViewModel: {
    city: string,
    state: string,
    streetName: string,
    number: string,
    zipCode: string
  }
}
