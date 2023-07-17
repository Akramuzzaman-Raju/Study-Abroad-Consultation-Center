import { IsOptional } from 'class-validator';

export class ScholarshipDto {
  @IsOptional()
  scholarshipId: string;
  @IsOptional()
  universityName: string;
  @IsOptional()
  eligibleCourse: string;
  @IsOptional()
  possibleScholarship: string;
}