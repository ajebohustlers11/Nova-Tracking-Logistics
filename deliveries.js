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
      address: "Esplanadapad 52, 3192 VE Hoogvliet, Rotterdam",
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
      origin: "United kingdom",
      destination: "Netherland",
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
      name: "suhaima",
      phone: "+91 8660324267",
      address: "silver cloud pg bannimantap c layout,mysore, karnataka 570015",
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
      comments: "Package awating insurance coverage",
      agentName: "Jason Moore",
      shipmentType: "Air Express"
    },
  },

  {
    trackingCode: "US44556677",
    estimatedDelivery: "Sep 22, 2025 17:00",
    customs: "",
    shipper: {
      name: "Ameliorate",
      phone: "+1 9193442178",
      address: "06-101, WeWork 115 Broadway, New York, NY 10006, USA.",
      email: "amelioratecollaboration@gmail.com"
    },
    receiver: {
      name: "Ritika Gill",
      phone: "+91 7018106747",
      address: " 3 India ( Post graduate government college for girls sector 11 chandigarh 160011 )",
      email: "skindewy218@gmail.com"
    },
    shipment: {
      weight: "5.6kg",
      courier: "NOVA",
      packages: "PR Package",
      mode: "Air",
      product: "Skincare products",
      quantity: 30,
      paymentMode: "Google pay",
      totalFreight: "$160",
      carrier: "Air carrier (Nova445763222)",
      carrierRef: "BA556677",
      departureTime: "11:15",
      origin: "USA",
      destination: "INDIA",
      pickupDate: "23, Sep 2025",
      pickupTime: "10:00",
      status: "Accepted",
      comments: "Item is yet to be dispatched",
      agentName: "William Burkett",
      shipmentType: "Air express"
    },
  },

  {
    trackingCode: "US88997766",
    estimatedDelivery: "Sep 19, 2025 09:00",
    customs: "",
    shipper: {
      name: "Kiehl's",
      phone: "+1 (929) 330-9752",
      address: "435 Hudson Street, 5th Floor, New York, NY 10014, USA",
      email: "kiehlscollaborations@gmail.com"
    },
    receiver: {
      name: " tatiana.t.ugc",
      phone: "+1 2348552505",
      address: "United States of America 
300 Elruth Court, Apt 102, Girard OH, 44420",
      email: "tatiana.t.ugc@gmail.com"
    },
    shipment: {
      weight: "5.6 kg",
      courier: "NOVA",
      packages: "Pr Package",
      mode: "Air",
      product: "Sckincare products",
      quantity: 30,
      paymentMode: "Paypal",
      totalFreight: "$250",
      carrier: "Air carrier (Nova445763222)",
      carrierRef: "AC8899",
      departureTime: "09:00",
      origin: "New York",
      destination: "United States of America 
300 Elruth Court, Apt 102, Girard OH, 44420",
      pickupDate: "21, Sep 2025",
      pickupTime: "10:00",
      status: "Accepted",
      comments: "Awaiting clearane",
      agentName: "Jason Moore",
      shipmentType: "Air Express"
    },
  },

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
      pickupDate: "18, Aug 2025",
      pickupTime: "05:30",
      status: "Custom cleared",
      comments: "In transit",
      agentName: "Hans Müller",
      shipmentType: "Ground"
    },
  },

  {
    trackingCode: "FR11223344",
    estimatedDelivery: "Sep 01, 2025 13:00",
    customs: "Orly Airport, Paris",
    shipper: {
      name: "Paris Couriers",
      phone: "+33 145 678901",
      address: "Boulevard St-Germain, Paris",
      email: "contact@parcouriers.fr"
    },
    receiver: {
      name: "Sarah Johnson",
      phone: "+1 415 223344",
      address: "Market St, San Francisco, USA",
      email: "sarah.j@example.com"
    },
    shipment: {
      weight: "2 kg",
      courier: "Chronopost",
      packages: "Small Box",
      mode: "Air",
      product: "Perfume",
      quantity: 5,
      paymentMode: "Credit Card",
      totalFreight: "€150",
      carrier: "Air France",
      carrierRef: "AF2233",
      departureTime: "08:15",
      origin: "Paris",
      destination: "San Francisco",
      pickupDate: "19, Aug 2025",
      pickupTime: "07:30",
      status: "Order Processing",
      comments: "At warehouse",
      agentName: "Claire Dupont",
      shipmentType: "Air Express"
    },
  },

  {
    trackingCode: "IN77889900",
    estimatedDelivery: "Sep 03, 2025 18:00",
    customs: "Mumbai port",
    shipper: {
      name: "IndiaCargo",
      phone: "+91 22 22334455",
      address: "Marine Lines, Mumbai",
      email: "support@indiacargo.in"
    },
    receiver: {
      name: "David Miller",
      phone: "+61 400 778899",
      address: "George St, Sydney, Australia",
      email: "david.m@example.au"
    },
    shipment: {
      weight: "15 kg",
      courier: "BlueDart",
      packages: "Carton",
      mode: "Sea",
      product: "Textiles",
      quantity: 50,
      paymentMode: "Letter of Credit",
      totalFreight: "$600",
      carrier: "Maersk",
      carrierRef: "MS7788",
      departureTime: "10:45",
      origin: "Mumbai",
      destination: "Sydney",
      pickupDate: "21, Aug 2025",
      pickupTime: "09:30",
      status: "Accepted",
      comments: "Onboard vessel",
      agentName: "Ravi Kumar",
      shipmentType: "Sea Freight"
    },
  },

  {
    trackingCode: "BR00998877",
    estimatedDelivery: "Sep 08, 2025 16:00",
    customs: "Sao Paulo airport",
    shipper: {
      name: "Brasil Express",
      phone: "+55 11 987654321",
      address: "Av Paulista, Sao Paulo",
      email: "contact@br-express.com"
    },
    receiver: {
      name: "Anna Schmidt",
      phone: "+49 176 556677",
      address: "Hauptstrasse, Munich, Germany",
      email: "anna.s@example.de"
    },
    shipment: {
      weight: "9 kg",
      courier: "LATAM Cargo",
      packages: "Box",
      mode: "Air",
      product: "Shoes",
      quantity: 20,
      paymentMode: "Credit Card",
      totalFreight: "$350",
      carrier: "LATAM Airlines",
      carrierRef: "LA8899",
      departureTime: "14:00",
      origin: "Sao Paulo",
      destination: "Munich",
      pickupDate: "23, Aug 2025",
      pickupTime: "08:30",
      status: "Shipment Pending",
      comments: "Scheduled for flight",
      agentName: "Carlos Silva",
      shipmentType: "Air Express"
    },
  },

  {
    trackingCode: "AU66554433",
    estimatedDelivery: "Sep 10, 2025 11:00",
    customs: "Sydney Airport, Cleared",
    shipper: {
      name: "Aussie Couriers",
      phone: "+61 2 99887766",
      address: "George St, Sydney",
      email: "help@aussiecouriers.au"
    },
    receiver: {
      name: "Mark Thompson",
      phone: "+1 917 445566",
      address: "5th Ave, New York, USA",
      email: "mark.t@example.com"
    },
    shipment: {
      weight: "4 kg",
      courier: "Qantas Cargo",
      packages: "Envelope",
      mode: "Air",
      product: "Contracts",
      quantity: 1,
      paymentMode: "Bank Transfer",
      totalFreight: "$100",
      carrier: "Qantas",
      carrierRef: "QF4455",
      departureTime: "12:00",
      origin: "Sydney",
      destination: "New York",
      pickupDate: "24, Aug 2025",
      pickupTime: "07:15",
      status: "Estimated Delivery",
      comments: "Arriving soon",
      agentName: "Olivia White",
      shipmentType: "Air"
    },
  }
];










