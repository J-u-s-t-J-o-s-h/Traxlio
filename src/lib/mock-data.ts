export type Tote = {
    id: string;
    name: string;
    description: string;
    category: string;
    itemCount: number;
    lastUpdated: string;
};

export const MOCK_TOTES: Tote[] = [
    {
        id: "1",
        name: "Camping Gear",
        description: "Tent, sleeping bags, and cooking equipment",
        category: "Outdoor",
        itemCount: 12,
        lastUpdated: "2 days ago",
    },
    {
        id: "2",
        name: "Holiday Decorations",
        description: "Christmas lights, ornaments, and stockings",
        category: "Seasonal",
        itemCount: 45,
        lastUpdated: "11 months ago",
    },
    {
        id: "3",
        name: "Electronics Cables",
        description: "Spare USB-C, HDMI, and power cords",
        category: "Tech",
        itemCount: 28,
        lastUpdated: "1 week ago",
    },
    {
        id: "4",
        name: "Winter Clothes",
        description: "Coats, scarves, and gloves",
        category: "Clothing",
        itemCount: 15,
        lastUpdated: "6 months ago",
    },
];
