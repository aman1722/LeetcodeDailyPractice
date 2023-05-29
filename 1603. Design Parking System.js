class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType) {
    if (
      (carType == 1 && this.big == 0) ||
      (carType == 2 && this.medium == 0) ||
      (carType == 3 && this.small == 0)
    )
      return false;

    if (carType == 1) this.big--;
    if (carType == 2) this.medium--;
    if (carType == 3) this.small--;

    return true;
  }
}