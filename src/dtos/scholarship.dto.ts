import { IsNotEmpty } from 'class-validator';

export class ScholarshipDto {
  @IsNotEmpty()
  scholarshipId: string;
  @IsNotEmpty()
  universityName: string;
  @IsNotEmpty()
  eligibleCourse: string;
  @IsNotEmpty()
  possibleScholarship: string;
}