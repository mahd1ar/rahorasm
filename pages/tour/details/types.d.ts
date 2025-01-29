
namespace TourDetailsAPI {export interface Root {
  id: number
  departure_date: string
  arrival_date: string
  flight_Legs: FlightLeg[]
  tour: Tour
}

export interface FlightLeg {
  id: number
  airline: Airline
  departure_airport: DepartureAirport
  arrival_airport: ArrivalAirport
  departure: string
  arrival: string
  departure_time: string
  arrival_time: string
  travel_class: string
}

export interface Airline {
  id: number
  name: string
  logo: string
  created_at: string
  edited_at: string
}

export interface DepartureAirport {
  id: number
  city: City
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City {
  id: number
  country: Country
  name: string
  created_at: string
  edited_at: string
}

export interface Country {
  id: number
  continent: Continent
  name: string
  created_at: string
  edited_at: string
}

export interface Continent {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ArrivalAirport {
  id: number
  city: City2
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City2 {
  id: number
  country: Country2
  name: string
  created_at: string
  edited_at: string
}

export interface Country2 {
  id: number
  continent: Continent2
  name: string
  created_at: string
  edited_at: string
}

export interface Continent2 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface Tour {
  id: number
  image: string
  start_date: string
  destinations: Destination[]
  flight_times: FlightTime[]
  title: string
  description_editor: string
  occasion: string
  tour_type: string
  needed_documents: string
  agency_service: string
  tour_guide: string
  tour_duration: number
  is_featured: boolean
  is_shown: boolean
  least_price: string
  max_price: string
  created_at: string
  edited_at: string
}

export interface Destination {
  id: number
  country: Country3
  name: string
  created_at: string
  edited_at: string
}

export interface Country3 {
  id: number
  continent: Continent3
  name: string
  created_at: string
  edited_at: string
}

export interface Continent3 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface FlightTime {
  id: number
  departure_date: string
  arrival_date: string
  flight_Legs: FlightLeg2[]
  hotel_price: HotelPrice[]
  least_price: number
}

export interface FlightLeg2 {
  id: number
  airline: Airline2
  departure_airport: DepartureAirport2
  arrival_airport: ArrivalAirport2
  departure: string
  arrival: string
  departure_time: string
  arrival_time: string
  travel_class: string
}

export interface Airline2 {
  id: number
  name: string
  logo: string
  created_at: string
  edited_at: string
}

export interface DepartureAirport2 {
  id: number
  city: City3
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City3 {
  id: number
  country: Country4
  name: string
  created_at: string
  edited_at: string
}

export interface Country4 {
  id: number
  continent: Continent4
  name: string
  created_at: string
  edited_at: string
}

export interface Continent4 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ArrivalAirport2 {
  id: number
  city: City4
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City4 {
  id: number
  country: Country5
  name: string
  created_at: string
  edited_at: string
}

export interface Country5 {
  id: number
  continent: Continent5
  name: string
  created_at: string
  edited_at: string
}

export interface Continent5 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface HotelPrice {
  id: number
  hotels: Hotel[]
  two_bed_price: string
  one_bed_price: string
  child_with_bed_price: string
  child_no_bed_price: string
  baby_price: string
  other_currency: any
  two_bed_price_other_currency: any
  one_bed_price_other_currency: any
  child_with_bed_price_other_currency: any
  child_no_bed_price_other_currency: any
  baby_price_other_currency: any
  created_at: string
  edited_at: string
}

export interface Hotel {
  id: number
  images: Image[]
  hotel_facilities: HotelFacility[]
  room_facilities: RoomFacility[]
  recreational_facilities: RecreationalFacility[]
  sport_facilities: SportFacility[]
  city: City5
  name: string
  english_name: string
  address: string
  is_featured: boolean
  star: number
  location_on_map: any
  description: string
  long_description: string
  created_at: string
  edited_at: string
}

export interface Image {
  id: number
  image: string
  alt: any
}

export interface HotelFacility {
  name: string
}

export interface RoomFacility {
  name: string
}

export interface RecreationalFacility {
  name: string
}

export interface SportFacility {
  name: string
}

export interface City5 {
  name: string
}

     
}