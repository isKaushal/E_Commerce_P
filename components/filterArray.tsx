interface dataArrayProps {
  label: string;
  checked: boolean;
  filter: string;
}
[];

const PriceFilters: dataArrayProps[] = [
  {
    filter: "500",
    checked: false,
    label: "Under ₹500",
  },
  {
    filter: "1000",
    checked: false,
    label: "₹500-₹1000",
  },
  {
    filter: "1500",
    checked: false,
    label: "₹1000-₹1500",
  },
  {
    filter: "2000",
    checked: false,
    label: "₹1500-₹2000",
  },
  {
    filter: "5000",
    checked: false,
    label: "₹2000-₹5000",
  },
  {
    filter: "15000",
    checked: false,
    label: "₹10000-₹15000",
  },
  {
    filter: "20000",
    checked: false,
    label: "₹15000-₹20000",
  },
];

const CatagoryFilters: dataArrayProps[] = [
  {
    filter: "apples",
    checked: false,
    label: "Apples",
  },
  {
    filter: "oranges",
    checked: false,
    label: "Oranges",
  },
  {
    filter: "mixfruits",
    checked: false,
    label: "Mix Fruits",
  },
  {
    filter: "papaya",
    checked: false,
    label: "Papaya",
  },
  {
    filter: "watermelon",
    checked: false,
    label: "Water Melon",
  },
  {
    filter: "strawberry",
    checked: false,
    label: "Straw Berry",
  },
  {
    filter: "pineapple",
    checked: false,
    label: "Pine Apple",
  },
];

export { PriceFilters, CatagoryFilters };
