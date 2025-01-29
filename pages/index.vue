<script setup lang="ts">
export interface Root {
  featured_tours: FeaturedTour[]
  latest_asia_tours: LatestAsiaTour[]
  latest_europe_tours: any[]
  featured_hotels: FeaturedHotel[]
}

export interface FeaturedTour {
  id: number
  image: string
  start_date: string
  destinations: Destination[]
  flight_times: FlightTime[]
  title: string
  description_editor: string
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
  other_currency?: string
  two_bed_price_other_currency?: string
  one_bed_price_other_currency?: string
  child_with_bed_price_other_currency?: string
  child_no_bed_price_other_currency?: string
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

export interface City {
  name: string
}

export interface LatestAsiaTour {
  id: number
  image: string
  start_date: string
  destinations: Destination2[]
  flight_times: FlightTime2[]
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

export interface Destination2 {
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

export interface FlightTime2 {
  id: number
  departure_date: string
  arrival_date: string
  hotel_price: HotelPrice2[]
  least_price: number
  flight_Legs: number[]
}

export interface HotelPrice2 {
  id: number
  hotels: Hotel2[]
  two_bed_price: string
  one_bed_price: string
  child_with_bed_price: string
  child_no_bed_price: string
  other_currency?: string
  two_bed_price_other_currency?: string
  one_bed_price_other_currency?: string
  child_with_bed_price_other_currency?: string
  child_no_bed_price_other_currency?: string
  created_at: string
  edited_at: string
}

export interface Hotel2 {
  id: number
  images: Image2[]
  hotel_facilities: HotelFacility2[]
  room_facilities: RoomFacility2[]
  recreational_facilities: RecreationalFacility2[]
  sport_facilities: SportFacility2[]
  city: City2
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

export interface City2 {
  name: string
}

export interface FeaturedHotel {
  id: number
  images: Image3[]
  hotel_facilities: HotelFacility3[]
  room_facilities: RoomFacility3[]
  recreational_facilities: RecreationalFacility3[]
  sport_facilities: SportFacility3[]
  city: City3
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

export interface City3 {
  name: string
}


const { data } = useAPI<Root>('/tour/home')
</script>


<template>
  <!-- <pre>
    {{ data }}
  </pre> -->
    <main >
        <section  class="py-3 container px-4 mx-auto">
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
            airline: i.flight_times.at(0)?.flight_Legs.at(0).airline.name || '',
            // airline: i.flight_times.at(0)?.airline.name || '',
            price: i.least_price,
            href: i.flight_times?.at(0)?.id ?  `/tour/details/${ i.flight_times.at(0)!.id!}`  : '#' ,
            image: i.image,
            occasion: i.occasion
        })) || []" v-if="data?.featured_tours" />



<HomeCallToAction />
<HomeFourCellGrid :asia_items="data?.latest_asia_tours.map(i => ({
    title: i.title,
    duration: i.tour_duration,
    airline: i.flight_times.at(0)?.flight_Legs.at(0).airline.name,
    price: Intl.NumberFormat('fa-ir').format(+(i.least_price || 0)),
    href: '/tour/details/' + i.flight_times.at(0)?.id,
    image: i.image || '',
    isFeatured: i.is_featured,
    occasion: i.occasion as string || ''
})) || []" :europe_items="data?.latest_europe_tours.map(i => ({
    title: i.title,
    duration: i.tour_duration,
    airline: i.flight_times.at(0)?.flight_Legs.at(0).airline.name,
    price: Intl.NumberFormat('fa-ir').format( +i.least_price || 0 ),
    href: '/tour/details/' + i.flight_times.at(0)?.id,
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
