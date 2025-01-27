const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class Aloe {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const aloe_formatter = (value, unit) => new Aloe(value, unit);

aloe_formatter.convert = convert;
aloe_formatter.setDisplay = units.setDisplay;
aloe_formatter.setUnit = units.setUnit;
aloe_formatter.getUnit = units.getUnit;
aloe_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const pups_to_aloe = (pups) => {
  return aloe_formatter(Number.parseInt(pups), 'pups').to('aloe').value();
};

export const aloe_to_pups = (aloe) => {
  return aloe_formatter(Number.parseFloat(Number(aloe)), 'aloe')
    .to('pups')
    .value();
};

export const pups_to_aloe_string = (pups) => {
  return aloe_formatter(Number(pups), 'pups').to('aloe').toString();
};

export const pups_to_colouredcoin = (pups) => {
  return aloe_formatter(Number.parseInt(pups), 'pups')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_pups = (colouredcoin) => {
  return aloe_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('pups')
    .value();
};

export const pups_to_colouredcoin_string = (pups) => {
  return aloe_formatter(Number(pups), 'pups').to('colouredcoin').toString();
};
