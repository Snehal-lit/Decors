export type ProductData = {
  id: string;
  name: string;
  category: "garlands" | "gifts" | "wall-decor" | "props";
  price: number | "Upon Request";
  desc: string;
  materials: string;
  image: string;
};

export const PRODUCTS: ProductData[] = [
  // GARLANDS
  {
    id: "g-01",
    name: "Classic Rose & Jasmine Jaimala",
    category: "garlands",
    price: 3500,
    desc: "A luxurious traditional Indian wedding garland meticulously handcrafted using fresh red roses and fragrant jasmine buds. Perfect for the main wedding ceremony.",
    materials: "Fresh Red Roses, Jasmine",
    image: "/images/event/garland_1_1789108119606.jpg",
  },
  {
    id: "g-02",
    name: "Golden Marigold & Pearl Mala",
    category: "garlands",
    price: 2200,
    desc: "An intricate artificial marigold and pearl string garland. This reusable masterpiece brings traditional vibrance to any festive occasion or pooja.",
    materials: "Faux Marigolds, Faux Pearls, Zari Thread",
    image: "/images/event/garland_2_1789108133057.jpg",
  },
  {
    id: "g-03",
    name: "Lotus & Tuberose Varmala",
    category: "garlands",
    price: 4800,
    desc: "A stunning, highly fragrant floral garland featuring pink lotuses and white tuberose (rajnigandha). Ideal for a regal, traditional aesthetic.",
    materials: "Fresh Pink Lotus, Tuberose",
    image: "/images/event/garland_3_1789108146992.jpg",
  },

  // RETURN GIFTS
  {
    id: "rg-01",
    name: "Silver-Plated Vintage Jewelry Box",
    category: "gifts",
    price: 1250,
    desc: "A beautifully crafted silver-plated traditional Indian return gift box with intricate floral embossing. The perfect premium giveaway for wedding guests.",
    materials: "Silver Plating, Velvet Lining",
    image: "/images/event/gift_1_1789108161624.jpg",
  },
  {
    id: "rg-02",
    name: "Royal Zari Velvet Potli Bags",
    category: "gifts",
    price: 450,
    desc: "A set of rich, vibrant velvet potli bags embroidered with heavy gold zari work and pearl tassels. Ideal for distributing sweets or dry fruits.",
    materials: "Premium Velvet, Gold Zari, Faux Pearls",
    image: "/images/event/gift_2_1789108177730.jpg",
  },
  {
    id: "rg-03",
    name: "Ornate Brass Kumkum Box",
    category: "gifts",
    price: 850,
    desc: "A heavy, ornate brass kumkum/sindoor box featuring traditional Indian deity carvings. A highly auspicious and cherished return gift for ceremonies.",
    materials: "Solid Brass",
    image: "/images/event/gift_3_1789108191526.jpg",
  },

  // WALL DECOR
  {
    id: "wd-01",
    name: "Grand Marigold Floral Backdrop",
    category: "wall-decor",
    price: "Upon Request",
    desc: "A vibrant, large-scale floral backdrop panel featuring thousands of marigolds and roses. Instantly transforms any venue into a festive Indian celebration.",
    materials: "Fresh Marigolds, Red Roses, Green Foliage",
    image: "/images/event/wall_1_1789108208083.jpg",
  },
  {
    id: "wd-02",
    name: "Brass Bell & Faux Flower Toran",
    category: "wall-decor",
    price: 1800,
    desc: "An elegant traditional Indian toran door hanging made of rustic brass bells and vibrant faux flowers. Brings auspicious energy to any entrance.",
    materials: "Brass Bells, Faux Fabric Flowers, Cotton Thread",
    image: "/images/event/wall_2_1789108225816.jpg",
  },
  {
    id: "wd-03",
    name: "Cascading Lotus Floral Chandelier",
    category: "wall-decor",
    price: "Upon Request",
    desc: "A magnificent set of hanging floral chandeliers featuring cascading jasmine strings and suspended pink lotuses. The ultimate luxury event decor piece.",
    materials: "Fresh Jasmine, Pink Lotuses, Gold Hoops",
    image: "/images/event/wall_3_1789108482906.jpg",
  },

  // PROPS
  {
    id: "pr-01",
    name: "Temple-Style Multi-Tier Brass Diya",
    category: "props",
    price: 6500,
    desc: "A large, ornate multi-tier brass diya stand crowned with a traditional peacock motif. A stunning centerpiece that provides beautiful traditional lighting.",
    materials: "Solid Cast Brass",
    image: "/images/event/prop_1_1789108502153.jpg",
  }
];
