function calculateArea() {
    let radius = prompt("Enter the radius of the circle:");
    let area = Math.PI * Math.pow(radius, 2);
    return `The area of the circle with radius ${radius} is ${area.toFixed(2)}`;
}
alert(calculateArea());
