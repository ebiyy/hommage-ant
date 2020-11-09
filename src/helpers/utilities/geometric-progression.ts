export const getSumGeometricProgression = (
  initialTerm: number,
  commonRation: number,
  n: number,
) => {
  return (initialTerm * (1 - Math.pow(commonRation, n))) / (1 - commonRation);
};

export const getCurrentSumGeometricProgression = (
  initialTerm: number,
  commonRation: number,
  preQuantity: number,
  sellQuantity: number,
) => {
  const allCurrentSumGeometricProgression = getSumGeometricProgression(
    initialTerm,
    commonRation,
    sellQuantity + preQuantity,
  );

  return (
    allCurrentSumGeometricProgression -
    preSumGeometricProgression(preQuantity, initialTerm, commonRation)
  );
};

const preSumGeometricProgression = (
  preQuantity: number,
  initialTerm: number,
  commonRation: number,
) => {
  if (preQuantity === 0) {
    return 0;
  } else {
    return getSumGeometricProgression(initialTerm, commonRation, preQuantity);
  }
};

export const getGeometricProgression = (
  currentTerm: number,
  commonRation: number,
  n: number,
) => currentTerm * Math.pow(commonRation, n);

export const getMaxTerm = (
  currentCostTargetQuantity: number,
  initialTerm: number,
  commonRation: number,
) => {
  let actualValue =
    1 - (currentCostTargetQuantity * (1 - commonRation)) / initialTerm;
  let i = 0;
  while (actualValue >= commonRation) {
    i++;
    actualValue /= commonRation;
  }
  return i;
};
