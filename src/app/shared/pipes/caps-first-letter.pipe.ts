import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capsFirstLetterPipe",
  standalone: true,
})
export class CapsFirstLetterPipe implements PipeTransform {
  public transform(name: string | undefined | null): string {
    if (!name) return "";

    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }
}
