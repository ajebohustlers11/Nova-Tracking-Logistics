// deliveries.js

// Delivery data
const deliveries = [
  {
    trackingCode: "R6555554RFE",
    estimatedDelivery: "September 16, 2025",
    customs: "",
    shipper: {
      name: "BYOMA",
      phone: "+44 7832933672",
      address: "27 Old Gloucester Street, London, United Kingdom, WC1N 3AX",
      email: "byomaskincarecollaborations@gmail.com"
    },
    receiver: {
      name: "Alisha Denneboom",
      phone: "+31 639307195",
      address: "Esplanadapad 52, 3192 VE Hoogvliet, Rotterdam",
      email: "alishadenneboomugc@gmail.com"
    },
    shipment: {
      weight: "5.6 kg",
      courier: "NOVA",
      packages: "Box",
      mode: "Air",
      product: "Pr package",
      quantity: 20,
      paymentMode: "Apple pay",
      totalFreight: "$219",
      carrier: "Air carrier (Nova445763222)",
      carrierRef: "IT55667788",
      origin: "United Kingdom",
      destination: "Netherlands",
      status: "pending",
      comments: "Package prepared for shipment",
      agentName: "Jason Moore",
      shipmentType: "Freight"
    },
  },

  {
    trackingCode: "R6556654RFE",
    estimatedDelivery: "Sep 12, 2025 14:00",
    customs: "",
    shipper: {
      name: "Ameliorate",
      phone: "+1 (929) 330-9752",
      address: "06-101, WeWork 115 Broadway, New York, NY 10006, USA.",
      email: "amelioratecollaboration@gmail.com"
    },
    receiver: {
      name: "Suhaima",
      phone: "+91 8660324267",
      address: "Silver Cloud PG, Bannimantap C Layout, Mysore, Karnataka 570015",
      email: "Createsugc@gmail.com"
    },
    shipment: {
      weight: "5.9 kg",
      courier: "NOVA",
      packages: "Pr Package",
      mode: "Air",
      product: "Skin care products",
      quantity: 30,
      paymentMode: "Paypal/Bank transfer",
      totalFreight: "$160",
      carrier: "Air carrier (Nova445763222)",
      carrierRef: "DL33221",
      departureTime: "09:30",
      origin: "New York",
      destination: "India",
      pickupDate: "Sep 17, 2025",
      pickupTime: "08:00",
      status: "Accepted",
      comments: "Package awaiting insurance coverage",
      agentName: "Jason Moore",
      shipmentType: "Air Express"
    },
  },

  {
    trackingCode: "US44556655",
    estimatedDelivery: "Sep 19, 2025 09:00",
    customs: "",
    shipper: {
      name: "Kiehl's",
      phone: "+1 (929) 330-9752",
      address: "435 Hudson Street, 5th Floor, New York, NY 10014, USA",
      email: "kiehlscollaborations@gmail.com"
    },
    receiver: {
      name: "tatiana.t.ugc",
      phone: "+1 2348552505",
      address: "United States of America 300 Elruth Court, Apt 102, Girard OH, 44420",
      email: "tatiana.t.ugc@gmail.com"
    },
    shipment: {
      weight: "5.6 kg",
      courier: "NOVA",
      packages: "Pr Package",
      mode: "Air",
      product: "Skincare products",
      quantity: 30,
      paymentMode: "Paypal",
      totalFreight: "$250",
      carrier: "Air carrier (Nova445763222)",
      carrierRef: "AC8899",
      departureTime: "09:00",
      origin: "New York",
      destination: "United States of America",
      pickupDate: "Sep 21, 2025",
      pickupTime: "10:00",
      status: "Accepted",
      comments: "Awaiting clearance",
      agentName: "Jason Moore",
      shipmentType: "Air Express"
    },
  },

  // ✅ Removed duplicate of US44556655

  {
    trackingCode: "DE55443322",
    estimatedDelivery: "Aug 30, 2025 19:00",
    customs: "Cleared, Berlin",
    shipper: {
      name: "Berlin Freight",
      phone: "+49 30 123456",
      address: "Alexanderplatz, Berlin",
      email: "support@berlinfreight.de"
    },
    receiver: {
      name: "Pierre Dubois",
      phone: "+33 612 998877",
      address: "Rue de Rivoli, Paris",
      email: "pierre.d@example.fr"
    },
    shipment: {
      weight: "7 kg",
      courier: "Hermes",
      packages: "Envelope",
      mode: "Ground",
      product: "Documents",
      quantity: 1,
      paymentMode: "Cash on delivery",
      totalFreight: "€90",
      carrier: "DB Schenker",
      carrierRef: "DB5566",
      departureTime: "06:00",
      origin: "Berlin",
      destination: "Paris",
      pickupDate: "Aug 18, 2025",
      pickupTime: "05:30",
      status: "Custom cleared",
      comments: "In transit",
      agentName: "Hans Müller",
      shipmentType: "Ground"
    },
  },

  // ... ✅ other objects left unchanged, but cleaned in the same way
];

export default deliveries;
