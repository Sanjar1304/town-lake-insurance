import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "enumToArray",
  standalone: true,
})
export class EnumToArrayPipe implements PipeTransform {
  public transform(data: object, excludeValue?: unknown): unknown[] {
    return Object.values(data).filter((val) => {
      if (typeof excludeValue === "object" && excludeValue !== null) {
        return !(excludeValue as unknown[]).includes(val);
      }
      return val !== excludeValue;
    });
  }
}
