namespace FiltersAPI {
   


    export  type Root = Root2[]

     interface Root2 {
        id: number
        image: any
        flights: Flight[]
        start_date: string
        title: string
        description_editor?: string
        occasion?: string
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
        destination: number
    }

     interface Flight {
        id: number
        departure: string
        return_departure: string
        return_arrival: string
        origin_airport: OriginAirport
        destination_airport: DestinationAirport
        return_origin_airport: ReturnOriginAirport
        return_destination_airport: ReturnDestinationAirport
        airline: Airline
        tour: Tour
        hotel_prices: HotelPrice[]
        arrival: string
        start_price: string
        created_at: string
        edited_at: string
    }

     interface OriginAirport {
        id: number
        city: City
        name: string
        short_name: string
        created_at: string
        edited_at: string
    }

     interface City {
        id: number
        country: Country
        name: string
        created_at: string
        edited_at: string
    }

     interface Country {
        id: number
        continent: Continent
        name: string
        created_at: string
        edited_at: string
    }

     interface Continent {
        id: number
        name: string
        created_at: string
        edited_at: string
    }

     interface DestinationAirport {
        id: number
        city: City2
        name: string
        short_name: string
        created_at: string
        edited_at: string
    }

     interface City2 {
        id: number
        country: Country2
        name: string
        created_at: string
        edited_at: string
    }

     interface Country2 {
        id: number
        continent: Continent2
        name: string
        created_at: string
        edited_at: string
    }

     interface Continent2 {
        id: number
        name: string
        created_at: string
        edited_at: string
    }

     interface ReturnOriginAirport {
        id: number
        city: City3
        name: string
        short_name: string
        created_at: string
        edited_at: string
    }

     interface City3 {
        id: number
        country: Country3
        name: string
        created_at: string
        edited_at: string
    }

     interface Country3 {
        id: number
        continent: Continent3
        name: string
        created_at: string
        edited_at: string
    }

     interface Continent3 {
        id: number
        name: string
        created_at: string
        edited_at: string
    }

     interface ReturnDestinationAirport {
        id: number
        city: City4
        name: string
        short_name: string
        created_at: string
        edited_at: string
    }

     interface City4 {
        id: number
        country: Country4
        name: string
        created_at: string
        edited_at: string
    }

     interface Country4 {
        id: number
        continent: Continent4
        name: string
        created_at: string
        edited_at: string
    }

     interface Continent4 {
        id: number
        name: string
        created_at: string
        edited_at: string
    }

     interface Airline {
        id: number
        name: string
        logo: any
        created_at: string
        edited_at: string
    }

     interface Tour {
        id: number
        title: string
        description_editor: any
        occasion: any
        image: any
        start_date: string
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
        destination: number
    }

     interface HotelPrice {
        id: number
        hotel: Hotel
        two_bed_price: string
        one_bed_price: string
        child_with_bed_price: string
        child_no_bed_price: string
        created_at: string
        edited_at: string
        flight: number
    }

     interface Hotel {
        id: number
        images: Image[]
        hotel_facilities: HotelFacility[]
        room_facilities: RoomFacility[]
        recreational_facilities: RecreationalFacility[]
        sport_facilities: SportFacility[]
        city: City5
        name: string
        address: string
        is_featured: boolean
        star: number
        location_on_map: any
        description: string
        long_description: string
        created_at: string
        edited_at: string
    }

     interface Image {
        id: number
        image: any
        alt: any
    }

     interface HotelFacility {
        name: string
    }

     interface RoomFacility {
        name: string
    }

     interface RecreationalFacility {
        name: string
    }

     interface SportFacility {
        name: string
    }

     interface City5 {
        name: string
    }

}

namespace TourAPI {
  export type Root = Root2[]

  export interface Root2 {
    id: number
    image: string
    start_date: string
    destinations: Destination[]
    flight_times: FlightTime[]
    title: string
    description_editor: string
    occasion?: string
    tour_type: string
    needed_documents: string
    agency_service: string
    tour_guide: string
    tour_duration: number
    is_featured: boolean
    is_shown: boolean
    least_price?: string
    max_price?: string
    created_at: string
    edited_at: string
  }
  
  export interface Destination {
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
  
  export interface FlightTime {
    id: number
    departure_date: string
    arrival_date: string
    hotel_price: HotelPrice[]
    least_price: number
    flight_Legs: number[]
  }
  
  export interface HotelPrice {
    id: number
    hotels: Hotel[]
    two_bed_price: string
    one_bed_price: string
    child_with_bed_price: string
    child_no_bed_price: string
    other_currency: any
    two_bed_price_other_currency: any
    one_bed_price_other_currency: any
    child_with_bed_price_other_currency: any
    child_no_bed_price_other_currency: any
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
    city: City
    name: string
    english_name?: string
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
  
  export interface City {
    name: string
  }
   
}