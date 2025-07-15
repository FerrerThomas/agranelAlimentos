import type { Product } from "../types/product"

export const products: { [key: string]: Product[] } = {
  OFERTAS_Y_COMBOS: [
    {
      name: "Grido Frambuesas bañadas en doble chocolate x 120g (blanco y choco con leche)",
      price: 4200,
      isNew: true,
    },
    {
      name: "Combo Tartas Congeladas x 10 Unidades (Verdura, Jamon y queso, Tricolor, Puerro y pollo, Cebolla y queso, Calabaza, Verdura con masa integral, Cebolla y queso con masa integral, Calabaza con masa int, Tricolor con masa int.)",
      price: 38000,
      isNew: true,
    },
    {
      name: "Cápsulas de Café COFFE BREAK (compatibles c/ Nespresso) x 100u. Intermedio",
      price: 53000,
    },
    {
      name: "COMBO ENTRADA PREMIUM - Una burrata Festa + Doy pack Boconccinos Festa x150g",
      price: 7585,
    },
    {
      name: "Combo Pura Fruta: Jugo Pura Frutta de Naranja x 1lt + Frutilla y Mango congelado x 800g",
      price: 8320,
    },
    {
      name: "Combo Triple Festa: 1 Mascarpone x 250g + 1 Queso crema x 320g + 1 queso blanco descremado x 320g",
      price: 5900,
    },
    {
      name: "Promo Manteca: 3 Manteca x 200g c/u",
      price: 9470,
    },
    {
      name: "Combo Hardy: 2 Cremas de Mani Hardy x380 c/u. (a elección entre: natural - vainilla - cookies)",
      price: 6100,
    },
    {
      name: "Combo Integra!: 2 Cajas de barritas a elección x 10 uni c/u",
      price: 21000,
    },
  ],
  BEBIDAS: [
    {
      name: "Sidra UELAUKEN lata / Cipolletti x 473 cc (Pera/Dulce/Demisec)",
      price: 3500,
    },
    {
      name: "Jugo PURA FRUTTA / Cipolletti x 1lt (Manzana Verde / Manzana Roja)",
      price: 3040,
    },
    {
      name: "Jugo PURA FRUTTA / Cipolletti x 1lt (Naranja)",
      price: 3330,
    },
    {
      name: "Jugo PURA FRUTTA / Cipolletti x 1lt (Frutilla&Manzana)",
      price: 3720,
    },
    {
      name: "Jugo PURA FRUTTA / Cipolletti x 1lt (Arandano&Manzana)",
      price: 3720,
    },
    {
      name: "Bebida de Almendra Original VRINK x 1lt",
      price: 4120,
    },
    {
      name: "Bebida de Almendra sin Azucar VRINK x 1lt",
      price: 4120,
    },
    {
      name: "Bebida de Almendra sabor Vainilla VRINK x 1lt",
      price: 4120,
    },
    {
      name: "Bebida de Almendra sabor Chocolate VRINK x 1lt",
      price: 4120,
    },
    {
      name: "Bebida de Quinoa BIBA x 1lt",
      price: 3600,
    },
  ],
  FELICES_LAS_VACAS: [
    {
      name: "Tofu suyana orgánico 350g",
      price: 7160,
      tags: ["vegano"],
    },
    {
      name: '"Big classic" Medallon de Soja x 230g (congelado)',
      price: 2790,
      tags: ["vegano"],
    },
    {
      name: '"Karnevil Party" Medallon x 4 de Arveja x 320g (congelado)',
      price: 4990,
      tags: ["vegano"],
    },
    {
      name: '"Chickenvil" Medallon de Arveja x 4x230g (congelado)',
      price: 6460,
      tags: ["vegano"],
    },
    {
      name: "Jogurti Vainilla x 170g",
      price: 1600,
      tags: ["vegano"],
    },
    {
      name: "Jogurti Frutilla x 170g",
      price: 1810,
      tags: ["vegano"],
    },
    {
      name: "Jogurti Durazno x 170g",
      price: 1810,
      tags: ["vegano"],
    },
    {
      name: "Jogurti Natural x 170g",
      price: 1710,
      tags: ["vegano"],
    },
    {
      name: "Yogurt de Almendras con colchon x 125g con Frutos Rojos",
      price: 1500,
      tags: ["vegano"],
    },
    {
      name: "Yogurt de Almendras con colchon x 125g con Mango Maracuyá",
      price: 1500,
      tags: ["vegano"],
    },
    {
      name: "Queso de Almendras Cremoso x 250g",
      price: 2950,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Queso de Almendras Muzzarella x 250g",
      price: 2850,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Dulce de Almendras estilo Colonial x 250g",
      price: 2550,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Queso de Almendras Cremoso x 500g",
      price: 5650,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Queso de Almendras Mozzarella x 500g",
      price: 5400,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Hummus de Garbanzo x 230g",
      price: 2200,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Untable de Almendra Fantastique Tradicional",
      price: 2500,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Untable de Almendra estilo Cheddar",
      price: 2300,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Untable de Almendra Fantastique Finas Hierbas",
      price: 2610,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Cheddar en fetas x 150g",
      price: 2210,
      tags: ["sin TACC", "vegano"],
    },
  ],
  FRUTOS_SECOS: [
    {
      name: "Almendras Non Pareil",
      prices: { "500g": 11011, "1kg": 20020 },
    },
    {
      name: "Almendras Guara (calibre pequeño)",
      prices: { "500g": 10153, "1kg": 18460 },
    },
    {
      name: "Avellanas",
      prices: { "250g": 6607, "500g": 12012, "1kg": 21840 },
    },
    {
      name: "Castañas de Caju w4 tostadas/ origen. Brasil",
      prices: { "500g": 8437, "1kg": 15340 },
    },
    {
      name: "Coco Rallado Low Fat / origen. Indonesia",
      prices: { "500g": 4070, "1kg": 7400 },
    },
    {
      name: "Maní con cáscara en vaina",
      prices: { "500g": 2530, "1kg": 4600 },
    },
    {
      name: "Maní sin piel",
      prices: { "500g": 2035, "1kg": 3700 },
    },
    {
      name: "Maní sin piel salado",
      prices: { "500g": 2035, "1kg": 3700 },
    },
    {
      name: "Mix de semillas",
      prices: { "250g": 1140, "1kg": 3800 },
    },
    {
      name: "Mix Energía x800g (Bananas, nueces, pasas rubias y negras, mani y almendras)",
      prices: { "800g": 7100 },
    },
    {
      name: "Mix Premium x800g (Castañas, nueces, almendras y avellanas)",
      prices: { "800g": 16900 },
    },
    {
      name: "Nueces Mariposa Extra Light",
      prices: { "500g": 10560, "1kg": 19200 },
    },
    {
      name: "Nueces con cáscara",
      prices: { "500g": 5005, "1kg": 9100 },
    },
    {
      name: "Pistacho salado con cáscara",
      prices: { "250g": 11522, "500g": 20950, "1kg": 38090 },
    },
    {
      name: "Semillas de Amapola",
      prices: { "250g": 3744, "1kg": 12480 },
    },
    {
      name: "Semillas de Chia",
      prices: { "250g": 1596, "1kg": 5320 },
    },
    {
      name: "Semillas de Girasol pelado",
      prices: { "250g": 960, "1kg": 3200 },
    },
    {
      name: "Semillas de Lino",
      prices: { "250g": 720, "1kg": 2400 },
    },
    {
      name: "Semillas de Quinoa blanca x 1kg",
      prices: { "1kg": 7540 },
    },
    {
      name: "Semillas de Quinoa blanca sin saponina x 1kg",
      prices: { "1kg": 7800 },
    },
    {
      name: "Semillas de Quinoa roja / origen. Perú x 1kg",
      prices: { "1kg": 8500 },
    },
    {
      name: "Semillas de Sésamo blanco",
      prices: { "250g": 2100, "1kg": 7000 },
    },
    {
      name: "Semillas de Sésamo integral",
      prices: { "250g": 1050, "1kg": 3500 },
    },
    {
      name: "Semillas de Sésamo negro / origen. Paraguay",
      prices: { "250g": 2250, "1kg": 7500 },
    },
    {
      name: "Semillas de Zapallo premium",
      prices: { "250g": 4050, "1kg": 13500 },
    },
  ],
  FRUTAS_SECAS: [
    {
      name: "Ciruela sin carozo calibre 110-132/ Mendoza",
      prices: { "500g": 4279, "1kg": 7780 },
    },
    {
      name: "Chips de Banana / origen. Filipinas",
      prices: { "500g": 5363, "1kg": 9750 },
    },
    {
      name: "Dátiles / origen. Egipto-Túnez",
      prices: { "500g": 4510, "1kg": 8200 },
    },
    {
      name: "Higo Blanco / Mendoza",
      prices: { "500g": 6820, "1kg": 12400 },
    },
    {
      name: "Higo Negro Elegido / Mendoza",
      prices: { "500g": 5995, "1kg": 10900 },
    },
    {
      name: "Pasas de Arándano / origen. Chile",
      prices: { "500g": 6875, "1kg": 12500 },
    },
    {
      name: "Pasas de Uva Jumbo / Mendoza",
      prices: { "500g": 3795, "1kg": 6900 },
    },
    {
      name: "Pasas de Uva Flame / Mendoza x 1kg",
      prices: { "1kg": 5550 },
    },
    {
      name: "Pasas de Uva Rubia / Mendoza",
      prices: { "500g": 4895, "1kg": 8900 },
    },
  ],
  CEREALES: [
    {
      name: "Almohaditas 2 Salvados LASFOR x 1kg",
      price: 5300,
    },
    {
      name: "Almohaditas 2 Salvados LASFOR x 500g",
      price: 2915,
    },
    {
      name: "Almohaditas Rellenas LASFOR x 1kg (Avellanas / Frutilla / Limón / Maní)",
      price: 7600,
    },
    {
      name: "Almohaditas Rellenas LASFOR x 500g (Avellanas/Frutilla / Limón / Maní)",
      price: 4180,
    },
    {
      name: "Almohaditas Rellenas LASFOR x 1kg (Chocolate blanco / Chocolate negro)",
      price: 7900,
    },
    {
      name: "Almohaditas Rellenas LASFOR x 500g (Chocolate blanco / Chocolate negro)",
      price: 4345,
    },
    {
      name: "Aritos frutales LASFOR x 1kg",
      price: 5800,
    },
    {
      name: "Fibras de Salvado LASFOR x 1kg",
      price: 4800,
    },
    {
      name: "Fibras de Salvado LASFOR x 500g",
      price: 2640,
    },
    {
      name: "Bolitas de Chocolate LASFOR x 1kg",
      price: 6200,
    },
    {
      name: "Bolitas de Chocolate LASFOR x 500g",
      price: 3410,
    },
    {
      name: "Arroz Carnaroli x 500g",
      price: 2400,
    },
    {
      name: "Arroz Basmati x 1kg",
      price: 7100,
    },
    {
      name: "Arroz Fortuna x 1kg",
      price: 3000,
    },
    {
      name: "Arroz Yamaní x 1kg",
      price: 2900,
    },
    {
      name: "Avena Arrollada (fina o gruesa) x 1kg",
      price: 2200,
    },
    {
      name: "Avena Instantánea x 1kg",
      price: 2060,
    },
    {
      name: "Copos de Maíz Azucarados 3 Arroyos x 1kg",
      price: 3900,
    },
    {
      name: "Copos de Maíz s/azucar 3 Arroyos x 1kg",
      price: 3450,
    },
    {
      name: "Maíz inflado - Tutuca - x 200g",
      price: 1100,
    },
    {
      name: "Granola Fit Crunch HOMEMADEGRANOLA x 350 kg (Avena, Castañas de cajú, almendras, miel, coco, semillas de girasol, semillas de zapallo)",
      price: 5750,
    },
    {
      name: "Granola Fit Crunch HOMEMADEGRANOLA x 1kg (Avena, castañas de cajú, almendras, miel, coco, semillas de girasol, semillas de zapallo)",
      price: 13335,
    },
    {
      name: "Granola Cereal Crunch HOMEMADEGRANOLA x 800g (Copos de maíz, jugo de frutas, frutos secos, semillas)",
      price: 11400,
    },
    {
      name: "Granola Original Crunch HOMEMADEGRANOLA x 350 gr (Avena, Castañas de cajú, almendras, nueces, miel, coco, semillas de girasol, semillas de lino)",
      price: 6320,
    },
    {
      name: "Granola Original Crunch HOMEMADEGRANOLA x 1kg (Avena, Castañas de cajú, almendras, nueces, miel, coco, semillas de girasol, semillas de lino)",
      price: 14750,
    },
    {
      name: "Granola Taste Crunch HOMEMADEGRANOLA x 1kg (Avena, almendras, miel, coco, semillas de girasol)",
      price: 12100,
    },
    {
      name: "Granola INTEGRA x 350g Almendra y Arandanos",
      price: 6820,
    },
    {
      name: "Granola INTEGRA x 350g Chocolate",
      price: 6820,
    },
    {
      name: "Granola INTEGRA x 250g Semillas, almendras y arándanos",
      price: 6500,
      tags: ["sin TACC"],
    },
    {
      name: "Granola INTEGRA x 1kg Chocolate",
      price: 16450,
    },
    {
      name: "Granola INTEGRA x 1kg Almendra y Arándanos",
      price: 16450,
    },
    {
      name: "Granolas ARCHIMBOLDO x 1kg (Naturalmente energetica / especial con frutas seleccionadas / natural)",
      price: 8700,
    },
    {
      name: "Garbanzos x 1kg calibre pequeño",
      price: 2500,
    },
    {
      name: "Lentejas x 1kg",
      price: 2700,
    },
    {
      name: "Lentejon x 1kg",
      price: 3820,
    },
    {
      name: "Maiz Blanco x 1kg",
      price: 3100,
    },
    {
      name: "Maíz Pisingallo x 1kg",
      price: 1200,
    },
    {
      name: "Porotos Aduki x 1kg",
      price: 2400,
    },
    {
      name: "Porotos Alubia x 1kg",
      price: 4200,
    },
    {
      name: "Porotos Colorado x 1kg",
      price: 4105,
    },
    {
      name: "Porotos de Soja x 1kg",
      price: 1080,
    },
    {
      name: "Porotos Negros x 1kg",
      price: 2940,
    },
    {
      name: "Porotos Pallares x 1kg",
      price: 7342,
    },
    {
      name: "Quinoa Pop x 200g",
      price: 1600,
    },
    {
      name: "Soja Texturizada x 500g",
      price: 1450,
    },
  ],
  HARINAS: [
    {
      name: "Almidón de Maiz x 1kg",
      price: 1950,
    },
    {
      name: "Cous Cous / Ararat x 500g",
      price: 5470,
    },
    {
      name: "Fécula de Mandioca x 1kg",
      price: 1990,
    },
    {
      name: "Harina de Avena x 1kg",
      price: 1900,
    },
    {
      name: "Harina 000 MOLINO CAMPODÓNICO (especial panes y pizzas) x 1kg",
      price: 1500,
    },
    {
      name: "Harina 000 Orgánica MOLINO CAMPODÓNICO x 1kg",
      price: 2080,
      tags: ["orgánico"],
    },
    {
      name: "Harina 0000 Retail MOLINO CAMPODÓNICO x 1kg",
      price: 1550,
    },
    {
      name: "Harina de Algarroba x 1kg",
      price: 2890,
    },
    {
      name: "Harina de Trigo Sarraceno x 1kg",
      price: 1950,
    },
    {
      name: "Harina de coco x 1kg",
      price: 6700,
    },
    {
      name: "Harina de Almendra con piel Premium 100%",
      prices: { "500g": 16467, "1kg": 24700 },
    },
    {
      name: "Harina de Almendra con piel mezcla",
      prices: { "500g": 4667, "1kg": 7000 },
    },
    {
      name: "Harina de Arroz x 1kg",
      price: 1700,
    },
    {
      name: "Harina de Centeno x 1kg",
      price: 1800,
    },
    {
      name: "Harina de Garbanzo x 1kg",
      price: 1380,
    },
    {
      name: "Harina Integral Graham MOLINO CAMPODÓNICO x 1kg",
      price: 1300,
    },
    {
      name: "Premezcla universal sin tacc DELICEL X 500g",
      price: 3200,
      tags: ["sin TACC"],
    },
  ],
  CONGELADOS: [
    {
      name: "Burganas - Hamburguesas vegetales- paquete x 4u. (460g) Berenjenas Pimenton, Oliva, Mochi, Lentejas",
      price: 4700,
      isNew: true,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Burganas - Hamburguesas vegetales- paquete x 4u. (460g) Brócoli, Mijo, Salvia, Cebolla, Yamaní",
      price: 4700,
      isNew: true,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Burganas - Hamburguesas vegetales- paquete x 4u. (460g) Calabaza, Garbanzos, Jengibre, Cúrcuma, Cebolla",
      price: 4700,
      isNew: true,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Burganas - Hamburguesas vegetales- paquete x 4u. (460g) Cebollas caramelizadas, Tomillo, Bonarda, Alubia",
      price: 4700,
      isNew: true,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "Burganas - Hamburguesas vegetales paquete x 4u. (460g) Espinaca, Arvejas, Yamaní, Pereji, Chía",
      price: 4700,
      isNew: true,
      tags: ["sin TACC", "vegano"],
    },
    {
      name: "NUGGETS de Pollo Crocantes (Pampa Food) - Formitas x 500g Congeladas",
      price: 3900,
      isNew: true,
    },
    {
      name: "PAMPITOS de Pollo (Pampa Food) - Patitas x 500g Congeladas",
      price: 3900,
      isNew: true,
    },
    {
      name: "Baby Carrots x 500g IQF - Mini zanahorias congeladas.",
      price: 5100,
    },
    {
      name: "GRIDO Bocadito Frambuesa -Frambuesas frescas bañadas en Chocolate con Leche + chocolate",
      price: 4200,
      tags: ["sin TACC"],
    },
    {
      name: "Anana en cubos x 1kq",
      price: 12350,
    },
    {
      name: "Arándanos congelados x 1kg",
      price: 8320,
    },
    {
      name: "Frambuesas x 1kg",
      price: 13900,
    },
    {
      name: "Frutillas x 1kg",
      price: 5900,
    },
    {
      name: "Frutillas x 500g",
      price: 3050,
    },
    {
      name: "Mango en rodajas x 1kg",
      price: 9600,
    },
    {
      name: "Mix Frutos Rojos x 1kg (Arándanos, frambuesas y moras)",
      price: 10990,
    },
    {
      name: "Mix Frutos Rojos c/frutillas x 1kg (Arándanos. frambuesas moras v frutillas)",
      price: 9930,
    },
    {
      name: "Pulpa de Acai x 1kg",
      price: 11900,
    },
    {
      name: "Pulpa de Guayaba x 500G",
      price: 6900,
    },
    {
      name: "Pulpa de Mango x 1kg",
      price: 6000,
    },
    {
      name: "Pulpa de Maracuyá c/semillas x 1kg",
      price: 10100,
    },
    {
      name: "Arvejas congeladas x 1kg",
      price: 7210,
    },
    {
      name: "Brócoli congelado x 1kg",
      price: 8100,
    },
    {
      name: "Cebolla Cortada en Cubos congelada x 1kg",
      price: 5390,
    },
    {
      name: "Champignon en rodajas x 1kg",
      price: 8520,
      tags: ["sin TACC"],
    },
    {
      name: "Coliflor congelado x 750g",
      price: 5920,
    },
    {
      name: "Espinaca congelada x 1kg",
      price: 4200,
    },
    {
      name: "Mix para tacos x 1kg (Cubos de pimientos rojos-verdes-amarillos, cubos de cebolla)",
      price: 12450,
      tags: ["sin TACC"],
    },
    {
      name: "Morrón en cubos x 1kg",
      price: 9200,
    },
    {
      name: "Palta en mitades x 500g IQF",
      price: 9100,
    },
    {
      name: "Papa bastón caseras FINCA BALCARCE x 2,5kg (no prefritas)",
      price: 10990,
    },
    {
      name: "Papa cubo FINCA BALCARCE x 2,5kg (no prefritas)",
      price: 11550,
    },
    {
      name: "Papa Gajos con piel FINCA BALCARCE x 750g (no prefritas)",
      price: 3700,
    },
    {
      name: "Puerro congelado x 500g",
      price: 4100,
    },
    {
      name: "Pulpa de palta x 500g",
      price: 9100,
    },
    {
      name: "Kiwi congelado trozado x 1kg",
      price: 9340,
    },
    {
      name: "Wok de Vegetales x 1kg (brócoli, chauchas, morrón, choclo, zanahoria, champignon)",
      price: 6755,
      tags: ["sin TACC"],
    },
    {
      name: "Zapallo en cubos congelado x 1kg",
      price: 3600,
    },
  ],
}
