const alloy80 = [
{
    id: 1,
    image: "",
    title: "SmithAlloy 80",
    description1: "",
    description2: "",
    chemicalComposition: {
        title: "Chemical Composition",
        table: [
            { name: "C", min: "-", max: "0.10" },
            { name: "Si", min: "1.0", max: "1.7" },
            { name: "Mn", min: "-", max: "1.0" },
            { name: "Cr", min: "19.0", max: "21.0" },
            { name: "Ni", min: ">77", max: "-" },
            { name: "Fe", min: "-", max: "1.0" },
            { name: "AL", min: "-", max: "0.3" },
            { name: "S", min: "-", max: "0.01" },
            { name: "P", min: "-", max: "0.02" },
            { name: "Trace elements", min: "-", max: "-" }
        ]
    },
    mechanicalProperties: {
        title: "Mechanical Properties",
        table: [
            { wireSize: "1.0 mm", yieldStrength: "420 MPa", tensileStrength: "810 MPa", elongation: "30%", hardness: "180 Hv" },
            { wireSize: "4.0 mm", yieldStrength: "300 MPa", tensileStrength: "725 MPa", elongation: "30%", hardness: "160 Hv" }
        ],
        elevatedTemperature: {
            subTitle: "Mechanical Properties at Elevated Temperature",
            table: [
                { temperature: "900 °C", strength: "100 MPa" }
            ]
        }
    }
},
];

const alloy60 = {
};

export { alloy80, alloy60 };
