import { Request } from 'express';
import { Course } from '../models/course';

interface UpdateCourseTopic {
    id: number;
    topic: string;
}

export function updateCourseTopic({ id, topic }: UpdateCourseTopic, req: Request): Course {
    return {
        id,
        author: 'Bill Cheng',
        title: 'My Awesome Book',
        topic
    };
}