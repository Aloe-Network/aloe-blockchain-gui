const aloe = require("../../util/aloe");

describe("aloe", () => {
  it("converts number pups to aloe", () => {
    const result = aloe.pups_to_aloe(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string pups to aloe", () => {
    const result = aloe.pups_to_aloe("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number pups to aloe string", () => {
    const result = aloe.pups_to_aloe_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string pups to aloe string", () => {
    const result = aloe.pups_to_aloe_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number aloe to pups", () => {
    const result = aloe.aloe_to_pups(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string aloe to pups", () => {
    const result = aloe.aloe_to_pups("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number pups to colouredcoin", () => {
    const result = aloe.pups_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string pups to colouredcoin", () => {
    const result = aloe.pups_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number pups to colouredcoin string", () => {
    const result = aloe.pups_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string pups to colouredcoin string", () => {
    const result = aloe.pups_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to pups", () => {
    const result = aloe.colouredcoin_to_pups(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to pups", () => {
    const result = aloe.colouredcoin_to_pups("1000");

    expect(result).toBe(1000000);
  });
});
