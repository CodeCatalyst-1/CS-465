export interface Trip {
    _id: string;
    name: string;
    location: string;
    description: string;
    duration: number;
    price: number;
}

export const TRIPS: Trip[] = [
    { _id: '1', name: 'Hawaii Trip', location: 'Hawaii', description: 'Sunny beaches', duration: 7, price: 2500 },
    { _id: '2', name: 'Alaska Trip', location: 'Alaska', description: 'Glaciers and wildlife', duration: 10, price: 3000 },
    { _id: '3', name: 'Japan Trip', location: 'Japan', description: 'Cherry blossoms', duration: 8, price: 4000 }
];
