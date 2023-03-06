// TODO: refactor to more configurable, such as per country or per school, etc. & import
const gradesStruct:Record<string, any> = {
    "A+": [97,100],
    "A": [93,96],
    "A-": [90,92],
    "B+": [87,89],
    "B": [83,86],
    "B-": [80,82],
    "C+": [77,79],
    "C": [73,76],
    "C-": [70,72],
    "D+": [67, 69],
    "D": [63,66],
    "D-": [60,62],
    "F": [0, 59]
  }
  
  const gradesArray = Object.entries(gradesStruct);
  
  const avg = (numbers:number[]) => Math.floor((numbers?.[0] + numbers?.[1]) / 2) || 0;
  export const scoreToGrade = (score:number) => gradesArray.find(([_, range]) => score >= range[0] && score <= range[1])?.[0];
  export const gradeToScore = (grade:string) => avg(gradesStruct[grade]);
  