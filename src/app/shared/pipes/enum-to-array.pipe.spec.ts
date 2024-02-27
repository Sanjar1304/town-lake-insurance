import { EnumToArrayPipe } from "@shared/pipes/enum-to-array.pipe";
import { TestBed } from "@angular/core/testing";

describe("EnumToArrayPipe", () => {
  let pipe: EnumToArrayPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [EnumToArrayPipe],
    });
    pipe = TestBed.inject(EnumToArrayPipe);
  });

  it("create instance", (): void => {
    expect(pipe).toBeTruthy();
  });

  it("transform enum values to array", (): void => {
    enum TestEnum {
      Value1 = "Value1",
      Value2 = "Value2",
      Value3 = "Value3",
    }

    const result = pipe.transform(TestEnum);
    expect(result).toEqual(["Value1", "Value2", "Value3"]);
  });

  it("transform enum to array excluding a specific value", (): void => {
    enum TestEnum {
      Value1 = "Value1",
      Value2 = "Value2",
      Value3 = "Value3",
    }

    const excludeValue = TestEnum.Value2;
    const result = pipe.transform(TestEnum, excludeValue);
    expect(result).toEqual(["Value1", "Value3"]);
  });

  it("transforms enum value to array excluding value from an array", () => {
    enum TestEnum {
      Value1 = "Value1",
      Value2 = "Value2",
      Value3 = "Value3",
    }

    const excludeValues = [TestEnum.Value1, TestEnum.Value3];
    const result = pipe.transform(TestEnum, excludeValues);
    expect(result).toEqual(["Value2"]);
  });

  it("transform enum value to array without excluding any value", () => {
    enum TestEnum {
      Value1 = "Value1",
      Value2 = "Value2",
      Value3 = "Value3",
    }

    const result = pipe.transform(TestEnum);
    expect(result).toEqual(["Value1", "Value2", "Value3"]);
  });
});
