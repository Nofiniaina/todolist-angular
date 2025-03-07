export class Task {
    _id: string = '';
    title: string = '';
    description: string = '';
    created_at?: Date;
    due_date?: Date;
    completed?: boolean ;

    constructor() {}
}