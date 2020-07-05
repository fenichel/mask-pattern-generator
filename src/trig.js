export function degreeToRadian(degreeAngle) {
    return degreeAngle * Math.PI / 180;
}

export function radianToDegree(radianAngle) {
    return 180 * radianAngle / Math.PI;
}

export function getX(degreeRadian, hypotenuse) {
    return Math.cos(degreeRadian) * hypotenuse;
}

export function getY(degreeRadian, hypotenuse) {
    return Math.sin(degreeRadian) * hypotenuse;
}

export function getAngleA(a, b, c) {
    const numerator = b*b + c*c - a*a
    const denominator = 2 * b * c;
    return Math.acos(numerator / denominator);
}