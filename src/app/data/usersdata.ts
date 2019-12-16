export class Usersdata {
    GetAllUsers() : Users[]
    {
        return [ 
          {name: "subhajit",
          gender:"M",
          address:"Kolkata",
          contact:"991844333",
          projectid:"cnx",
          role:"associate TL"
        },
        {
            name: "divakar",
            gender:"M",
            address:"Chennai",
            contact:"4378873484",
            projectid:"cnx",
            role:"associate TL"
          },
          {
            name: "ranjitha",
            gender:"F",
            address:"Bangalore",
            contact:"7474732233",
            projectid:"cnx",
            role:"software engineer"
          },
          {
            name: "Priyanka",
            gender:"F",
            address:"hubli",
            contact:"743323443",
            projectid:"cnx",
            role:"senior software engineer"
          }];
        
  }
}
    export class Users implements UserInterface
    {
        name: string;
        gender:string;
        address:string;
        contact:string;
        projectid:string;
        role:string;
    }

    export interface UserInterface
    {
            name: string;
            gender:string;
            address:string;
            contact:string;
            projectid:string;
            role:string;
    }

