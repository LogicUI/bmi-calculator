export const calculateBMIcmKg = (heightCm: number, weightKg: number) => {
    let heightMeters = heightCm / 100;
    return Number((weightKg / (heightMeters * heightMeters)).toFixed(2));
}

export const calculateBMIFtInStLbs = (heightFt: number, heightIn:number, weightSt: number, weightLbs : number) : number => {
    let totalHeightInInches = (heightFt * 12) + heightIn;
    let totalWeightInPounds = (weightSt * 14) + weightLbs;
    return Number(((703 * totalWeightInPounds) / (totalHeightInInches * totalHeightInInches)).toFixed(2));
}

export const lowerHealthyWeightRangeCM = (height: number): number  => {
    return Number((18.5 * (height/100) * (height/100)).toFixed(1))
}

export const upperEndHealthyWeightRangeCM = (height: number): number => {
    return Number((24.9 * (height/100) * (height/100)).toFixed(1))
}

export const lowerHealthyWeightRangeKg = (heightFt: number, heightInches: number): number => {
    const totalInches = heightFt * 12 + heightInches; 
    return 18.5 * ((totalInches * totalInches) / 703 )* 0.453592; 
};

export const upperEndHealthyWeightRangeKg = (heightFt: number, heightInches: number): number => {
    const totalInches = heightFt * 12 + heightInches;
    return 24.9 * ((totalInches * totalInches )/ 703) * 0.453592; 
};


export const convertKgToStones = (weightKg: number) : number => {
    const weightInPounds = weightKg * 2.20462; 
    const weightInStones = weightInPounds / 14; 
    return Math.floor(weightInStones);
}

export const convertKgToPounds = (weightKg: number): number => {
    const weightInPounds = weightKg * 2.20462;
    return Math.ceil(weightInPounds % 14);
}


export const getBMIWeightRange = (bmi: number): string => {
    type BMICategory = {
        min?: number;
        max?: number;
        label: string;
    };

    const bmiCategories: BMICategory[] = [
        { max: 18.5, label: "underweight " },
        { min: 18.5, max: 24.9, label: "healthy weight " },
        { min: 24.9, max: 30, label: "overweight " },
        { min: 30, label: "Obese weight " },
    ];

    const category = bmiCategories.find(c => 
        (c.min === undefined || bmi >= c.min) && 
        (c.max === undefined || bmi < c.max)
    );

    return category ? category.label : "Unknown";
};
