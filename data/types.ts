export enum COOKIES {
        Access = 'accessToken',
        Refresh = 'refreshToken',
        Reservation = 'reservation'
}

export type Reservation = {
        tourId: number;
        tourtitle: string;
        hotelId: number;
        hotelImages: TourDetailsAPI.Image;
        hotelName: string;
        roomId: number | null;
        counts: {
                title: string;
                count: number;
                price: string;
                identitication: string;
                users: {
                        name: string,
                        en_name: string,
                        ssn: string,
                        passportNumber: string,
                        birthday: string,
                }[]
        }[];
}
