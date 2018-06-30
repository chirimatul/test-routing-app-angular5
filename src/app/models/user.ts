export class User {
    id?:number;
    fName: string;
    lName: string;
    mobNum?: number;
    emailId: string;
    dob: Date;
    gender: Boolean;
    address?: String;
    city?: string
    countryId: number;
    zipCode: string;
    role: Roles;
    about?: string;
    // get Role(): string {
    //     return Roles.admin.toString();
    // }
    get country(): string {
        return "India";
    }

}

export enum Roles {
    admin,
    normal
}
