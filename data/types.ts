export enum COOKIES {
        Access = 'accessToken',
        Refresh = 'refreshToken',
        Reservation = 'reservation'
}

export type Reservation = {
        // tourId: number;
        // tourtitle: string;
        // hotel: {
        //         id: number;
        //         images: TourDetailsAPI.Image;
        //         name: string;
        // }[],
        // roomId: number | null;
        // counts: {
        //         title: string;
        //         count: number;
        //         price: string;
        //         identitication: string;
        //         users: {
        //                 name: string,
        //                 en_name: string,
        //                 ssn: string,
        //                 passportNumber: string,
        //                 birthday: string,
        //         }[]
        // }[];
        flight_id: number,
        flight_time_id: number,
        hotel_price_id: number,
        count: {
                identitication: "two_bed_price" | "one_bed_price" | "child_with_bed_price" | "child_no_bed_price" | "baby_price",
                count: number,
                users: {
                        name: string,
                        en_name: string,
                        ssn: string,
                        passportNumber: string,
                        birthday: string,
                }[]
        }[],
}
