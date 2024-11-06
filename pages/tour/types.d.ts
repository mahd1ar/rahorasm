namespace FiltersAPI {
    export interface Root {
        airlines: Airline[]
        durations: Duration[]
        prices: Price
    }

    interface Airline {
        id: number
        name: string
        tours_quantity: number
    }

    interface Duration {
        duration: number
        tours_quantity: number
    }

    interface Price {
        max_price: number
        least_price: number
    }

}

namespace TourAPI {

    export type Root = Root2[]

    interface Root2 {
        id: number
        airline: Airline
        flights: Flight[]
        title: string
        description: string
        tour_type: string
        start_date: string
        needed_documents: string
        agency_service: string
        tour_guide: string
        tour_duration: string
        is_featured: boolean
        least_price: string
        created_at: string
        edited_at: string
        destination: number
    }

    interface Airline {
        id: number
        name: string
        created_at: string
        edited_at: string
    }

    interface Flight {
        id: number
        origin_airport: OriginAirport
        destination_airport: DestinationAirport
        return_origin_airport: ReturnOriginAirport
        return_destination_airport: ReturnDestinationAirport
        departure: string
        arrival: string
        return_departure: string
        return_arrival: string
        start_price: string
        created_at: string
        edited_at: string
        tour: number
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
}