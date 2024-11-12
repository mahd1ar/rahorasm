
namespace HotelsListAPI {

    export type Root = Root2[]

     interface Root2 {
        id: number
        images: Image[]
        hotel_facilities: HotelFacility[]
        room_facilities: RoomFacility[]
        recreational_facilities: RecreationalFacility[]
        sport_facilities: SportFacility[]
        name: string
        address: string
        star: number
        location_on_map: any
        description: string
        long_description: string
        created_at: string
        edited_at: string
        city: number
    }

     interface Image {
        id: number
        hotel: number
        image: string
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

}


namespace HotelDetailsAPI {
   export interface Root {
        id: number
        images: Image[]
        hotel_facilities: HotelFacility[]
        room_facilities: RoomFacility[]
        recreational_facilities: RecreationalFacility[]
        sport_facilities: SportFacility[]
        name: string
        address: string
        star: number
        location_on_map: any
        description: string
        long_description: string
        created_at: string
        edited_at: string
        city: number
    }

    interface Image {
        id: number
        hotel: number
        image: string
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

}