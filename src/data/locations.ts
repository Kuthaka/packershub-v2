export interface LocationData {
  name: string;
  slug: string;
  type: 'state' | 'city';
  state?: string;
  tagline: string;
  description?: string;
}

export const locations: LocationData[] = [
  // STATES
  { name: "Andhra Pradesh", slug: "packers-movers-andhra-pradesh", type: "state", tagline: "Packers and Movers State Page" },
  { name: "Telangana", slug: "packers-movers-telangana", type: "state", tagline: "Packers and Movers State Page" },
  { name: "Tamil Nadu", slug: "packers-movers-tamil-nadu", type: "state", tagline: "Packers and Movers State Page" },
  { name: "Karnataka", slug: "packers-movers-karnataka", type: "state", tagline: "Packers and Movers State Page" },
  { name: "Kerala", slug: "packers-movers-kerala", type: "state", tagline: "Packers and Movers State Page" },

  // ANDHRA PRADESH CITIES
  { name: "Vijayawada", slug: "packers-movers-vijayawada", type: "city", state: "Andhra Pradesh", tagline: "AP's Commercial Heart" },
  { name: "Visakhapatnam", slug: "packers-movers-visakhapatnam", type: "city", state: "Andhra Pradesh", tagline: "City of Destiny" },
  { name: "Guntur", slug: "packers-movers-guntur", type: "city", state: "Andhra Pradesh", tagline: "Chilli Capital of India" },
  { name: "Nellore", slug: "packers-movers-nellore", type: "city", state: "Andhra Pradesh", tagline: "City of Aquaculture" },
  { name: "Tirupati", slug: "packers-movers-tirupati", type: "city", state: "Andhra Pradesh", tagline: "Spiritual Capital of the World" },
  { name: "Kurnool", slug: "packers-movers-kurnool", type: "city", state: "Andhra Pradesh", tagline: "Judicial Capital of AP" },
  { name: "Rajahmundry", slug: "packers-movers-rajahmundry", type: "city", state: "Andhra Pradesh", tagline: "Cultural Capital of Andhra" },
  { name: "Kakinada", slug: "packers-movers-kakinada", type: "city", state: "Andhra Pradesh", tagline: "Deep Water Port City" },
  { name: "Kadapa", slug: "packers-movers-kadapa", type: "city", state: "Andhra Pradesh", tagline: "Cuddapah Slabs Capital" },
  { name: "Eluru", slug: "packers-movers-eluru", type: "city", state: "Andhra Pradesh", tagline: "Handloom Heritage City" },
  { name: "Ongole", slug: "packers-movers-ongole", type: "city", state: "Andhra Pradesh", tagline: "Ongole Bull Country" },
  { name: "Anantapur", slug: "packers-movers-anantapur", type: "city", state: "Andhra Pradesh", tagline: "Solar Energy Capital" },
  { name: "Vizianagaram", slug: "packers-movers-vizianagaram", type: "city", state: "Andhra Pradesh", tagline: "City of Valour" },
  { name: "Srikakulam", slug: "packers-movers-srikakulam", type: "city", state: "Andhra Pradesh", tagline: "North Andhra Gateway" },
  { name: "Bhimavaram", slug: "packers-movers-bhimavaram", type: "city", state: "Andhra Pradesh", tagline: "Aquaculture Hub of India" },
  { name: "Machilipatnam", slug: "packers-movers-machilipatnam", type: "city", state: "Andhra Pradesh", tagline: "Port Heritage City" },
  { name: "Chittoor", slug: "packers-movers-chittoor", type: "city", state: "Andhra Pradesh", tagline: "Mango City of India" },
  { name: "Proddatur", slug: "packers-movers-proddatur", type: "city", state: "Andhra Pradesh", tagline: "Leather Goods Hub" },
  { name: "Narasaraopet", slug: "packers-movers-narasaraopet", type: "city", state: "Andhra Pradesh", tagline: "Palnadu Gateway" },
  { name: "Tenali", slug: "packers-movers-tenali", type: "city", state: "Andhra Pradesh", tagline: "Cultural City of AP" },

  // TELANGANA CITIES
  { name: "Hyderabad", slug: "packers-movers-hyderabad", type: "city", state: "Telangana", tagline: "City of Pearls & IT" },
  { name: "Warangal", slug: "packers-movers-warangal", type: "city", state: "Telangana", tagline: "City of Warriors" },
  { name: "Nizamabad", slug: "packers-movers-nizamabad", type: "city", state: "Telangana", tagline: "Turmeric Capital of India" },
  { name: "Karimnagar", slug: "packers-movers-karimnagar", type: "city", state: "Telangana", tagline: "Granite City of India" },
  { name: "Khammam", slug: "packers-movers-khammam", type: "city", state: "Telangana", tagline: "Coal & Forests Gateway" },
  { name: "Mahbubnagar", slug: "packers-movers-mahbubnagar", type: "city", state: "Telangana", tagline: "Palamuru Labour Hub" },
  { name: "Nalgonda", slug: "packers-movers-nalgonda", type: "city", state: "Telangana", tagline: "Fluorosis Belt Growth Zone" },
  { name: "Adilabad", slug: "packers-movers-adilabad", type: "city", state: "Telangana", tagline: "Tribal Heritage North TS" },
  { name: "Ramagundam", slug: "packers-movers-ramagundam", type: "city", state: "Telangana", tagline: "Power City of Telangana" },
  { name: "Siddipet", slug: "packers-movers-siddipet", type: "city", state: "Telangana", tagline: "Siddipet Silicon Valley" },
  { name: "Miryalaguda", slug: "packers-movers-miryalaguda", type: "city", state: "Telangana", tagline: "Sugar Town of Telangana" },
  { name: "Suryapet", slug: "packers-movers-suryapet", type: "city", state: "Telangana", tagline: "New District HQ Gateway" },
  { name: "Jagtial", slug: "packers-movers-jagtial", type: "city", state: "Telangana", tagline: "Fertiliser City" },
  { name: "Mancherial", slug: "packers-movers-mancherial", type: "city", state: "Telangana", tagline: "Singareni Coal Gateway" },
  { name: "Bodhan", slug: "packers-movers-bodhan", type: "city", state: "Telangana", tagline: "Sugar & Textile Hub" },

  // TAMIL NADU CITIES
  { name: "Chennai", slug: "packers-movers-chennai", type: "city", state: "Tamil Nadu", tagline: "Detroit of India & IT Hub" },
  { name: "Coimbatore", slug: "packers-movers-coimbatore", type: "city", state: "Tamil Nadu", tagline: "Manchester of South India" },
  { name: "Madurai", slug: "packers-movers-madurai", type: "city", state: "Tamil Nadu", tagline: "Temple City of the South" },
  { name: "Tiruchirappalli", slug: "packers-movers-trichy", type: "city", state: "Tamil Nadu", tagline: "City of Sacred Rock" },
  { name: "Salem", slug: "packers-movers-salem", type: "city", state: "Tamil Nadu", tagline: "Steel City & Mango Hub" },
  { name: "Tirunelveli", slug: "packers-movers-tirunelveli", type: "city", state: "Tamil Nadu", tagline: "Halwa City of Tamil Nadu" },
  { name: "Vellore", slug: "packers-movers-vellore", type: "city", state: "Tamil Nadu", tagline: "Fort City & Medical Hub" },
  { name: "Thoothukudi", slug: "packers-movers-thoothukudi", type: "city", state: "Tamil Nadu", tagline: "Pearl City & Port Hub" },
  { name: "Erode", slug: "packers-movers-erode", type: "city", state: "Tamil Nadu", tagline: "Turmeric & Textile Hub" },
  { name: "Tiruppur", slug: "packers-movers-tiruppur", type: "city", state: "Tamil Nadu", tagline: "Knitwear Capital of the World" },
  { name: "Thanjavur", slug: "packers-movers-thanjavur", type: "city", state: "Tamil Nadu", tagline: "Rice Bowl of Tamil Nadu" },
  { name: "Dindigul", slug: "packers-movers-dindigul", type: "city", state: "Tamil Nadu", tagline: "Lock City of India" },
  { name: "Nagercoil", slug: "packers-movers-nagercoil", type: "city", state: "Tamil Nadu", tagline: "Tip of India's Gateway" },
  { name: "Kumbakonam", slug: "packers-movers-kumbakonam", type: "city", state: "Tamil Nadu", tagline: "City of Temples" },
  { name: "Karur", slug: "packers-movers-karur", type: "city", state: "Tamil Nadu", tagline: "Textile & Bus Body Hub" },
  { name: "Hosur", slug: "packers-movers-hosur", type: "city", state: "Tamil Nadu", tagline: "Industrial Twin of Bengaluru" },
  { name: "Kancheepuram", slug: "packers-movers-kancheepuram", type: "city", state: "Tamil Nadu", tagline: "City of Thousand Temples" },
  { name: "Ooty", slug: "packers-movers-ooty", type: "city", state: "Tamil Nadu", tagline: "Queen of Hill Stations" },
  { name: "Pollachi", slug: "packers-movers-pollachi", type: "city", state: "Tamil Nadu", tagline: "Coconut Capital of India" },
  { name: "Cuddalore", slug: "packers-movers-cuddalore", type: "city", state: "Tamil Nadu", tagline: "Chemical & Petrochem Hub" },

  // KARNATAKA CITIES
  { name: "Bengaluru", slug: "packers-movers-bengaluru", type: "city", state: "Karnataka", tagline: "Silicon Valley of India" },
  { name: "Mysuru", slug: "packers-movers-mysuru", type: "city", state: "Karnataka", tagline: "City of Palaces" },
  { name: "Hubballi", slug: "packers-movers-hubballi", type: "city", state: "Karnataka", tagline: "Commercial Capital of North Karnataka" },
  { name: "Mangaluru", slug: "packers-movers-mangaluru", type: "city", state: "Karnataka", tagline: "Cashew & Coastal Trade Hub" },
  { name: "Belagavi", slug: "packers-movers-belagavi", type: "city", state: "Karnataka", tagline: "Sugar City of Karnataka" },
  { name: "Davanagere", slug: "packers-movers-davangere", type: "city", state: "Karnataka", tagline: "Cotton City of India" },
  { name: "Ballari", slug: "packers-movers-ballari", type: "city", state: "Karnataka", tagline: "Iron Ore Capital of South India" },
  { name: "Shivamogga", slug: "packers-movers-shivamogga", type: "city", state: "Karnataka", tagline: "Gateway to Malnad" },
  { name: "Tumakuru", slug: "packers-movers-tumakuru", type: "city", state: "Karnataka", tagline: "Coconut City of Karnataka" },
  { name: "Raichur", slug: "packers-movers-raichur", type: "city", state: "Karnataka", tagline: "Rice Bowl of Karnataka" },
  { name: "Vijayapura", slug: "packers-movers-vijayapura", type: "city", state: "Karnataka", tagline: "Bijapur Architectural Marvel" },
  { name: "Kalaburagi", slug: "packers-movers-kalaburagi", type: "city", state: "Karnataka", tagline: "Pulses Capital of India" },

  // KERALA CITIES
  { name: "Kochi", slug: "packers-movers-kochi", type: "city", state: "Kerala", tagline: "Queen of Arabian Sea" },
  { name: "Thiruvananthapuram", slug: "packers-movers-thiruvananthapuram", type: "city", state: "Kerala", tagline: "Evergreen Capital City" },
  { name: "Kozhikode", slug: "packers-movers-kozhikode", type: "city", state: "Kerala", tagline: "City of Spices & Startups" },
  { name: "Thrissur", slug: "packers-movers-thrissur", type: "city", state: "Kerala", tagline: "Cultural Capital of Kerala" },
  { name: "Kannur", slug: "packers-movers-kannur", type: "city", state: "Kerala", tagline: "Land of Theyyam & Weavers" },
  { name: "Kollam", slug: "packers-movers-kollam", type: "city", state: "Kerala", tagline: "Cashew Capital of the World" },
  { name: "Palakkad", slug: "packers-movers-palakkad", type: "city", state: "Kerala", tagline: "Gateway to Kerala" },
  { name: "Alappuzha", slug: "packers-movers-alappuzha", type: "city", state: "Kerala", tagline: "Venice of the East" },
];
