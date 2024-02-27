import { TestBed } from "@angular/core/testing";

import { CapsFirstLetterPipe } from "./caps-first-letter.pipe";

describe("CapsFirstLetterPipe", () => {
  let pipe: CapsFirstLetterPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [CapsFirstLetterPipe],
    });
    pipe = TestBed.inject(CapsFirstLetterPipe);
  });

  it("create an instance", (): void => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "hello" to "Hello"', (): void => {
    const transformedString = pipe.transform("hello");
    expect(transformedString).toEqual("Hello");
  });

  it("transform 'SaNJar' to 'Sanjar'", (): void => {
    const upperCasedStr = pipe.transform("SaNJar");
    expect(upperCasedStr).toEqual("Sanjar");
  });

  it("empty string to empty string", (): void => {
    const emptyString = pipe.transform("");
    expect(emptyString).toEqual("");
  });

  it("undefined to empty string", (): void => {
    const undefinedValue = pipe.transform(undefined);
    expect(undefinedValue).toEqual("");
  });

  it("null to empty string", (): void => {
    const nullValue = pipe.transform(null);
    expect(nullValue).toEqual("");
  });
});
