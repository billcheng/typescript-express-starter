import { Request } from 'express';
import { Course } from '../models/course';

type Courses = Course[];

interface GetCourses {
    topic: string;
}

export function getCourses({ topic }: GetCourses, req: Request): Courses {
    return [
        { id: 1, topic: 'GraphQL', title: 'My Awesome Book', author: 'Bill Cheng' }
    ];
}