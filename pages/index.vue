<script setup lang="ts">
interface Root {
    featured_tours: FeaturedTour[]
    latest_asia_tours: LatestAsiaTour[]
    latest_europe_tours: any[]
    featured_hotels: FeaturedHotel[]
}

interface FeaturedTour {
    id: number
    flights: Flight[]
    start_date: string
    title: string
    description: string
    image: string
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
    hotel_prices: any[]
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
    description: string
    image: string
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

interface LatestAsiaTour {
    id: number
    flights: Flight2[]
    start_date: string
    title: string
    description: string
    image?: string
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

interface Flight2 {
    id: number
    departure: string
    return_departure: string
    return_arrival: string
    origin_airport: OriginAirport2
    destination_airport: DestinationAirport2
    return_origin_airport: ReturnOriginAirport2
    return_destination_airport: ReturnDestinationAirport2
    airline: Airline2
    tour: Tour2
    hotel_prices: HotelPrice[]
    arrival: string
    start_price: string
    created_at: string
    edited_at: string
}

interface OriginAirport2 {
    id: number
    city: City5
    name: string
    short_name: string
    created_at: string
    edited_at: string
}

interface City5 {
    id: number
    country: Country5
    name: string
    created_at: string
    edited_at: string
}

interface Country5 {
    id: number
    continent: Continent5
    name: string
    created_at: string
    edited_at: string
}

interface Continent5 {
    id: number
    name: string
    created_at: string
    edited_at: string
}

interface DestinationAirport2 {
    id: number
    city: City6
    name: string
    short_name: string
    created_at: string
    edited_at: string
}

interface City6 {
    id: number
    country: Country6
    name: string
    created_at: string
    edited_at: string
}

interface Country6 {
    id: number
    continent: Continent6
    name: string
    created_at: string
    edited_at: string
}

interface Continent6 {
    id: number
    name: string
    created_at: string
    edited_at: string
}

interface ReturnOriginAirport2 {
    id: number
    city: City7
    name: string
    short_name: string
    created_at: string
    edited_at: string
}

interface City7 {
    id: number
    country: Country7
    name: string
    created_at: string
    edited_at: string
}

interface Country7 {
    id: number
    continent: Continent7
    name: string
    created_at: string
    edited_at: string
}

interface Continent7 {
    id: number
    name: string
    created_at: string
    edited_at: string
}

interface ReturnDestinationAirport2 {
    id: number
    city: City8
    name: string
    short_name: string
    created_at: string
    edited_at: string
}

interface City8 {
    id: number
    country: Country8
    name: string
    created_at: string
    edited_at: string
}

interface Country8 {
    id: number
    continent: Continent8
    name: string
    created_at: string
    edited_at: string
}

interface Continent8 {
    id: number
    name: string
    created_at: string
    edited_at: string
}

interface Airline2 {
    id: number
    name: string
    logo: string
    created_at: string
    edited_at: string
}

interface Tour2 {
    id: number
    title: string
    description: string
    image?: string
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
    city: City9
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

interface City9 {
    name: string
}

interface FeaturedHotel {
    id: number
    images: Image2[]
    hotel_facilities: HotelFacility2[]
    room_facilities: RoomFacility2[]
    recreational_facilities: RecreationalFacility2[]
    sport_facilities: SportFacility2[]
    city: City10
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

interface Image2 {
    id: number
    image: any
    alt: any
}

interface HotelFacility2 {
    name: string
}

interface RoomFacility2 {
    name: string
}

interface RecreationalFacility2 {
    name: string
}

interface SportFacility2 {
    name: string
}

interface City10 {
    name: string
}

const { data } = useAPI<Root>('/tour/home')
</script>


<template>
    <main>

        <section class="py-3 container px-4 mx-auto">
            <div class="flex items-center homeImg">
                <div class="hidden lg:block lg:w-4/12 relative" data-aos="fade-left" data-aos-duration="1500">
                    <img src="/assets/images/home/intro.webp" class="w-full " />
                </div>
                <div class="home-form-bg lg:w-8/12" data-aos="fade-up" data-aos-duration="1500">
                    <h1 class="font-bold text-4xl pt-16 lg:pt-3" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">کشف
                        دنیای نو با</h1>
                    <h1 class="font-bold text-4xl pb-4" data-aos="zoom-in" data-aos-duration="1500"
                        data-aos-delay="100">
                        آژانس مسافرتی <span>راه و رسم سفر</span></h1>
                    <HomeFormTripForm />
                </div>
            </div>
        </section>

        <HomeSpecialAdvise :items="data.featured_tours.map(i => ({
            title: i.title,
            duration: i.tour_duration,
            airline: i.flights.at(0)?.airline.name || '',
            price: i.least_price,
            href: '#',
            image: i.image
        })) || []" v-if="data?.featured_tours" />



        <HomeCallToAction />

        <HomeFourCellGrid :asia_items="data?.latest_asia_tours.map(i => ({
            title: i.title,
            duration: i.tour_duration,
            airline: i.flights.at(0)?.airline.name || '',
            price: i.least_price,
            href: '#',
            image: i.image
        })) || []" :europe_items="data?.latest_europe_tours.map(i => ({
            title: i.title,
            duration: i.tour_duration,
            airline: i.flights.at(0)?.airline.name || '',
            price: i.least_price,
            href: '#',
            image: i.image
        })) || []" />

        <HomeSpecialHotels :items="data.featured_hotels.map(i => ({
            title: i.name,
            stars: i.star,
            city: i.city.name,
            href: '/hotel/' + i.id || '#'
        })) || []" v-if="data?.featured_hotels" />
        />
    </main>
</template>

<style>
.homeImg {
    position: sticky;
    top: 30px;
    transition: all 0.4s;
}

.home-form-bg {
    background: url("/assets/images/home/home-form-bg.webp") no-repeat;
    background-size: contain;
}

.advise-title {
    background: url('/assets/images/home/advise-title.webp') no-repeat;
    background-size: 100% 75px;
    background-position: center;
    background-origin: border-box;
    padding: 20px;

}



.asia-title {
    background: url("../../../assets/images/home/advise-title.webp") no-repeat;
    background-size: 105% 92px;
    background-position: top;
    background-origin: border-box;
    padding: 20px;
}

.moveBox {
    animation: move 2s infinite alternate linear;
}

@keyframes move {
    0% {
        transform: translateY(-10px) rotate(-90deg);
    }

    100% {
        transform: translateY(10px) rotate(-90deg);
    }
}

.anime-blur-enter-active,
.anime-blur-leave-active {
    transition: all 0.4s;
}

.anime-blur-enter-from,
.anime-blur-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
