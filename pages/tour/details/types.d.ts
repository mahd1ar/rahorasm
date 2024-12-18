
namespace TourDetailsAPI {
    export interface Root {
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
        logo: string
        created_at: string
        edited_at: string
    }

     interface Tour {
        id: number
        title: string
        description_editor: string
        start_date: string
        tour_type: string
        needed_documents: string
        agency_service: string
        tour_guide: string
        tour_duration: number
        is_featured: boolean
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
        star: number
        location_on_map: any
        description: string
        long_description: string
        created_at: string
        edited_at: string
    }

     interface Image {
        id: number
        image: string
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