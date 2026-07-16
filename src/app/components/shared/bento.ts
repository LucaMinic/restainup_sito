// Un tile "grande" ogni 3, per rompere la griglia uniforme con un ritmo asimmetrico (bento).
export function isBentoLarge(index: number) {
  return index % 3 === 0;
}
