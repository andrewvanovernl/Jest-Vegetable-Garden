const { getYieldForPlant,
    getTotalYield,
    getYieldForCrop,
    getRevenueForCrop,
    getCostsForCrop,
    getTotalProfit,
    getProfitForCrop
} = require("./functions");
describe("calculateTotalProfit", () => {
    test("Calculate total avocado, apple, and corn profits with environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const apple = {
            name: "apple",
            yield: 10,
            cost: 6,
            price: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 4,
            cost: 3,
            price: 3,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 0,
                    high: 0,
                },
            },
        };
        const crops = [
            { crop: avocado, numCrops: 10 },
            { crop: apple, numCrops: 30 },
            { crop: corn, numCrops: 20 },
        ];
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(1828);
    });
});
describe("calculateTotalYield", () => {
    test("calculate yield with x2 environmental factors", () => {
        const avocado = {
            name: "avocado",
            yield: 30,
            cost: 2,
            price: 0.5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const apple = {
            name: "apple",
            yield: 10,
            cost: 6,
            price: 5,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
            },
        };
        const corn = {
            name: "corn",
            yield: 4,
            cost: 3,
            price: 3,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
                wind: {
                    low: 0,
                    medium: 0,
                    high: 0,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 20 },
            { crop: avocado, numCrops: 60 },
            { crop: apple, numCrops: 30 },
        ];
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(2580);
    });
});
describe("calculateYieldForPlant", () => {
    test("calculate yield for plant with x2 factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "high",
            wind: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(27);
    });
    test("calculate yield for plant with 0 environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
        };
        expect(getYieldForPlant(corn)).toBe(30);
    });
    test("calculate yield for plant with 1 environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});
describe("calculateCostsForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        price: 4,
        cost: 4,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 0,
                medium: -20,
                high: -40,
            },
        },
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("calculate corn cost", () => {
        expect(getCostsForCrop(input)).toBe(40);
    });
});
describe("calculateRevenueForCrop", () => {
    test("revenue for corn crop considering environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            price: 4,
            cost: 6,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(1440);
    });
});
describe("calculateYieldForCrop", () => {
    test("calculate flat yield for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                wind: {
                    low: 0,
                    medium: -10,
                    high: -20,
                },
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 5,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(202.5);
    });
});
describe("calculateProfitForCrop", () => {
    test("calculate profit corn crop environmental factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            price: 8,
            cost: 5,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -40,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 7,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(1981);
    });
});

