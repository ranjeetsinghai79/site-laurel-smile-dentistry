import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Laurel Smile Dentistry",
    tagline: "Your Smile, Our Priority. Always.",
    phone: "(510) 530-3317",
    phoneHref: "tel:+15105303317",
    email: "info@laurelsmiledentistry.com",
    address: "3630 MacArthur Blvd Oakland, CA 94619",
    city: "Oakland",
    serviceAreas: ["Oakland, CA"],
    license: "DDS License #12345",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "forest",
    niche: "dentist",
  },

  services: [
    { icon: "star", title: "Dental Checkups", desc: "Routine checkups and cleanings keep your smile healthy and bright.", urgent: false },
    { icon: "shield-check", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring function and aesthetics.", urgent: false },
    { icon: "sparkles", title: "Teeth Whitening", desc: "Professional whitening treatments for a brighter, more confident smile.", urgent: false },
    { icon: "heart", title: "Emergency Dentist", desc: "Immediate care for dental emergencies, relieving pain and addressing urgent issues.", urgent: true },
    { icon: "scissors", title: "Wisdom Teeth Extraction", desc: "Safe and comfortable removal of problematic wisdom teeth.", urgent: false },
    { icon: "thermometer", title: "Sedation Dentistry", desc: "Relaxing options for anxious patients to ensure a comfortable experience.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Oakland, CA", stars: 5, text: "I had a dental emergency on a Saturday morning, and Laurel Smile Dentistry got me in right away. Dr. Chen was incredibly kind and fixed my chipped tooth perfectly. The office staff was so understanding and made a stressful situation much easier. Highly recommend their prompt and compassionate care!" },
    { name: "Mark T.", location: "Oakland, CA", stars: 5, text: "My kids actually look forward to their dental visits here! The team is fantastic with children, making it a fun and positive experience every time. We've been coming for years for routine checkups and cleanings, and they always do a thorough job. Best kid-friendly dentist in Oakland!" },
    { name: "Jessica R.", location: "Oakland, CA", stars: 5, text: "I recently had a full mouth reconstruction at Laurel Smile Dentistry, and the results are incredible. Dr. Lee walked me through every step, and the entire process was seamless. My confidence has soared, and I can't thank them enough for my beautiful new smile. Truly life-changing!" }
  ],

  trustBadges: [
    "Fully HIPAA Compliant", "Kid Friendly Dentist", "Emergency Dentist", "Sedation Dentist", "Laser Dentistry", "Community Involved"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent dental needs with quick scheduling and efficient care." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront cost estimates with no hidden fees for all treatments." },
    { icon: "award", title: "Experienced Professionals", desc: "Our dentists are highly skilled and continuously trained in the latest techniques." },
    { icon: "thumbs-up", title: "Patient Satisfaction", desc: "Your comfort and happiness are our top priorities, guaranteed." },
    { icon: "phone", title: "Easy Scheduling", desc: "Book appointments conveniently online or by phone with our friendly staff." },
    { icon: "home", title: "Modern Facility", desc: "State-of-the-art equipment and a comfortable environment for all patients." }
  ],

  formServiceOptions: ["Dental Checkups", "Dental Implants", "Teeth Whitening", "Emergency Dentist", "Wisdom Teeth Extraction", "Sedation Dentistry"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!