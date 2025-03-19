import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { alloy80 } from "../component/data"; // Import data from data.js
// import '../component/ProductDetail.css';
import './tryProductDetails.css';

const products = [
    {
        id: 1,
        image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
        title: "SmithAlloy 80",
        description1: "SmithAlloy 80 wire is an austenitic nickel-chromium alloy (NiCr alloy) designed for use at temperatures up to 1200°C (2190°F). This alloy is characterized by high resistivity, excellent oxidation resistance, and outstanding form stability. It maintains good ductility after use and offers excellent weldability.",
        description2: "SmithAlloy 80 is widely used in electric heating elements for home appliances and industrial furnaces. Typical applications include flat irons, ironing machines, water heaters, plastic molding dies, soldering irons, metal-sheathed tubular elements, and cartridge elements.",
        chemicalComposition: {
            title: "Chemical Composition",
            elements: ["C", "Si", "Mn", "Cr", "Ni", "Fe", "AL", "S", "P", "Trace elements"],
            min: ["-", "1.0", "-", "19.0", ">77", "-", "-", "-", "-", "-"],
            max: ["0.10", "1.7", "1.0", "21.0", "-", "1.0", "0.3", "0.01", "0.02", "-"]
        },
        mechanicalProperties: {
            title: "Mechanical Properties",
            table: [

                { wireSize: "1.0 m", yieldStrength: "420 MPa", tensileStrength: "810 MPa", elongation: "30%", hardness: "180 Hv" },
                { wireSize: "4.0 mm", yieldStrength: "300 MPa", tensileStrength: "725 MPa", elongation: "30%", hardness: "160 Hv" },
                { wireSize: "1.0 mm", yieldStrength: "420 MPa", tensileStrength: "810 MPa", elongation: "30%", hardness: "180 Hv" },
                { wireSize: "4.0 mm", yieldStrength: "300 MPa", tensileStrength: "725 MPa", elongation: "30%", hardness: "160 Hv" }
            ],
            elevatedTemperature: {
                subTitle: "Mechanical Properties at Elevated Temperature",
                table: [
                    { temperature: "900 °C", MPa: "100" }
                ],
                tensile: "Ultimate tensile strength - deformation rate 6.2 x 10-2/min",
            },
            creepStrength: {
                subTitle: "Creep strength - 1% elongation in 1000 h",
                table: [
                    { temperature: "800 °C", MPa: "15" },
                    { temperature: "1000 °C", MPa: "4" }
                ],
            }
        },

        physicalProperties: {
            title: "Physical Properties",
            density: {
                property: "Density g/cm3",
                value: 8.30
            },
            electricalResistivity: {
                property: "Electrical resistivity at 20°C Ω mm2/m",
                value: 1.09
            },
            temperatureFactorOfResistivity: [
                { temperature: 100, ct: 1.01 },
                { temperature: 200, ct: 1.02 },
                { temperature: 300, ct: 1.03 },
                { temperature: 400, ct: 1.04 },
                { temperature: 500, ct: 1.05 },
                { temperature: 600, ct: 1.04 },
                { temperature: 700, ct: 1.04 },
                { temperature: 800, ct: 1.04 },
                { temperature: 900, ct: 1.04 },
                { temperature: 1000, ct: 1.05 },
                { temperature: 1100, ct: 1.06 },
                { temperature: 1200, ct: 1.07 }
            ],
            coefficientOfThermalExpansion: [
                { temperatureRange: "20 - 250", expansion: 14.1 },
                { temperatureRange: "20 - 500", expansion: 14.9 },
                { temperatureRange: "20 - 750", expansion: 16.0 },
                { temperatureRange: "20 - 1000", expansion: 17.2 }
            ],
            thermalConductivity: [
                { temperature: "20°C", value: 15 },
                { temperature: "100°C", value: 15 },
                { temperature: "200°C", value: 15 },
                { temperature: "300°C", value: 15 },
                { temperature: "400°C", value: 17 },
                { temperature: "500°C", value: 19 },
                { temperature: "600°C", value: 21 },
                { temperature: "700°C", value: 22 },
                { temperature: "800°C", value: 24 },
                { temperature: "900°C", value: 26 },
                { temperature: "1000°C", value: 28 },
                { temperature: "1100°C", value: 30 }
            ],
            specificHeatCapacity: [
                { temperature: "20°C", value: 0.46 },
                { temperature: "100°C", value: 0.46 },
                { temperature: "200°C", value: 0.48 },
                { temperature: "300°C", value: 0.50 },
                { temperature: "400°C", value: 0.52 },
                { temperature: "500°C", value: 0.54 },
                { temperature: "600°C", value: 0.56 },
                { temperature: "700°C", value: 0.60 },
                { temperature: "800°C", value: 0.63 },
                { temperature: "900°C", value: 0.65 },
                { temperature: "1000°C", value: 0.67 },
                { temperature: "1100°C", value: 0.70 }
            ],
            otherProperties: {
                meltingPoint: {
                    property: "Melting point (°C)",
                    value: 1400
                },
                maxOperatingTemperature: {
                    property: "Max continuous operating temperature in air (°C)",
                    value: 1200
                },
                magneticProperties: {
                    property: "Magnetic properties",
                    value: "The material is non-magnetic"
                },
                emissivity: {
                    property: "Emissivity - fully oxidized material",
                    value: 0.88
                }
            }
        },
    },
    {
        id: 2,
        title: "SmithAlloy 60",
        description1: "This is an austenitic NiCr alloy used at element temperatures up to 1150°C. It has excellent hot strength, good oxidation properties, very good formability, and good corrosion resistance except in sulphur-containing atmospheres and certain controlled atmospheres. It is used in heating elements in metal sheathed tubular elements like hot plates, ovens, grills, toasters, and storage heaters. It is also used in suspended coils in air heaters for cloth dryers, fan heaters, and hair dryers, as well as in industrial furnaces.",
        chemicalComposition: {
            title: "Chemical Composition",
            elements: ["C", "Si", "Mn", "Cr", "Ni", "Fe", "AL", "S", "P", "Trace elements"],
            min: ["-", "1.0", "-", "14.0", "57.0", "-", "-", "-", "-", "-"],
            max: ["0.10", "1.7", "1.0", "18.0", "60.0", "-", "0.3", "0.01", "0.02", "-"]
        },

        mechanicalProperties: {
            title: "Mechanical Properties",
            table: [
                { wireSize: "Ø", yieldStrength: "Rp0.2", tensileStrength: "Rm", elongation: "A", hardness: "-" },
                { wireSize: "mm", yieldStrength: "MPa", tensileStrength: "MPa", elongation: "%", hardness: "Hv" },
                { wireSize: "1.0", yieldStrength: 370, tensileStrength: 730, elongation: 35, hardness: 180 },
                { wireSize: "4.0", yieldStrength: 300, tensileStrength: 700, elongation: 30, hardness: 160 }
            ],
            elevatedTemperature: {
                subTitle: "Mechanical Properties at Elevated Temperature",
                table: [
                    { temperature: "900 °C", MPa: "100" }
                ],
                tensile: "Ultimate tensile strength - deformation rate 6.2 x 10-2/min",
            },
            creepStrength: {
                subTitle: "Creep strength - 1% elongation in 1000 h",
                table: [
                    { temperature: "800 °C", MPa: "15" },
                    { temperature: "1000 °C", MPa: "4" }
                ],
            }

        },

        physicalProperties: {
            title: "Physical Properties",
            density: {
                property: "Density g/cm3",
                value: 8.20
            },
            electricalResistivity: {
                property: "Electrical resistivity at 20°C Ω mm²/m",
                value: 1.11
            },

            temperatureFactorOfResistivity: [
                { temperature: "100°C", ct: 1.02 },
                { temperature: "200°C", ct: 1.04 },
                { temperature: "300°C", ct: 1.05 },
                { temperature: "400°C", ct: 1.06 },
                { temperature: "500°C", ct: 1.08 },
                { temperature: "600°C", ct: 1.09 },
                { temperature: "700°C", ct: 1.09 },
                { temperature: "800°C", ct: 1.10 },
                { temperature: "900°C", ct: 1.10 },
                { temperature: "1000°C", ct: 1.11 },
                { temperature: "1100°C", ct: 1.12 },
                { temperature: "1200°C", ct: 1.13 }
            ],
            coefficientOfThermalExpansion: [
                { temperatureRange: "20 - 250°C", expansion: 14 },
                { temperatureRange: "20 - 500°C", expansion: 15 },
                { temperatureRange: "20 - 750°C", expansion: 16 },
                { temperatureRange: "20 - 1000°C", expansion: 17 }
            ],
            thermalConductivity: [
                { temperature: "20°C", value: 13 },
                { temperature: "100°C", value: 13 },
                { temperature: "200°C", value: 14 },
                { temperature: "300°C", value: 16 },
                { temperature: "400°C", value: 17 },
                { temperature: "500°C", value: 19 },
                { temperature: "600°C", value: 20 },
                { temperature: "700°C", value: 22 },
                { temperature: "800°C", value: 24 },
                { temperature: "900°C", value: 25 },
                { temperature: "1000°C", value: 25 },
                { temperature: "1100°C", value: 29 }
            ],
            specificHeatCapacity: [
                { temperature: "20°C", value: 0.46 },
                { temperature: "100°C", value: 0.46 },
                { temperature: "200°C", value: 0.48 },
                { temperature: "300°C", value: 0.50 },
                { temperature: "400°C", value: 0.53 },
                { temperature: "500°C", value: 0.55 },
                { temperature: "600°C", value: 0.58 },
                { temperature: "700°C", value: 0.60 },
                { temperature: "800°C", value: 0.63 },
                { temperature: "900°C", value: 0.66 },
                { temperature: "1000°C", value: 0.68 },
                { temperature: "1100°C", value: 0.71 }
            ],
            otherProperties: {
                meltingPoint: {
                    property: "Melting point (°C)",
                    value: 1390
                },
                maxOperatingTemperature: {
                    property: "Max continuous operating temperature in air (°C)",
                    value: 1150
                },
                magneticProperties: {
                    property: "Magnetic properties",
                    value: "The material is slightly magnetic"
                },
                emissivity: {
                    property: "Emissivity - fully oxidized material",
                    value: 0.88
                }
            }
        },

    },
    {
        id: 3,
        title: "SmithAlloy 255A",
        description1: "This is a high-temperature FeCrAl alloy for element temperatures up to 1300°C. It is especially recommended where excellent oxidation and life properties with good stability are required. It is used in heating elements in industrial furnaces, domestic, and kitchen appliances industry. Typical applications include open coil mica elements in toasters, hair dryers, and zig-zag ribbon-shaped heating elements in forced air heaters like hot air guns, fan heaters, and dryer heaters.",
        classification: {
            subTitle: "Classification & Property of Smith Alloy Resistance Heating Alloy",
            properties: [
                { property: "Nominal Composition %", value: "-" },
                { property: "Cr (%)", value: "24.0-26.0" },
                { property: "Al (%)", value: "4.0-6.5" },
                { property: "Fe", value: "Rest" },
                { property: "Ni-", value: "-" },
                { property: "Maximum Continuous Operating Temp (°C)", value: "1300" },
                { property: "Melting Point (°C)", value: "1500" },
                { property: "Resistivity at 20°C (Ωmm²/m)", value: "1.42 ± 0.08" },
                { property: "Density (g/cm³)", value: "7.10" },
                { property: "Elongation (%)", value: ">12" },
                { property: "Coefficient of Linear Expansion (ax10⁻⁶/°C)", value: "16.0" },
                { property: "Thermal Conductivity (KJ/m.h°C)", value: "46.1" },
                { property: "Tensile Strength (MPa)", value: "630-780" },
                { property: "Magnetic Properties", value: "Magnetic" },
                { property: "Micrographic Structure", value: "Ferrite" }
            ]
        },

        temperatureResistanceFactor: {
            title: "Temperature Resistance Factor Smith Alloy 255A",
            properties: [
                { temperature: "20°C", value: "1.000" },
                { temperature: "100°C", value: "1.002" },
                { temperature: "200°C", value: "1.005" },
                { temperature: "300°C", value: "1.008" },
                { temperature: "400°C", value: "1.013" },
                { temperature: "500°C", value: "1.021" },
                { temperature: "600°C", value: "1.030" },
                { temperature: "700°C", value: "1.038" },
                { temperature: "800°C", value: "1.040" },
                { temperature: "900°C", value: "1.042" },
                { temperature: "1000°C", value: "1.044" },
                { temperature: "1100°C", value: "1.046" },
                { temperature: "1200°C", value: "1.047" },
                { temperature: "1300°C", value: "1.050" }
            ]

        },

        smithAlloy255A: {
            subTitle: "SmithAlloy 255A",
            properties: [
                { wireSize: 7, diameter: 4.470, surfaceArea: 140.4, resistance: 0.090, cm2PerOhm: 1552.4, weight: 111.4 },
                { wireSize: 8, diameter: 4.064, surfaceArea: 127.7, resistance: 0.109, cm2PerOhm: 1166.3, weight: 92.10 },
                { wireSize: 9, diameter: 3.658, surfaceArea: 114.9, resistance: 0.135, cm2PerOhm: 850.2, weight: 74.60 },
                { wireSize: 10, diameter: 3.251, surfaceArea: 102.1, resistance: 0.171, cm2PerOhm: 597.2, weight: 58.94 },
                { wireSize: 11, diameter: 2.946, surfaceArea: 92.56, resistance: 0.208, cm2PerOhm: 444.5, weight: 48.41 },
                { wireSize: 12, diameter: 2.642, surfaceArea: 82.99, resistance: 0.259, cm2PerOhm: 320.3, weight: 38.91 },
                { wireSize: 13, diameter: 2.337, surfaceArea: 73.41, resistance: 0.331, cm2PerOhm: 221.7, weight: 30.45 },
                { wireSize: 14, diameter: 2.032, surfaceArea: 63.84, resistance: 0.438, cm2PerOhm: 145.8, weight: 23.02 },
                { wireSize: 15, diameter: 1.829, surfaceArea: 57.45, resistance: 0.541, cm2PerOhm: 106.3, weight: 18.65 },
                { wireSize: 16, diameter: 1.626, surfaceArea: 51.07, resistance: 0.684, cm2PerOhm: 74.64, weight: 14.74 },
                { wireSize: 17, diameter: 1.422, surfaceArea: 44.69, resistance: 0.894, cm2PerOhm: 50.01, weight: 11.28 },
                { wireSize: 18, diameter: 1.219, surfaceArea: 38.30, resistance: 1.216, cm2PerOhm: 31.49, weight: 8.289 },
                { wireSize: 19, diameter: 1.016, surfaceArea: 31.92, resistance: 1.751, cm2PerOhm: 18.22, weight: 5.756 },
                { wireSize: 20, diameter: 0.914, surfaceArea: 28.73, resistance: 2.162, cm2PerOhm: 13.29, weight: 4.663 },
                { wireSize: 21, diameter: 0.813, surfaceArea: 25.53, resistance: 2.737, cm2PerOhm: 9.330, weight: 3.574 },
                { wireSize: 22, diameter: 0.711, surfaceArea: 22.34, resistance: 3.684, cm2PerOhm: 6.251, weight: 2.821 },
                { wireSize: 23, diameter: 0.610, surfaceArea: 19.15, resistance: 4.865, cm2PerOhm: 3.936, weight: 2.072 },
                { wireSize: 24, diameter: 0.559, surfaceArea: 17.56, resistance: 5.790, cm2PerOhm: 3.032, weight: 1.741 },
                { wireSize: 25, diameter: 0.508, surfaceArea: 15.96, resistance: 7.006, cm2PerOhm: 2.278, weight: 1.439 },
                { wireSize: 26, diameter: 0.457, surfaceArea: 14.36, resistance: 8.649, cm2PerOhm: 1.661, weight: 1.166 },
                { wireSize: 27, diameter: 0.417, surfaceArea: 13.09, resistance: 10.42, cm2PerOhm: 1.256, weight: 0.968 },
                { wireSize: 28, diameter: 0.376, surfaceArea: 11.81, resistance: 12.79, cm2PerOhm: 0.923, weight: 0.788 },
                { wireSize: 29, diameter: 0.345, surfaceArea: 10.85, resistance: 15.15, cm2PerOhm: 0.716, weight: 0.665 },
                { wireSize: 30, diameter: 0.315, surfaceArea: 9.895, resistance: 18.23, cm2PerOhm: 0.543, weight: 0.553 },
                { wireSize: 31, diameter: 0.295, surfaceArea: 9.256, resistance: 20.83, cm2PerOhm: 0.444, weight: 0.484 },
                { wireSize: 32, diameter: 0.274, surfaceArea: 8.618, resistance: 24.03, cm2PerOhm: 0.359, weight: 0.420 },
                { wireSize: 33, diameter: 0.254, surfaceArea: 7.980, resistance: 28.02, cm2PerOhm: 0.285, weight: 0.360 },
                { wireSize: 34, diameter: 0.234, surfaceArea: 7.341, resistance: 33.11, cm2PerOhm: 0.222, weight: 0.305 },
                { wireSize: 35, diameter: 0.213, surfaceArea: 6.703, resistance: 39.72, cm2PerOhm: 0.169, weight: 0.254 },
                { wireSize: 36, diameter: 0.193, surfaceArea: 6.065, resistance: 48.52, cm2PerOhm: 0.125, weight: 0.208 },
                { wireSize: 37, diameter: 0.173, surfaceArea: 5.426, resistance: 60.61, cm2PerOhm: 0.090, weight: 0.166 },
                { wireSize: 38, diameter: 0.152, surfaceArea: 4.788, resistance: 77.84, cm2PerOhm: 0.062, weight: 0.130 },
                { wireSize: 39, diameter: 0.132, surfaceArea: 4.149, resistance: 103.6, cm2PerOhm: 0.040, weight: 0.097 },
                { wireSize: 40, diameter: 0.122, surfaceArea: 3.830, resistance: 121.6, cm2PerOhm: 0.031, weight: 0.083 },
                { wireSize: 41, diameter: 0.112, surfaceArea: 3.511, resistance: 144.8, cm2PerOhm: 0.024, weight: 0.070 },
                { wireSize: 42, diameter: 0.102, surfaceArea: 3.192, resistance: 175.1, cm2PerOhm: 0.018, weight: 0.058 }
            ]
        },
    },

    {
        id: 4,
        title: "SmithAlloy 214R",
        description1: "This is a FeCrAl alloy which is recommended for use at temperatures up to 1100°C. It has good life performance and low cost. The typical application of this alloy is in heating elements for domestic appliances.",

        classification: {
            subTitle: "Classification & Property of Smith Alloy Resistance Heating Alloy",
            properties: [
                { classification: "Nominal Composition %", value: "-" },
                { classification: "Cr-", value: "19.0 - 21.0" },
                { classification: "Al-", value: "3.0 - 4.5" },
                { classification: "Fe-", value: "Rest" },
                { classification: "Ni-", value: "-" },
                { classification: "Max Continuous Operating Temp (°C)", value: "1100" },
                { classification: "Melting Point (°C)", value: "1500" },
                { classification: "Resistivity at 20°C (Ωmm²/m)", value: "1.23 ± 0.06" },
                { classification: "Density (g/cm³)", value: "7.35" },
                { classification: "Elongation %", value: ">12" },
                { classification: "Coefficient of Linear Expansion (ax10⁻⁶/°C)", value: "13.5" },
                { classification: "Thermal Conductivity (KJ/m.h°C)", value: "46.9" },
                { classification: "Tensile Strength (MPa)", value: "600 - 700" },
                { classification: "Magnetic Properties", value: "Magnetic" },
                { classification: "Micrographic Structure", value: "Ferrite" }
            ]
        },

        temperatureResistanceFactor: {
            title: "Temperature Resistance Factor Smith Alloy 255A",
            properties: [
                { temperature: "20°C", value: 1.000 },
                { temperature: "100°C", value: 1.011 },
                { temperature: "200°C", value: 1.025 },
                { temperature: "300°C", value: 1.042 },
                { temperature: "400°C", value: 1.061 },
                { temperature: "500°C", value: 1.085 },
                { temperature: "600°C", value: 1.120 },
                { temperature: "700°C", value: 1.142 },
                { temperature: "800°C", value: 1.154 },
                { temperature: "900°C", value: 1.172 },
                { temperature: "1000°C", value: 1.180 },
                { temperature: "1100°C", value: 1.186 },
                { temperature: "1200°C", value: "-" },
                { temperature: "1300°C", value: "-" }
            ]
        },

        smithAlloy214R: {
            subTitle: "SmithAlloy 214R",
            properties: [
                { wireSize: 7, diameter: 4.470, surfaceArea: 140.4, resistance: 0.078, cm2PerOhm: 1792.2, weight: 115.3 },
                { wireSize: 8, diameter: 4.064, surfaceArea: 127.7, resistance: 0.095, cm2PerOhm: 1346.5, weight: 95.34 },
                { wireSize: 9, diameter: 3.658, surfaceArea: 114.9, resistance: 0.117, cm2PerOhm: 981.6, weight: 77.22 },
                { wireSize: 10, diameter: 3.251, surfaceArea: 102.1, resistance: 0.148, cm2PerOhm: 689.4, weight: 61.01 },
                { wireSize: 11, diameter: 2.946, surfaceArea: 92.56, resistance: 0.180, cm2PerOhm: 513.1, weight: 50.11 },
                { wireSize: 12, diameter: 2.642, surfaceArea: 82.99, resistance: 0.224, cm2PerOhm: 369.8, weight: 40.28 },
                { wireSize: 13, diameter: 2.337, surfaceArea: 73.41, resistance: 0.287, cm2PerOhm: 256.0, weight: 31.52 },
                { wireSize: 14, diameter: 2.032, surfaceArea: 63.84, resistance: 0.379, cm2PerOhm: 168.3, weight: 23.83 },
                { wireSize: 15, diameter: 1.829, surfaceArea: 57.45, resistance: 0.468, cm2PerOhm: 122.7, weight: 19.30 },
                { wireSize: 16, diameter: 1.626, surfaceArea: 51.07, resistance: 0.593, cm2PerOhm: 86.17, weight: 15.25 },
                { wireSize: 17, diameter: 1.422, surfaceArea: 44.69, resistance: 0.774, cm2PerOhm: 57.73, weight: 11.67 },
                { wireSize: 18, diameter: 1.219, surfaceArea: 38.30, resistance: 1.054, cm2PerOhm: 36.35, weight: 8.581 },
                { wireSize: 19, diameter: 1.016, surfaceArea: 31.92, resistance: 1.517, cm2PerOhm: 21.04, weight: 5.959 },
                { wireSize: 20, diameter: 0.914, surfaceArea: 28.73, resistance: 1.873, cm2PerOhm: 15.34, weight: 4.827 },
                { wireSize: 21, diameter: 0.813, surfaceArea: 25.53, resistance: 2.371, cm2PerOhm: 10.77, weight: 3.814 },
                { wireSize: 22, diameter: 0.711, surfaceArea: 22.34, resistance: 3.096, cm2PerOhm: 7.216, weight: 2.920 },
                { wireSize: 23, diameter: 0.610, surfaceArea: 19.15, resistance: 4.214, cm2PerOhm: 4.544, weight: 2.145 },
                { wireSize: 24, diameter: 0.559, surfaceArea: 17.56, resistance: 5.015, cm2PerOhm: 3.500, weight: 1.803 },
                { wireSize: 25, diameter: 0.508, surfaceArea: 15.96, resistance: 6.069, cm2PerOhm: 2.630, weight: 1.490 },
                { wireSize: 26, diameter: 0.457, surfaceArea: 14.36, resistance: 7.492, cm2PerOhm: 1.917, weight: 1.207 },
                { wireSize: 27, diameter: 0.417, surfaceArea: 13.09, resistance: 9.025, cm2PerOhm: 1.450, weight: 1.002 },
                { wireSize: 28, diameter: 0.376, surfaceArea: 11.81, resistance: 11.08, cm2PerOhm: 1.066, weight: 0.816 },
                { wireSize: 29, diameter: 0.345, surfaceArea: 10.85, resistance: 13.12, cm2PerOhm: 0.827, weight: 0.689 },
                { wireSize: 30, diameter: 0.315, surfaceArea: 9.895, resistance: 15.79, cm2PerOhm: 0.627, weight: 0.573 },
                { wireSize: 31, diameter: 0.295, surfaceArea: 9.256, resistance: 18.04, cm2PerOhm: 0.513, weight: 0.501 },
                { wireSize: 32, diameter: 0.274, surfaceArea: 8.618, resistance: 20.81, cm2PerOhm: 0.414, weight: 0.434 },
                { wireSize: 33, diameter: 0.254, surfaceArea: 7.980, resistance: 24.27, cm2PerOhm: 0.329, weight: 0.372 },
                { wireSize: 34, diameter: 0.234, surfaceArea: 7.341, resistance: 28.68, cm2PerOhm: 0.256, weight: 0.315 },
                { wireSize: 35, diameter: 0.213, surfaceArea: 6.703, resistance: 34.40, cm2PerOhm: 0.195, weight: 0.263 },
                { wireSize: 36, diameter: 0.193, surfaceArea: 6.065, resistance: 42.03, cm2PerOhm: 0.144, weight: 0.215 },
                { wireSize: 37, diameter: 0.173, surfaceArea: 5.426, resistance: 52.50, cm2PerOhm: 0.103, weight: 0.172 },
                { wireSize: 38, diameter: 0.152, surfaceArea: 4.788, resistance: 67.43, cm2PerOhm: 0.071, weight: 0.134 },
                { wireSize: 39, diameter: 0.132, surfaceArea: 4.149, resistance: 89.77, cm2PerOhm: 0.046, weight: 0.101 },
                { wireSize: 40, diameter: 0.122, surfaceArea: 3.830, resistance: 105.36, cm2PerOhm: 0.036, weight: 0.086 },
                { wireSize: 41, diameter: 0.112, surfaceArea: 3.511, resistance: 125.38, cm2PerOhm: 0.028, weight: 0.072 },
                { wireSize: 42, diameter: 0.102, surfaceArea: 3.192, resistance: 151.71, cm2PerOhm: 0.021, weight: 0.060 }
            ]
        },
    },

    {
        id: 5,
        title: "SmithAlloy 235D",
        description1: "This is a FeCrAl alloy which is used at element temperature up to 1200°C. It is used in domestic heating appliances as well as in industrial applications. Typical applications of this alloy include metal sheathed tubular heaters, quartz tube heaters, mica heating elements, and spiral heaters for stove and air heating.",
        classification: {
            subTitle: "Classification & Property of Smith Alloy Resistance Heating Alloy",
            properties: [
                { classification: "Nominal Composition %", value: "-" },
                { classification: "Cr (%)", value: "22.0-24.0" },
                { classification: "Al (%)", value: "4.0-5.5" },
                { classification: "Fe", value: "Rest" },
                { classification: "Ni-", value: "-" },
                { classification: "Maximum Continuous Operating Temp (°C)", value: "1200" },
                { classification: "Melting Point (°C)", value: "1500" },
                { classification: "Resistivity at 20°C (Ωmm²/m)", value: "1.35 ± 0.08" },
                { classification: "Density (g/cm³)", value: "7.25" },
                { classification: "Elongation (%)", value: ">12" },
                { classification: "Coefficient of Linear Expansion (ax10⁻⁶/°C)", value: "14.7" },
                { classification: "Thermal Conductivity (KJ/m.h°C)", value: "60.2" },
                { classification: "Tensile Strength (MPa)", value: "630-780" },
                { classification: "Magnetic Properties", value: "Magnetic" },
                { classification: "Micrographic Structure", value: "Ferrite" }
            ]
        },

        temperatureResistanceFactor: {
            title: "Temperature Resistance Factor Smith Alloy 235D",
            properties: [
                { temperature: "20°C", value: "1.000" },
                { temperature: "100°C", value: 1.002 },
                { temperature: "200°C", value: 1.007 },
                { temperature: "300°C", value: 1.014 },
                { temperature: "400°C", value: 1.024 },
                { temperature: "500°C", value: 1.036 },
                { temperature: "600°C", value: 1.056 },
                { temperature: "700°C", value: 1.064 },
                { temperature: "800°C", value: 1.070 },
                { temperature: "900°C", value: 1.074 },
                { temperature: "1000°C", value: 1.078 },
                { temperature: "1100°C", value: 1.081 },
                { temperature: "1200°C", value: 1.084 },
                { temperature: "1300°C", value: "-" }
            ]
        },

        smithAlloy235D: {
            subTitle: "SmithAlloy 235D",
            properties: [
                { wireSize: 7, diameter: 4.470, surfaceArea: 140.4, resistance: 0.086, cm2PerOhm: 1632.9, weight: 113.8 },
                { wireSize: 8, diameter: 4.064, surfaceArea: 127.7, resistance: 0.104, cm2PerOhm: 1226.8, weight: 94.05 },
                { wireSize: 9, diameter: 3.658, surfaceArea: 114.9, resistance: 0.128, cm2PerOhm: 894.3, weight: 76.18 },
                { wireSize: 10, diameter: 3.251, surfaceArea: 102.1, resistance: 0.163, cm2PerOhm: 628.1, weight: 60.19 },
                { wireSize: 11, diameter: 2.946, surfaceArea: 92.56, resistance: 0.198, cm2PerOhm: 467.5, weight: 49.43 },
                { wireSize: 12, diameter: 2.642, surfaceArea: 82.99, resistance: 0.246, cm2PerOhm: 336.9, weight: 39.73 },
                { wireSize: 13, diameter: 2.337, surfaceArea: 73.41, resistance: 0.315, cm2PerOhm: 233.2, weight: 31.09 },
                { wireSize: 14, diameter: 2.032, surfaceArea: 63.84, resistance: 0.416, cm2PerOhm: 153.3, weight: 23.51 },
                { wireSize: 15, diameter: 1.829, surfaceArea: 57.45, resistance: 0.514, cm2PerOhm: 111.8, weight: 19.04 },
                { wireSize: 16, diameter: 1.626, surfaceArea: 51.07, resistance: 0.650, cm2PerOhm: 78.51, weight: 15.05 },
                { wireSize: 17, diameter: 1.422, surfaceArea: 44.69, resistance: 0.850, cm2PerOhm: 52.60, weight: 11.52 },
                { wireSize: 18, diameter: 1.219, surfaceArea: 38.30, resistance: 1.156, cm2PerOhm: 33.12, weight: 8.464 },
                { wireSize: 19, diameter: 1.016, surfaceArea: 31.92, resistance: 1.665, cm2PerOhm: 19.17, weight: 5.878 },
                { wireSize: 20, diameter: 0.914, surfaceArea: 28.73, resistance: 2.056, cm2PerOhm: 13.97, weight: 4.761 },
                { wireSize: 21, diameter: 0.813, surfaceArea: 25.53, resistance: 2.602, cm2PerOhm: 9.814, weight: 3.762 },
                { wireSize: 22, diameter: 0.711, surfaceArea: 22.34, resistance: 3.398, cm2PerOhm: 6.575, weight: 2.880 },
                { wireSize: 23, diameter: 0.610, surfaceArea: 19.15, resistance: 4.625, cm2PerOhm: 4.140, weight: 2.116 },
                { wireSize: 24, diameter: 0.559, surfaceArea: 17.56, resistance: 5.505, cm2PerOhm: 3.189, weight: 1.778 },
                { wireSize: 25, diameter: 0.508, surfaceArea: 15.96, resistance: 6.661, cm2PerOhm: 2.396, weight: 1.469 },
                { wireSize: 26, diameter: 0.457, surfaceArea: 14.36, resistance: 8.223, cm2PerOhm: 1.747, weight: 1.190 },
                { wireSize: 27, diameter: 0.417, surfaceArea: 13.09, resistance: 9.906, cm2PerOhm: 1.321, weight: 0.988 },
                { wireSize: 28, diameter: 0.376, surfaceArea: 11.81, resistance: 12.16, cm2PerOhm: 0.971, weight: 0.805 },
                { wireSize: 29, diameter: 0.345, surfaceArea: 10.85, resistance: 14.40, cm2PerOhm: 0.753, weight: 0.679 },
                { wireSize: 30, diameter: 0.315, surfaceArea: 9.895, resistance: 17.33, cm2PerOhm: 0.571, weight: 0.565 },
                { wireSize: 31, diameter: 0.295, surfaceArea: 9.256, resistance: 19.80, cm2PerOhm: 0.468, weight: 0.494 },
                { wireSize: 32, diameter: 0.274, surfaceArea: 8.618, resistance: 22.84, cm2PerOhm: 0.377, weight: 0.428 },
                { wireSize: 33, diameter: 0.254, surfaceArea: 7.980, resistance: 26.64, cm2PerOhm: 0.300, weight: 0.367 },
                { wireSize: 34, diameter: 0.234, surfaceArea: 7.341, resistance: 31.48, cm2PerOhm: 0.233, weight: 0.311 },
                { wireSize: 35, diameter: 0.213, surfaceArea: 6.703, resistance: 37.76, cm2PerOhm: 0.178, weight: 0.259 },
                { wireSize: 36, diameter: 0.193, surfaceArea: 6.065, resistance: 46.13, cm2PerOhm: 0.131, weight: 0.212 },
                { wireSize: 37, diameter: 0.173, surfaceArea: 5.426, resistance: 57.62, cm2PerOhm: 0.094, weight: 0.170 },
                { wireSize: 38, diameter: 0.152, surfaceArea: 4.788, resistance: 74.01, cm2PerOhm: 0.065, weight: 0.132 },
                { wireSize: 39, diameter: 0.132, surfaceArea: 4.149, resistance: 98.53, cm2PerOhm: 0.042, weight: 0.099 },
                { wireSize: 40, diameter: 0.122, surfaceArea: 3.830, resistance: 115.6, cm2PerOhm: 0.033, weight: 0.085 },
                { wireSize: 41, diameter: 0.112, surfaceArea: 3.511, resistance: 137.6, cm2PerOhm: 0.026, weight: 0.071 },
                { wireSize: 42, diameter: 0.102, surfaceArea: 3.192, resistance: 166.5, cm2PerOhm: 0.019, weight: 0.059 }
            ]
        },
    },
    {
        id: 6,
        title: "Wire ",
        description1: "Wire in a wide range of alloys optimized for use in, for example, resistance, high-temperature and conductive applications.",
        description2: "Round and flat resistance heating wire and resistance wire with bright annealed or oxidized surface, depending on size. Round resistance wire sizes up to 0.40 mm (0.0157 inch) are available with insulation and coating.",
        tabPara1: 'Product forms available are:',
        list1: 'Round wire',
        list2: 'Flat wire (Ribbon)',
        list3: 'Shaped wire',
        tabPara2: 'The wire is supplied on spools, in coils, in pail pack or as straightened lengths and available with or without coating.',
        productDeimg: 'images/product1.jpg',
        tabChracH1: 'Product forms and size range',
        tabChracH21: 'Round wire',
        tabChracpP1: '0.010-12 mm (0.00039-0.472 inch) Other sizes are available on request.',
        tabChracH22: 'Ribbon (flat wire)',
        tabChracpP2: `Thickness: 0.023-0.8 mm (0.0009-0.031 inch)
                      Width: 0.038-4 mm (0.0015-0.157 inch)
                      Width/thickness ratio max 40, depending on alloy and tolerance
                      Other sizes are available on request.`,
        tabChracH3: 'Resistance tolerance',
        tabChracpP3: 'Standard resistance tolerance for wire is listed in the following table. Wire can be supplied to closer tolerance on request. The data is valid at 20°C (68°F).',
        tabChracH4: 'Delivery forms',
        tabChracpP4: 'Smaith Alloy resistance wire is delivered on spools, in coils, in pail pack or as straightened lengths.',
        tabChracH5: 'Insulation and coating',
        tabChracpP5: 'The Smaith Alloy program includes a wide range of insulation coatings, bondable coatings and metallic coatings such as electroplating and anodizing. All coatings are available in various colors.',
        tabChracH6: 'Marking',
        tabChracpP6: 'Each spool/package of wire is supplied with a label or tag showing alloy type, nominal size, tara and net weight, resistance W/m (W/ft), charge number and a reference number.',
        tabChracH7: 'Stock program',
        tabChracpP7: 'We have a number of frequently used products in stock. Please contact us for details.'
    },
    {
        id: 7,
        title: "Strip",
        description1: "Strip in a wide range of alloys optimized for use in electrical resistance and high-temperature applications. Standard sizes range from thickness 0.10 to 3.5 mm (0.0039 to 0.1378 inch) and width 4-195 mm (0.157-7.68 inch).",
        tabPara1: "Our wide range of resistance heating alloys in strip form makes it possible to select the most appropriate grade and size for each respective application, resulting in optimum end-product performance. The consistent resistivity from delivery to delivery facilitates trouble-free production.",
        productDeimg: 'images/product1.jpg',
        tabChracH1: "Size range",
        tabChracpP1: `Thickness: 0.10-4 mm (0.00394-0.157 inch)
                      Width: 4-200 mm (0.157-7.874 inch)
                      Other sizes can be delivered on request.`,
        tabChracH3: "Resistance tolerance",
        tabChracpP3: "Standard resistance tolerance for strip is ± 5%, but strip with closer resistance tolerance can be delivered on request.",
        tabChracH4: "Delivery forms",
        tabChracpP4: "Smith Alloy resistance heating strip is supplied in coils with an internal diameter of Ø 400 mm or in straightened lengths.",
        tabChracH5: "Marking",
        tabChracpP5: "Each coil of strip is supplied with a label or tag showing alloy type, nominal size, tara and net weight, resistance Ω/m (Ω /ft) and charge number."
    },
    {
        id: 8,
        title: "Ribbon",
        description1: "High resistance, high powered bayonet heating elements fabricated from edge-wound ribbon, for use in a large variety of different industrial furnaces.",
        tabPara1: "Edge-wound ribbon bayonet elements support roller hearth furnaces, pit furnaces, batch furnaces, low temperature aluminum tempering furnaces and exothermic gas generators.",
        productDeimg: "aboutimg", // Replace with the actual image path or variable
        ribbonLi1: "Higher power density",
        ribbonLi2: "Long service life at all temperatures",
        ribbonLi3: "Horizontal or vertical mounting",
        tabChracH1: "Size range",
        tabChracpP1: `Thickness: 0.10-4 mm (0.00394-0.157 inch)
                      Width: 4-200 mm (0.157-7.874 inch)
                      Other sizes can be delivered on request.`,
        tabChracH3: "Resistance tolerance",
        tabChracpP3: "Standard resistance tolerance for strip is ± 5%, but strip with closer resistance tolerance can be delivered on request."
    },
];

function TryProductDetails() {
    const { id } = useParams(); // URL se ID le rahe hain
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(parseInt(id) - 1); // Pehla tab default hoga jo ID match kare
    const [activePropertyTab, setActivePropertyTab] = useState('mechanical'); // Default property tab

    // Agar koi wrong ID daale to error dikhaye
    if (activeTab < 0 || activeTab >= products.length) {
        return <h2>Product not found</h2>;
    }

    const handleTabClick = (index) => {
        setActiveTab(index);
        navigate(`/product/${products[index].id}`); // URL update karega
    };

    const activeProduct = products[activeTab];

    return (
        <div className="container">
            <div className="product-detail">
                <h2 className="product-head">Products</h2>

                <div className="tabs">
                    <button className="home-button" onClick={() => navigate("/")}>
                        Home
                    </button>
                    {products.map((product, index) => (
                        <button
                            key={product.id}
                            className={`tab-button ${activeTab === index ? "active" : ""}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {product.title}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    <div className="row">
                        <div className="col-md-7">
                            <h2>{activeProduct.title}</h2>
                            <p>{activeProduct.description1}</p>
                            <p>{activeProduct.description2}</p>
                        </div>
                        <div className="col-md-5 product-img-div">
                            <img className="productimg" src={activeProduct.image} alt="" />
                        </div>
                    </div>

                    {/* ============================ smithalloy 80 =========================*/}
                    {activeProduct.id === 1 && (
                        //========================= smithalloy 80 Switch Button Case =========================
                        <div className="property-tabs">
                            <button
                                className={`property-tab-button ${activePropertyTab === 'mechanical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('mechanical')}
                                style={{ backgroundColor: activePropertyTab === 'mechanical' ? 'red' : '' }}
                            >
                                Mechanical Properties
                            </button>
                            <button
                                className={`property-tab-button ${activePropertyTab === 'chemical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('chemical')}
                                style={{ backgroundColor: activePropertyTab === 'chemical' ? 'red' : '' }}
                            >
                                Chemical Properties
                            </button>
                            <button
                                className={`property-tab-button ${activePropertyTab === 'physical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('physical')}
                                style={{ backgroundColor: activePropertyTab === 'physical' ? 'red' : '' }}
                            >
                                Physical Properties
                            </button>
                        </div>
                    )}

                    {activeProduct.id === 1 && activePropertyTab === 'chemical' && activeProduct.chemicalComposition && (
                        //========================= smithalloy 80 Chemical Properties =========================
                        <>
                            <h3 className="tableTile">{activeProduct.chemicalComposition.title}</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Element</th>
                                        {activeProduct.chemicalComposition.elements.map((element, index) => (
                                            <th key={index}>{element}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Min">Min</td>
                                        {activeProduct.chemicalComposition.min.map((minValue, index) => (
                                            <td key={index} data-label={activeProduct.chemicalComposition.elements[index]}>{minValue}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td data-label="Max">Max</td>
                                        {activeProduct.chemicalComposition.max.map((maxValue, index) => (
                                            <td key={index} data-label={activeProduct.chemicalComposition.elements[index]}>{maxValue}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}

                    {activeProduct.id === 1 && activePropertyTab === 'mechanical' && activeProduct.mechanicalProperties && (
                        //========================= smithalloy 80 Mechanical Properties =========================
                        <>
                            <h3 className="tableTile">{activeProduct.mechanicalProperties.title}</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Wire Size</th>
                                        <th>Yield Strength</th>
                                        <th>Tensile Strength</th>
                                        <th>Elongation</th>
                                        <th>Hardness</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeProduct.mechanicalProperties.table.map((row, index) => (
                                        <tr key={index}>
                                            <td data-label="Wire Size">{row.wireSize}</td>
                                            <td data-label="Yield Strength">{row.yieldStrength}</td>
                                            <td data-label="Tensile Strength">{row.tensileStrength}</td>
                                            <td data-label="Elongation">{row.elongation}</td>
                                            <td data-label="Hardness">{row.hardness}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {activeProduct.mechanicalProperties.elevatedTemperature && (
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>{activeProduct.mechanicalProperties.creepStrength.subTitle}</h4>
                                        <table className='longtable'>
                                            <thead>
                                                <tr>
                                                    <th>Temperature</th>
                                                    <th>MPa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.mechanicalProperties.creepStrength.table.map((row, index) => (
                                                    <tr key={index}>
                                                        <td data-label="Temperature">{row.temperature}</td>
                                                        <td data-label="MPa">{row.MPa}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>{activeProduct.mechanicalProperties.elevatedTemperature.subTitle}</h4>
                                        <table className='longtable'>
                                            <thead>
                                                <tr>
                                                    <th>Temperature</th>
                                                    <th>MPa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.mechanicalProperties.elevatedTemperature.table.map((row, index) => (
                                                    <tr key={index}>
                                                        <td data-label="Temperature">{row.temperature}</td>
                                                        <td data-label="MPa">{row.MPa}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <i><p>{activeProduct.mechanicalProperties.elevatedTemperature.tensile}</p></i>
                                    </div>

                                </div>
                            )}
                        </>
                    )}

                    {activeProduct.id === 1 && activePropertyTab === 'physical' && activeProduct.physicalProperties && (
                        //========================= smithalloy 80 Physical Properties =========================
                        <>
                            <h3 className="tableTile">{activeProduct.physicalProperties.title}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{activeProduct.physicalProperties.density.property}</td>
                                        <td>{activeProduct.physicalProperties.density.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{activeProduct.physicalProperties.electricalResistivity.property}</td>
                                        <td>{activeProduct.physicalProperties.electricalResistivity.value}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Temperature factor of resistivity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <td>Temperature (°C)</td>
                                        {activeProduct.physicalProperties.temperatureFactorOfResistivity.map((item, index) => (
                                            <td key={index}>{item.temperature}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Temperature (°C)">Ct</td>
                                        {activeProduct.physicalProperties.temperatureFactorOfResistivity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.ct}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Coefficient of thermal expansion</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Temperature (°C)</th>
                                        <th>Thermal Expansion (x 10⁻⁶/K)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeProduct.physicalProperties.coefficientOfThermalExpansion.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.temperatureRange}</td>
                                            <td>{item.expansion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className='table-title'>Thermal conductivity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        {activeProduct.physicalProperties.thermalConductivity.map((item, index) => (
                                            <th key={index}>{item.temperature}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Property">W m⁻¹ K⁻¹</td>
                                        {activeProduct.physicalProperties.thermalConductivity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.value}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Specific heat capacity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        {activeProduct.physicalProperties.specificHeatCapacity.map((item, index) => (
                                            <th key={index}>{item.temperature}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Property">kJ kg⁻¹ K⁻¹</td>
                                        {activeProduct.physicalProperties.specificHeatCapacity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.value}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <table>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.meltingPoint.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.meltingPoint.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.maxOperatingTemperature.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.maxOperatingTemperature.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.magneticProperties.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.magneticProperties.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.emissivity.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.emissivity.value}</td>
                                </tr>
                            </table>
                        </>
                    )}

                    {/* ============================ smithalloy 60 =========================*/}
                    {activeProduct.id === 2 && (
                        //======================== smithalloy 60 Switch Button case  =======================
                        <div className="property-tabs">
                            <button
                                className={`property-tab-button ${activePropertyTab === 'mechanical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('mechanical')}
                                style={{ backgroundColor: activePropertyTab === 'mechanical' ? 'red' : '' }}
                            >
                                Mechanical Properties
                            </button>
                            <button
                                className={`property-tab-button ${activePropertyTab === 'chemical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('chemical')}
                                style={{ backgroundColor: activePropertyTab === 'chemical' ? 'red' : '' }}
                            >
                                Chemical Properties
                            </button>
                            <button
                                className={`property-tab-button ${activePropertyTab === 'physical' ? "active" : ""}`}
                                onClick={() => setActivePropertyTab('physical')}
                                style={{ backgroundColor: activePropertyTab === 'physical' ? 'red' : '' }}
                            >
                                Physical Properties
                            </button>
                        </div>
                    )}

                    {activeProduct.id === 2 && activePropertyTab === 'chemical' && activeProduct.chemicalComposition && (
                        //======================== smithalloy 60 Chemical Properties Table =======================
                        <>
                            <h3 className="tableTile">{activeProduct.chemicalComposition.title}</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Element</th>
                                        {activeProduct.chemicalComposition.elements.map((element, index) => (
                                            <th key={index}>{element}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Min">Min</td>
                                        {activeProduct.chemicalComposition.min.map((minValue, index) => (
                                            <td key={index} data-label={activeProduct.chemicalComposition.elements[index]}>{minValue}</td>
                                        ))}
                                    </tr>
                                    <tr>
                                        <td data-label="Max">Max</td>
                                        {activeProduct.chemicalComposition.max.map((maxValue, index) => (
                                            <td key={index} data-label={activeProduct.chemicalComposition.elements[index]}>{maxValue}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    )}

                    {activeProduct.id === 2 && activePropertyTab === 'mechanical' && activeProduct.mechanicalProperties && (
                        //======================== smithalloy 60 Mechanical Properties Table =======================
                        <>
                            <h3 className="tableTile">{activeProduct.mechanicalProperties.title}</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Wire Size</th>
                                        <th>Yield Strength</th>
                                        <th>Tensile Strength</th>
                                        <th>Elongation</th>
                                        <th>Hardness</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeProduct.mechanicalProperties.table.map((row, index) => (
                                        <tr key={index}>
                                            <td data-label="Wire Size">{row.wireSize}</td>
                                            <td data-label="Yield Strength">{row.yieldStrength}</td>
                                            <td data-label="Tensile Strength">{row.tensileStrength}</td>
                                            <td data-label="Elongation">{row.elongation}</td>
                                            <td data-label="Hardness">{row.hardness}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {activeProduct.mechanicalProperties.elevatedTemperature && (
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>{activeProduct.mechanicalProperties.creepStrength.subTitle}</h4>
                                        <table className='longtable'>
                                            <thead>
                                                <tr>
                                                    <th>Temperature</th>
                                                    <th>MPa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.mechanicalProperties.creepStrength.table.map((row, index) => (
                                                    <tr key={index}>
                                                        <td data-label="Temperature">{row.temperature}</td>
                                                        <td data-label="MPa">{row.MPa}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>{activeProduct.mechanicalProperties.elevatedTemperature.subTitle}</h4>
                                        <table className='longtable'>
                                            <thead>
                                                <tr>
                                                    <th>Temperature</th>
                                                    <th>MPa</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.mechanicalProperties.elevatedTemperature.table.map((row, index) => (
                                                    <tr key={index}>
                                                        <td data-label="Temperature">{row.temperature}</td>
                                                        <td data-label="MPa">{row.MPa}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p><i>{activeProduct.mechanicalProperties.elevatedTemperature.tensile}</i></p>
                                    </div>

                                </div>
                            )}
                        </>
                    )}

                    {activeProduct.id === 2 && activePropertyTab === 'physical' && activeProduct.physicalProperties && (
                        //======================== smithalloy 60 Physical Properties Table and Content =======================
                        <>
                            <h3 className="tableTile">{activeProduct.physicalProperties.title}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{activeProduct.physicalProperties.density.property}</td>
                                        <td>{activeProduct.physicalProperties.density.value}</td>
                                    </tr>
                                    <tr>
                                        <td>{activeProduct.physicalProperties.electricalResistivity.property}</td>
                                        <td>{activeProduct.physicalProperties.electricalResistivity.value}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Temperature factor of resistivity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <td>Temperature (°C)</td>
                                        {activeProduct.physicalProperties.temperatureFactorOfResistivity.map((item, index) => (
                                            <td key={index}>{item.temperature}</td>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Temperature (°C)">Ct</td>
                                        {activeProduct.physicalProperties.temperatureFactorOfResistivity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.ct}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Coefficient of thermal expansion</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Temperature (°C)</th>
                                        <th>Thermal Expansion (x 10⁻⁶/K)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeProduct.physicalProperties.coefficientOfThermalExpansion.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.temperatureRange}</td>
                                            <td>{item.expansion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h3 className='table-title'>Thermal conductivity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        {activeProduct.physicalProperties.thermalConductivity.map((item, index) => (
                                            <th key={index}>{item.temperature}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Property">W m⁻¹ K⁻¹</td>
                                        {activeProduct.physicalProperties.thermalConductivity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.value}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <h3 className='table-title'>Specific heat capacity</h3>
                            <table className='longtable'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        {activeProduct.physicalProperties.specificHeatCapacity.map((item, index) => (
                                            <th key={index}>{item.temperature}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Property">kJ kg⁻¹ K⁻¹</td>
                                        {activeProduct.physicalProperties.specificHeatCapacity.map((item, index) => (
                                            <td key={index} data-label={item.temperature}>{item.value}</td>
                                        ))}
                                    </tr>
                                </tbody>
                            </table>

                            <table>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.meltingPoint.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.meltingPoint.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.maxOperatingTemperature.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.maxOperatingTemperature.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.magneticProperties.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.magneticProperties.value}</td>
                                </tr>
                                <tr>
                                    <td>{activeProduct.physicalProperties.otherProperties.emissivity.property}</td>
                                    <td>{activeProduct.physicalProperties.otherProperties.emissivity.value}</td>
                                </tr>
                            </table>
                        </>
                    )}

                    {/* ============================ smithalloy 255a =========================*/}
                    {activeProduct.id === 3 && (
                        <>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.classification.subTitle}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Classification</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.classification.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.property}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.temperatureResistanceFactor.title}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Temperature (°C)</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.temperatureResistanceFactor.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.temperature}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="table-container tablebottom">
                                <h2 className="table-title">{activeProduct.smithAlloy255A.subTitle}</h2>
                                <table style={{ overflowX: "auto" }} className='longtable2'>
                                    <thead>
                                        <tr>
                                            <th>Wire Size (SWG)</th>
                                            <th>Diameter (mm)</th>
                                            <th>Surface Area (cm²/m)</th>
                                            <th>Resistance (Ohms/m)</th>
                                            <th>Cm²/ohm</th>
                                            <th>Weight (Grams/m)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeProduct.smithAlloy255A.properties.map((property, index) => (
                                            <tr key={index}>
                                                <td>{property.wireSize}</td>
                                                <td>{property.diameter}</td>
                                                <td>{property.surfaceArea}</td>
                                                <td>{property.resistance}</td>
                                                <td>{property.cm2PerOhm}</td>
                                                <td>{property.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* ============================ smithalloy 214R =========================*/}
                    {activeProduct.id === 4 && (
                        <>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.classification.subTitle}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Classification</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.classification.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.classification}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.temperatureResistanceFactor.title}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Temperature (°C)</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.temperatureResistanceFactor.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.temperature}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="table-container tablebottom">
                                <h2 className="table-title">{activeProduct.smithAlloy214R.subTitle}</h2>
                                <table style={{ overflowX: "auto" }} className='longtable2'>
                                    <thead>
                                        <tr>
                                            <th>Wire Size (SWG)</th>
                                            <th>Diameter (mm)</th>
                                            <th>Surface Area (cm²/m)</th>
                                            <th>Resistance (Ohms/m)</th>
                                            <th>Cm²/ohm</th>
                                            <th>Weight (Grams/m)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeProduct.smithAlloy214R.properties.map((property, index) => (
                                            <tr key={index}>
                                                <td>{property.wireSize}</td>
                                                <td>{property.diameter}</td>
                                                <td>{property.surfaceArea}</td>
                                                <td>{property.resistance}</td>
                                                <td>{property.cm2PerOhm}</td>
                                                <td>{property.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* ============================ smithalloy 235D =========================*/}
                    {activeProduct.id === 5 && (
                        <>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.classification.subTitle}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Classification</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.classification.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.classification}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="table-container">
                                        <h3 className="table-title">{activeProduct.temperatureResistanceFactor.title}</h3>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Temperature (°C)</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {activeProduct.temperatureResistanceFactor.properties.map((property, index) => (
                                                    <tr key={index}>
                                                        <td>{property.temperature}</td>
                                                        <td>{property.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="table-container tablebottom">
                                <h2 className="table-title">{activeProduct.smithAlloy235D.subTitle}</h2>
                                <table style={{ overflowX: "auto" }} className='longtable2'>
                                    <thead>
                                        <tr>
                                            <th>Wire Size (SWG)</th>
                                            <th>Diameter (mm)</th>
                                            <th>Surface Area (cm²/m)</th>
                                            <th>Resistance (Ohms/m)</th>
                                            <th>Cm²/ohm</th>
                                            <th>Weight (Grams/m)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeProduct.smithAlloy235D.properties.map((property, index) => (
                                            <tr key={index}>
                                                <td>{property.wireSize}</td>
                                                <td>{property.diameter}</td>
                                                <td>{property.surfaceArea}</td>
                                                <td>{property.resistance}</td>
                                                <td>{property.cm2PerOhm}</td>
                                                <td>{property.weight}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                    {/* ============================ wire =========================*/}
                    {activeProduct.id === 6 && (
                        <div className="row">
                            <div className="col-md-6">
                                <button className="property-tab-button">
                                    Characteristics
                                </button>
                                <h3 className='tabChH1'>{activeProduct.tabChracH1}</h3>
                                <h4 className='tabChH21'>{activeProduct.tabChracH21}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP1}</p>
                                <h4 className='tabChH21'>{activeProduct.tabChracH22}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP2}</p>

                                <h4 className='tabChH1'>{activeProduct.tabChracH3}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP3}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH4}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP4}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH5}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP5}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH6}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP6}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH7}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP7}</p>
                            </div>
                            <div className="col-md-6">
                                <button className="property-tab-button">
                                    Information
                                </button>
                                <p className='tabChH1'>{activeProduct.tabPara1}</p>
                                <ul className='tablist'>
                                    <li>{activeProduct.list1}</li>
                                    <li>{activeProduct.list2}</li>
                                    <li>{activeProduct.list3}</li>
                                </ul>
                                <p className='tabpara2'>{activeProduct.tabPara2}</p>
                            </div>

                        </div>
                    )}

                    {/* ============================ Strip =========================*/}
                    {activeProduct.id === 7 && (
                        <div className="row">
                            <div className="col-md-6">
                                <button className="property-tab-button">
                                    Characteristics
                                </button>
                                <h3 className='tabChH1'>{activeProduct.tabChracH1}</h3>
                                <p className='tabChpara1'>{activeProduct.tabChracpP1}</p>

                                <h4 className='tabChH1'>{activeProduct.tabChracH3}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP3}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH4}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP4}</p>
                                <h4 className='tabChH1'>{activeProduct.tabChracH5}</h4>
                                <p className='tabChpara1'>{activeProduct.tabChracpP5}</p>
                            </div>
                            <div className="col-md-6">
                                <button className="property-tab-button">
                                    Information
                                </button>
                                <p className='tabpara2'>{activeProduct.tabPara1}</p>
                            </div>

                        </div>
                    )}

                    {/* ============================ Ribbon =========================*/}
                    {activeProduct.id === 8 && (
                        <>
                            <ul className='tablist'>
                                <li>{activeProduct.ribbonLi1}</li>
                                <li>{activeProduct.ribbonLi2}</li>
                                <li>{activeProduct.ribbonLi3}</li>
                            </ul>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="property-tab-button">
                                        Characteristics
                                    </button>
                                    <h3 className='tabChH1'>{activeProduct.tabChracH1}</h3>
                                    <p className='tabChpara1'>{activeProduct.tabChracpP1}</p>

                                    <h4 className='tabChH1'>{activeProduct.tabChracH3}</h4>
                                    <p className='tabChpara1'>{activeProduct.tabChracpP3}</p>
                                </div>
                                <div className="col-md-6">
                                    <button className="property-tab-button">
                                        Information
                                    </button>
                                    <p className='tabpara2'>{activeProduct.tabPara1}</p>
                                </div>

                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TryProductDetails;