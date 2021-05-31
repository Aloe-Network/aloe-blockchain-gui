const units = require("../../util/units");

describe("units", () => {
  describe("#getUnit", () => {
    it("gets unit of aloe", () => {
      const result = units.getUnit("aloe");

      expect(result).toBe(1);
    });
    it("gets unit of pups", () => {
      const result = units.getUnit("pups");

      expect(result).toBe(1e-12);
    });
    it("gets unit of coloured coin", () => {
      const result = units.getUnit("colouredcoin");

      expect(result).toBe(1e-9);
    });
    it("supports uppercase characters", () => {
      const result = units.getUnit("ALOE");

      expect(result).toBe(1);
    });
    it("gets unit of aloe using alias", () => {
      const result = units.getUnit("al");

      expect(result).toBe(1);
    });
    it("gets unit of pups using alias", () => {
      const result = units.getUnit("ps");

      expect(result).toBe(1e-12);
    });
    it("gets unit of coloured coin using alias", () => {
      const result = units.getUnit("cc");

      expect(result).toBe(1e-9);
    });
    it("throws an error if unit is not supported", () => {
      try {
        units.getUnit("bitcoin");
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe("#getDisplay", () => {
    it("gets display of aloe", () => {
      const result = units.getDisplay("aloe");

      expect(result).toEqual({
        format: "{amount} AL",
        fractionDigits: 12
      });
    });
    it("gets display of pups", () => {
      const result = units.getDisplay("pups");

      expect(result).toEqual({
        format: "{amount} PS",
        fractionDigits: 0
      });
    });
    it("gets display of coloured coin", () => {
      const result = units.getDisplay("colouredcoin");

      expect(result).toEqual({
        format: "{amount} CC",
        fractionDigits: 3
      });
    });
    it("throws an error if unit is not supported", () => {
      try {
        units.getDisplay("bitcoin");
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe("#setUnit", () => {
    it("adds a new unit", () => {
      units.setUnit("bitcoin", 1);

      const result = units.getUnit("bitcoin");

      expect(result).toEqual(1);
    });
    it("modifies an existing unit", () => {
      units.setUnit("aloe", 9);

      const result = units.getUnit("aloe");

      expect(result).toEqual(9);

      units.setUnit("aloe", 1);
    });
  });
  describe("#setDisplay", () => {
    it("sets a new display", () => {
      units.setDisplay("bitcoin", {
        format: "{amount} BTC",
        fractionDigits: 0
      });

      const result = units.getDisplay("bitcoin");

      expect(result).toEqual({
        format: "{amount} BTC",
        fractionDigits: 0
      });
    });
    it("updates an existing display", () => {
      units.setDisplay("aloe", {
        format: "{amount} ALOET",
        fractionDigits: 0
      });

      const result = units.getDisplay("aloe");

      expect(result).toEqual({
        format: "{amount} ALOET",
        fractionDigits: 0
      });
    });
  });
});
