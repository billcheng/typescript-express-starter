import { Request } from 'express';
import { Course } from '../models/course';

interface GetCourse {
    id: number;
}

export function getCourse({ id }: GetCourse, req: Request): Course {

    return {
        id: 1,
        author: 'Bill Cheng',
        title: 'My Awesome Book',
        topic: 'GraphQL'
    };

}