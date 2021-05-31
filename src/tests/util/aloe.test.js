const aloe = require("../../util/aloe");

describe("aloe", () => {
  it("converts number mojo to aloe", () => {
    const result = aloe.mojo_to_aloe(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to aloe", () => {
    const result = aloe.mojo_to_aloe("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to aloe string", () => {
    const result = aloe.mojo_to_aloe_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to aloe string", () => {
    const result = aloe.mojo_to_aloe_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number aloe to mojo", () => {
    const result = aloe.aloe_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string aloe to mojo", () => {
    const result = aloe.aloe_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = aloe.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = aloe.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = aloe.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = aloe.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = aloe.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = aloe.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
