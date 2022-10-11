export interface Supplier {
  name: string,
  corporateName: string,
  phoneNumber: string,
  email: string,
  einNumber: string,
  addressViewModel: {
    city: string,
    state: string,
    streetName: string,
    number: string,
    zipCode: string
  }
}
