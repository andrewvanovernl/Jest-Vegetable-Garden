//(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Greetings, have a nice dayyy! 2 hips for Tuesdayyy(づ｡◕‿‿◕｡)づ
//◎[▪‿▪]◎ Hip hip!           (✿◠‿◠)       Hip hip!         ≧◡≦
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
    yield: 3,
    cost: 3,
    price: 6,
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
const avocado = {
    name: "avocado",
    yield: 30,
    cost: 2,
    price: 0.5,
    factor: {
        sun: {
            low: -30,
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
const environmentFactors = {
     wind: "medium",
    sun: "high",
};
const getYieldForCrop = (item, envDetails) => {
    plant = item.crop
    plantYield = getYieldForPlant(plant, envDetails)
    //console.log(plant yield)
    const cropNums = item.numCrops
    yieldCrop = plantYield * cropNums
    console.log("Yield for the crops is:", yieldCrop)
    return yieldCrop;
}
//getYieldForCrop(input, environmentFactors)
const getTotalYield = (items, envDetails) => {
    const cropsYield = items.crops.map((elem) => {
        outcome = getYieldForCrop(elem, envDetails)
        console.log("Outcome Profit:", outcome)
        return outcome
    });
    totalYield = cropsYield.reduce((acc, cur) => acc + cur);
    console.log("Total Yield is", totalYield)
    return totalYield
}
const getProfitForCrop = (item, envDetails) => {
    const cropRevenue = getRevenueForCrop(item, envDetails);
    //console.log(Revenue of crop, cropRevenue)
    const cropCost = getCostsForCrop(item);
    //console.log(crop/Cost)
    cropProfit = cropRevenue - cropCost
    console.log("The profit of the crop is", cropProfit)
    return cropProfit
}
const getCostsForCrop = (item) => {
    price = item.crop.cost;
    amount = item.numCrops;
    //console.log(# of plants, amount)
    cropCost = price * amount
    console.log("Cost of the crop is:", cropCost)
    return cropCost
}
const getRevenueForCrop = (item, envDetails) => {
    cropYield = getYieldForCrop(item, envDetails)
    //console.log("Yield of plant, cropYield status)

    price = item.crop.price;
    //console.log("Plant Price, price/crops)

    revenueCrop = cropYield * price
    console.log("Revenue of the crop is:", revenueCrop)
    return revenueCrop
}
const getTotalProfit = (items, envDetails) => {
    const cropsYield = items.crops.map((elem) => {
        outcome = getProfitForCrop(elem, envDetails)
        // console.log( Profit/outcome)
        return outcome
    });
    totalProfit = cropsYield.reduce((acc, cur) => acc + cur);
    console.log("Total Profit is", totalProfit)
    return totalProfit
}
//getTotalProf,crops/environmentFactor)
const getYieldForPlant = (plant, envDetails) => {
    plantYield = plant.yield
    if (envDetails === undefined) {
        console.log("plant Yield is:", plantYield)
        return plantYield;
    }
    calculation = (envDetail) => {
        if (envDetail === undefined) {
            return 1;
        } else {
            return (100 + envDetail) / 100;
        }
    };
    const windFactor = envDetails.wind;
    const sunShine = envDetails.sun;
    const windConditions = calculation(plant.factor.wind[windFactor]);
    const sunCondtions = calculation(plant.factor.sun[sunShine]);
    outcome = plantYield * sunCondtions * windConditions;
    console.log("Yield for plant is:", outcome)
    return outcome
}
module.exports = {

    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
};