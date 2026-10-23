// Indian Motorcycles Database (60+ Models)
const INDIAN_BIKES_DB = [
    // Hero MotoCorp
    { brand: "Hero", model: "Splendor Plus", cc: 97.2, realMileage: 65, araiMileage: 70.0, tank: 9.8, segment: "commuter" },
    { brand: "Hero", model: "HF Deluxe", cc: 97.2, realMileage: 65, araiMileage: 70.0, tank: 9.6, segment: "commuter" },
    { brand: "Hero", model: "Passion Plus", cc: 97.2, realMileage: 60, araiMileage: 68.0, tank: 11.0, segment: "commuter" },
    { brand: "Hero", model: "Glamour 125", cc: 124.7, realMileage: 55, araiMileage: 64.0, tank: 10.0, segment: "commuter" },
    { brand: "Hero", model: "Super Splendor", cc: 124.7, realMileage: 58, araiMileage: 65.0, tank: 12.0, segment: "commuter" },
    { brand: "Hero", model: "Xtreme 125R", cc: 124.7, realMileage: 66, araiMileage: 66.0, tank: 10.0, segment: "commuter" },
    { brand: "Hero", model: "Xtreme 160R 4V", cc: 163.2, realMileage: 48, araiMileage: 55.0, tank: 12.0, segment: "street" },
    { brand: "Hero", model: "Xpulse 200 4V", cc: 199.6, realMileage: 38, araiMileage: 40.0, tank: 13.0, segment: "street" },
    { brand: "Hero", model: "Karizma XMR", cc: 210.0, realMileage: 32, araiMileage: 35.0, tank: 11.0, segment: "cruiser" },
    { brand: "Hero", model: "Mavrick 440", cc: 440.0, realMileage: 30, araiMileage: 33.0, tank: 13.5, segment: "cruiser" },

    // Honda Motorcycle
    { brand: "Honda", model: "Shine 100", cc: 98.9, realMileage: 65, araiMileage: 68.0, tank: 9.0, segment: "commuter" },
    { brand: "Honda", model: "CD 110 Dream", cc: 109.5, realMileage: 65, araiMileage: 65.0, tank: 9.1, segment: "commuter" },
    { brand: "Honda", model: "SP 125", cc: 123.9, realMileage: 65, araiMileage: 68.0, tank: 11.2, segment: "commuter" },
    { brand: "Honda", model: "Shine 125", cc: 123.9, realMileage: 55, araiMileage: 65.0, tank: 10.5, segment: "commuter" },
    { brand: "Honda", model: "Unicorn 160", cc: 162.7, realMileage: 52, araiMileage: 55.0, tank: 13.0, segment: "street" },
    { brand: "Honda", model: "SP 160", cc: 162.7, realMileage: 50, araiMileage: 53.0, tank: 12.0, segment: "street" },
    { brand: "Honda", model: "Hornet 2.0", cc: 184.4, realMileage: 42, araiMileage: 45.0, tank: 12.0, segment: "street" },
    { brand: "Honda", model: "CB200X", cc: 184.4, realMileage: 40, araiMileage: 43.0, tank: 12.0, segment: "street" },
    { brand: "Honda", model: "H'ness CB350", cc: 348.3, realMileage: 36, araiMileage: 42.0, tank: 15.0, segment: "cruiser" },
    { brand: "Honda", model: "CB350RS", cc: 348.3, realMileage: 36, araiMileage: 42.0, tank: 15.0, segment: "cruiser" },
    { brand: "Honda", model: "CB300R", cc: 286.0, realMileage: 30, araiMileage: 32.0, tank: 9.7, segment: "cruiser" },
    { brand: "Honda", model: "Activa 6G (Scooter)", cc: 109.5, realMileage: 48, araiMileage: 50.0, tank: 5.3, segment: "commuter" },

    // Bajaj Auto
    { brand: "Bajaj", model: "Platina 100", cc: 102.0, realMileage: 72, araiMileage: 75.0, tank: 11.0, segment: "commuter" },
    { brand: "Bajaj", model: "Platina 110 ABS", cc: 115.4, realMileage: 70, araiMileage: 72.0, tank: 11.0, segment: "commuter" },
    { brand: "Bajaj", model: "CT 125X", cc: 124.4, realMileage: 60, araiMileage: 65.0, tank: 11.0, segment: "commuter" },
    { brand: "Bajaj", model: "Pulsar 125", cc: 124.4, realMileage: 51, araiMileage: 55.0, tank: 11.5, segment: "commuter" },
    { brand: "Bajaj", model: "Pulsar 150", cc: 149.5, realMileage: 46, araiMileage: 50.0, tank: 15.0, segment: "street" },
    { brand: "Bajaj", model: "Pulsar N160", cc: 164.8, realMileage: 48, araiMileage: 51.0, tank: 14.0, segment: "street" },
    { brand: "Bajaj", model: "Pulsar NS200", cc: 199.5, realMileage: 36, araiMileage: 40.0, tank: 12.0, segment: "street" },
    { brand: "Bajaj", model: "Pulsar N250", cc: 249.0, realMileage: 35, araiMileage: 38.0, tank: 14.0, segment: "cruiser" },
    { brand: "Bajaj", model: "Pulsar NS400Z", cc: 373.0, realMileage: 28, araiMileage: 30.0, tank: 12.0, segment: "cruiser" },
    { brand: "Bajaj", model: "Dominar 400", cc: 373.3, realMileage: 27, araiMileage: 30.0, tank: 13.0, segment: "cruiser" },
    { brand: "Bajaj", model: "Avenger 160 Street", cc: 160.0, realMileage: 45, araiMileage: 48.0, tank: 13.0, segment: "street" },
    { brand: "Bajaj", model: "Avenger Cruise 220", cc: 220.0, realMileage: 38, araiMileage: 40.0, tank: 13.0, segment: "cruiser" },
    { brand: "Bajaj", model: "Freedom 125 (CNG Bike)", cc: 125.0, realMileage: 64, araiMileage: 65.0, tank: 2.0, segment: "commuter" },

    // TVS Motor
    { brand: "TVS", model: "Sport", cc: 109.7, realMileage: 70, araiMileage: 75.0, tank: 10.0, segment: "commuter" },
    { brand: "TVS", model: "Radeon", cc: 109.7, realMileage: 65, araiMileage: 68.0, tank: 10.0, segment: "commuter" },
    { brand: "TVS", model: "Star City Plus", cc: 109.7, realMileage: 68, araiMileage: 70.0, tank: 10.0, segment: "commuter" },
    { brand: "TVS", model: "Raider 125", cc: 124.8, realMileage: 67, araiMileage: 67.0, tank: 10.0, segment: "commuter" },
    { brand: "TVS", model: "Apache RTR 160 2V", cc: 159.7, realMileage: 45, araiMileage: 48.0, tank: 12.0, segment: "street" },
    { brand: "TVS", model: "Apache RTR 160 4V", cc: 159.7, realMileage: 44, araiMileage: 47.0, tank: 12.0, segment: "street" },
    { brand: "TVS", model: "Apache RTR 200 4V", cc: 197.75, realMileage: 38, araiMileage: 40.0, tank: 12.0, segment: "street" },
    { brand: "TVS", model: "Ronin 225", cc: 225.9, realMileage: 40, araiMileage: 42.0, tank: 14.0, segment: "cruiser" },
    { brand: "TVS", model: "Apache RR 310", cc: 312.2, realMileage: 31, araiMileage: 34.0, tank: 11.0, segment: "cruiser" },
    { brand: "TVS", model: "Apache RTR 310", cc: 312.2, realMileage: 30, araiMileage: 33.0, tank: 11.0, segment: "cruiser" },
    { brand: "TVS", model: "Jupiter 110 (Scooter)", cc: 109.7, realMileage: 50, araiMileage: 53.0, tank: 6.0, segment: "commuter" },

    // Royal Enfield
    { brand: "Royal Enfield", model: "Classic 350", cc: 349.0, realMileage: 36, araiMileage: 41.5, tank: 13.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Hunter 350", cc: 349.0, realMileage: 36, araiMileage: 36.2, tank: 13.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Bullet 350 (J-Series)", cc: 349.0, realMileage: 36, araiMileage: 41.5, tank: 13.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Meteor 350", cc: 349.0, realMileage: 35, araiMileage: 41.8, tank: 15.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Himalayan 450", cc: 452.0, realMileage: 30, araiMileage: 30.0, tank: 17.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Guerrilla 450", cc: 452.0, realMileage: 29, araiMileage: 29.5, tank: 11.0, segment: "cruiser" },
    { brand: "Royal Enfield", model: "Interceptor 650", cc: 648.0, realMileage: 23, araiMileage: 25.0, tank: 13.7, segment: "premium" },
    { brand: "Royal Enfield", model: "Continental GT 650", cc: 648.0, realMileage: 22, araiMileage: 25.0, tank: 12.5, segment: "premium" },
    { brand: "Royal Enfield", model: "Super Meteor 650", cc: 648.0, realMileage: 22, araiMileage: 24.0, tank: 15.7, segment: "premium" },
    { brand: "Royal Enfield", model: "Shotgun 650", cc: 648.0, realMileage: 22, araiMileage: 23.5, tank: 13.8, segment: "premium" },

    // Yamaha
    { brand: "Yamaha", model: "FZ-Fi V4", cc: 149.0, realMileage: 46, araiMileage: 50.0, tank: 13.0, segment: "street" },
    { brand: "Yamaha", model: "FZ-S V4", cc: 149.0, realMileage: 46, araiMileage: 50.0, tank: 13.0, segment: "street" },
    { brand: "Yamaha", model: "FZ-X", cc: 149.0, realMileage: 45, araiMileage: 48.0, tank: 10.0, segment: "street" },
    { brand: "Yamaha", model: "MT-15 V2", cc: 155.0, realMileage: 48, araiMileage: 56.8, tank: 10.0, segment: "street" },
    { brand: "Yamaha", model: "YZF R15 V4", cc: 155.0, realMileage: 47, araiMileage: 55.2, tank: 11.0, segment: "street" },
    { brand: "Yamaha", model: "Aerox 155 (Scooter)", cc: 155.0, realMileage: 40, araiMileage: 45.0, tank: 5.5, segment: "street" },
    { brand: "Yamaha", model: "RayZR 125 Hybrid", cc: 125.0, realMileage: 58, araiMileage: 66.0, tank: 5.2, segment: "commuter" },

    // KTM
    { brand: "KTM", model: "Duke 125", cc: 124.7, realMileage: 40, araiMileage: 46.0, tank: 13.4, segment: "street" },
    { brand: "KTM", model: "Duke 200", cc: 199.5, realMileage: 34, araiMileage: 35.0, tank: 13.4, segment: "street" },
    { brand: "KTM", model: "Duke 250", cc: 249.0, realMileage: 31, araiMileage: 32.0, tank: 15.0, segment: "cruiser" },
    { brand: "KTM", model: "Duke 390 (Gen 3)", cc: 398.7, realMileage: 26, araiMileage: 28.0, tank: 15.0, segment: "cruiser" },
    { brand: "KTM", model: "RC 200", cc: 199.5, realMileage: 34, araiMileage: 35.0, tank: 13.7, segment: "street" },
    { brand: "KTM", model: "RC 390", cc: 373.2, realMileage: 25, araiMileage: 27.0, tank: 13.7, segment: "cruiser" },
    { brand: "KTM", model: "390 Adventure", cc: 373.2, realMileage: 26, araiMileage: 28.0, tank: 14.5, segment: "cruiser" },

    // Suzuki
    { brand: "Suzuki", model: "Access 125 (Scooter)", cc: 124.0, realMileage: 48, araiMileage: 52.0, tank: 5.0, segment: "commuter" },
    { brand: "Suzuki", model: "Gixxer 150", cc: 155.0, realMileage: 45, araiMileage: 48.0, tank: 12.0, segment: "street" },
    { brand: "Suzuki", model: "Gixxer 250 / SF 250", cc: 249.0, realMileage: 36, araiMileage: 38.0, tank: 12.0, segment: "cruiser" },
    { brand: "Suzuki", model: "V-Strom SX 250", cc: 249.0, realMileage: 35, araiMileage: 36.0, tank: 12.0, segment: "cruiser" },

    // Triumph
    { brand: "Triumph", model: "Speed 400", cc: 398.15, realMileage: 28, araiMileage: 30.0, tank: 13.0, segment: "cruiser" },
    { brand: "Triumph", model: "Scrambler 400X", cc: 398.15, realMileage: 27, araiMileage: 29.0, tank: 13.0, segment: "cruiser" },

    // Jawa / Yezdi
    { brand: "Jawa", model: "Jawa 350", cc: 334.0, realMileage: 30, araiMileage: 32.0, tank: 13.2, segment: "cruiser" },
    { brand: "Jawa", model: "Jawa 42 FJ", cc: 334.0, realMileage: 32, araiMileage: 34.0, tank: 12.0, segment: "cruiser" },
    { brand: "Jawa", model: "Yezdi Roadster", cc: 334.0, realMileage: 29, araiMileage: 30.0, tank: 12.5, segment: "cruiser" },
    { brand: "Jawa", model: "Yezdi Adventure", cc: 334.0, realMileage: 28, araiMileage: 30.0, tank: 15.5, segment: "cruiser" },

    // Kawasaki
    { brand: "Kawasaki", model: "Ninja 300", cc: 296.0, realMileage: 26, araiMileage: 28.0, tank: 17.0, segment: "cruiser" },
    { brand: "Kawasaki", model: "Ninja 500", cc: 451.0, realMileage: 24, araiMileage: 25.0, tank: 14.0, segment: "cruiser" }
  ];
