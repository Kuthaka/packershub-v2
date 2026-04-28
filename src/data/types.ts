export interface FAQ {
  q: string;
  a: string;
}

export interface Step {
  step: string;
  text: string;
}

export interface ContentSection {
  title: string;
  items: string[];
}

export interface WhyUsSection {
  title: string;
  content: string;
  fact: string;
}

export interface ProcessSection {
  title: string;
  steps: Step[];
}

export interface CTAInfo {
  phone: string;
  whatsapp: string;
  website: string;
}

export interface BaseContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  introduction: string;
  services: ContentSection;
  whyUs: WhyUsSection;
  process: ProcessSection;
  faqs: FAQ[];
  cta: CTAInfo;
}

export interface StateContent extends BaseContent {}

export interface CityContent extends BaseContent {
  cityInfo: {
    name: string;
    district: string;
    population: string;
    landmarks: string[];
  };
  localContext: {
    title: string;
    description: string;
    commonMoves: string[];
    activeAreas: string;
  };
  pricingGuide: {
    title: string;
    factors: string[];
    typicalCosts: {
      local: string;
      longDistance: string;
    };
    note: string;
    vehicleTransport: string;
  };
  areasServed: string;
}
