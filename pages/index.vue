<script setup lang="ts">
export interface Root {
  featured_tours: FeaturedTour[]
  latest_asia_tours: LatestAsiaTour[]
  latest_europe_tours: LatestEuropeTour[]
  featured_hotels: FeaturedHotel[]
}

export interface FeaturedTour {
  id: number
  image: string
  flights: Flight[]
  start_date: string
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
  least_price: string
  max_price: string
  created_at: string
  edited_at: string
  destination: number
}

export interface Flight {
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

export interface OriginAirport {
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

export interface DestinationAirport {
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

export interface ReturnOriginAirport {
  id: number
  city: City3
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City3 {
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

export interface ReturnDestinationAirport {
  id: number
  city: City4
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City4 {
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

export interface Airline {
  id: number
  name: string
  logo: any
  created_at: string
  edited_at: string
}

export interface Tour {
  id: number
  title: string
  description_editor: string
  occasion?: string
  image: string
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

export interface HotelPrice {
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

export interface Hotel {
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

export interface LatestAsiaTour {
  id: number
  image?: string
  flights: Flight2[]
  start_date: string
  title: string
  description_editor?: string
  occasion: any
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

export interface Flight2 {
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
  hotel_prices: HotelPrice2[]
  arrival: string
  start_price: string
  created_at: string
  edited_at: string
}

export interface OriginAirport2 {
  id: number
  city: City6
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City6 {
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

export interface DestinationAirport2 {
  id: number
  city: City7
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City7 {
  id: number
  country: Country6
  name: string
  created_at: string
  edited_at: string
}

export interface Country6 {
  id: number
  continent: Continent6
  name: string
  created_at: string
  edited_at: string
}

export interface Continent6 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ReturnOriginAirport2 {
  id: number
  city: City8
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City8 {
  id: number
  country: Country7
  name: string
  created_at: string
  edited_at: string
}

export interface Country7 {
  id: number
  continent: Continent7
  name: string
  created_at: string
  edited_at: string
}

export interface Continent7 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ReturnDestinationAirport2 {
  id: number
  city: City9
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City9 {
  id: number
  country: Country8
  name: string
  created_at: string
  edited_at: string
}

export interface Country8 {
  id: number
  continent: Continent8
  name: string
  created_at: string
  edited_at: string
}

export interface Continent8 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface Airline2 {
  id: number
  name: string
  logo: any
  created_at: string
  edited_at: string
}

export interface Tour2 {
  id: number
  title: string
  description_editor?: string
  occasion: any
  image?: string
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

export interface HotelPrice2 {
  id: number
  hotel: Hotel2
  two_bed_price: string
  one_bed_price: string
  child_with_bed_price: string
  child_no_bed_price: string
  created_at: string
  edited_at: string
  flight: number
}

export interface Hotel2 {
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

export interface Image2 {
  id: number
  image: string
  alt: any
}

export interface HotelFacility2 {
  name: string
}

export interface RoomFacility2 {
  name: string
}

export interface RecreationalFacility2 {
  name: string
}

export interface SportFacility2 {
  name: string
}

export interface City10 {
  name: string
}

export interface LatestEuropeTour {
  id: number
  image: string
  flights: Flight3[]
  start_date: string
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
  destination: number
}

export interface Flight3 {
  id: number
  departure: string
  return_departure: string
  return_arrival: string
  origin_airport: OriginAirport3
  destination_airport: DestinationAirport3
  return_origin_airport: ReturnOriginAirport3
  return_destination_airport: ReturnDestinationAirport3
  airline: Airline3
  tour: Tour3
  hotel_prices: HotelPrice3[]
  arrival: string
  start_price: string
  created_at: string
  edited_at: string
}

export interface OriginAirport3 {
  id: number
  city: City11
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City11 {
  id: number
  country: Country9
  name: string
  created_at: string
  edited_at: string
}

export interface Country9 {
  id: number
  continent: Continent9
  name: string
  created_at: string
  edited_at: string
}

export interface Continent9 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface DestinationAirport3 {
  id: number
  city: City12
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City12 {
  id: number
  country: Country10
  name: string
  created_at: string
  edited_at: string
}

export interface Country10 {
  id: number
  continent: Continent10
  name: string
  created_at: string
  edited_at: string
}

export interface Continent10 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ReturnOriginAirport3 {
  id: number
  city: City13
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City13 {
  id: number
  country: Country11
  name: string
  created_at: string
  edited_at: string
}

export interface Country11 {
  id: number
  continent: Continent11
  name: string
  created_at: string
  edited_at: string
}

export interface Continent11 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface ReturnDestinationAirport3 {
  id: number
  city: City14
  name: string
  short_name: string
  created_at: string
  edited_at: string
}

export interface City14 {
  id: number
  country: Country12
  name: string
  created_at: string
  edited_at: string
}

export interface Country12 {
  id: number
  continent: Continent12
  name: string
  created_at: string
  edited_at: string
}

export interface Continent12 {
  id: number
  name: string
  created_at: string
  edited_at: string
}

export interface Airline3 {
  id: number
  name: string
  logo: any
  created_at: string
  edited_at: string
}

export interface Tour3 {
  id: number
  title: string
  description_editor: string
  occasion: string
  image: string
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

export interface HotelPrice3 {
  id: number
  hotel: Hotel3
  two_bed_price: string
  one_bed_price: string
  child_with_bed_price: string
  child_no_bed_price: string
  created_at: string
  edited_at: string
  flight: number
}

export interface Hotel3 {
  id: number
  images: Image3[]
  hotel_facilities: HotelFacility3[]
  room_facilities: RoomFacility3[]
  recreational_facilities: RecreationalFacility3[]
  sport_facilities: SportFacility3[]
  city: City15
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

export interface Image3 {
  id: number
  image: string
  alt: any
}

export interface HotelFacility3 {
  name: string
}

export interface RoomFacility3 {
  name: string
}

export interface RecreationalFacility3 {
  name: string
}

export interface SportFacility3 {
  name: string
}

export interface City15 {
  name: string
}

export interface FeaturedHotel {
  id: number
  images: Image4[]
  hotel_facilities: HotelFacility4[]
  room_facilities: RoomFacility4[]
  recreational_facilities: RecreationalFacility4[]
  sport_facilities: SportFacility4[]
  city: City16
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

export interface Image4 {
  id: number
  image: string
  alt: any
}

export interface HotelFacility4 {
  name: string
}

export interface RoomFacility4 {
  name: string
}

export interface RecreationalFacility4 {
  name: string
}

export interface SportFacility4 {
  name: string
}

export interface City16 {
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
            image: i.image,
            occasion: i.occasion
        })) || []" v-if="data?.featured_tours" />



        <HomeCallToAction />

        <HomeFourCellGrid :asia_items="data?.latest_asia_tours.map(i => ({
            title: i.title,
            duration: i.tour_duration,
            airline: i.flights.at(0)?.airline.name || '',
            price: Intl.NumberFormat('fa-ir').format(+i.least_price || 0),
            href: '/tour/details/' + i.flights?.at(0)?.id,
            image: i.image || '',
            isFeatured: i.is_featured,
            occasion: i.occasion as string || ''
        })) || []" :europe_items="data?.latest_europe_tours.map(i => ({
            title: i.title,
            duration: i.tour_duration,
            airline: i.flights.at(0)?.airline.name || '',
            price: Intl.NumberFormat('fa-ir').format( +i.least_price || 0 ),
            href: '/tour/details/' + i.flights?.at(0)?.id,
            image: i.image || '',
            isFeatured: i.is_featured,
            occasion: i.occasion as string || ''
        })) || []" />

        <HomeSpecialHotels :items="data.featured_hotels.map(i => ({
            title: i.name,
            stars: i.star,
            city: i.city.name,
            href: '/hotel/' + i.id || '#',
            image: i.images.at(0)?.image as string || ''
        })) || []" v-if="data?.featured_hotels" />
    
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
