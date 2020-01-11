interface Reportable {
  summary(): string;
}

const oldCivic1 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  name: 'pepsi',
  color: 'brown',
  sugar: 40,
  summary(): string {
    return `${this.name} has ${this.sugar} grams of sugar`;
  }
};

const reportSummary = (item: Reportable): void => {
  console.log(item.summary());
};

reportSummary(oldCivic1);
reportSummary(drink);
