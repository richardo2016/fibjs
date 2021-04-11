declare module "Users" {
    interface User {
        lastName: string;
        firstName: string;
        email: string;
    }

    interface Student extends User {
        graduation: number;
        mainTeacher: Teacher;
    }

    interface Teacher extends User {
        classes: Student[][];
        room: Building.Room;
    }
}

declare module "Building" {
    interface Room {
        name: string;
    }
}